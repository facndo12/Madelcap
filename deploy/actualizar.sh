#!/usr/bin/env bash
# Actualiza el sitio si hay commits nuevos en el branch desplegado.
# Pensado para correr a mano o desde cron. Si no hay cambios, no hace nada.
#
#   ./deploy/actualizar.sh
#
# Cron cada 5 minutos:
#   */5 * * * * /var/www/madelcap/current/deploy/actualizar.sh >> /var/log/madelcap-deploy.log 2>&1
set -euo pipefail

DIR="${MADELCAP_DIR:-/var/www/madelcap/current}"
CONTENEDOR="${MADELCAP_CONTAINER:-madelcap-web}"

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

cd "$DIR"
RAMA="$(git rev-parse --abbrev-ref HEAD)"

git fetch --quiet origin "$RAMA"
LOCAL="$(git rev-parse HEAD)"
REMOTO="$(git rev-parse "origin/$RAMA")"

if [ "$LOCAL" = "$REMOTO" ]; then
  exit 0
fi

log "Cambios en $RAMA: ${LOCAL:0:7} -> ${REMOTO:0:7}"
git pull --ff-only --quiet

# El build hace rm -rf dist antes de reconstruir. Si falla a mitad de camino,
# el sitio se queda sin archivos. Por eso se guarda la version que estaba
# sirviendo y se restaura si el build no termina bien.
RESPALDO=""
if [ -d dist ]; then
  RESPALDO="$(mktemp -d)/dist"
  cp -a dist "$RESPALDO"
fi

if ! npm run build; then
  log "ERROR: el build fallo"
  if [ -n "$RESPALDO" ]; then
    rm -rf dist
    cp -a "$RESPALDO" dist
    log "Se restauro la version anterior; el sitio sigue en linea"
  fi
  exit 1
fi

[ -n "$RESPALDO" ] && rm -rf "$(dirname "$RESPALDO")"

# El restart no es opcional. dist esta bind-mounteado y el build lo borra y lo
# vuelve a crear, asi que el contenedor se queda apuntando al directorio viejo
# (el inode cambio) y seguiria sirviendo lo anterior o nada.
docker restart "$CONTENEDOR" >/dev/null
log "Actualizado a ${REMOTO:0:7}"
