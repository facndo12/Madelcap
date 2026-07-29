# Guia de deploy para VPS

Esta landing es estatica. El servidor solo tiene que clonar el repositorio, ejecutar el build y servir la carpeta `dist` con Nginx.

## 1. Antes de subir al repositorio

1. Verificar que `.env` no se suba. Ya esta en `.gitignore`.
2. Dejar versionados `index.html`, `src/`, `public/` (incluida `public/fonts/` con la fuente y su licencia OFL), `scripts/`, `package.json`, `.env.example`, `README.md`, `DEPLOY.md` y `deploy/`.
3. No versionar `dist/`, `node_modules/`, `.impeccable/` ni capturas `qa-*.png`.
4. Ejecutar:

```bash
npm run build
```

El proyecto no tiene dependencias: el build es `node scripts/build.mjs` y usa
solo modulos de Node. No hace falta instalar nada antes.

5. Confirmar que `dist/index.html`, `dist/robots.txt` y `dist/sitemap.xml` se generan sin errores.

## 2. Subir cambios al repositorio

El repositorio ya existe en `github.com/facndo12/Madelcap` y el VPS despliega
desde `main`. Los cambios grandes van por branch y pull request, no por push
directo a `main`:

```bash
git checkout -b mi-rama
git add .
git commit -m "Descripcion del cambio"
git push -u origin mi-rama
gh pr create --base main
```

Una vez mergeado el PR, seguir con el paso 5 para actualizar el servidor.

## 3. Preparar el VPS

Ejemplo para Ubuntu/Debian:

```bash
sudo apt update
sudo apt install -y nginx git curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Crear carpeta de app:

```bash
sudo mkdir -p /var/www/madelcap
sudo chown -R "$USER":"$USER" /var/www/madelcap
cd /var/www/madelcap
git clone git@github.com:USUARIO/REPOSITORIO.git current
cd current
```

Crear `.env` en el VPS. Mientras no haya dominio, usar la IP publica:

```bash
cp .env.example .env
nano .env
```

Ejemplo temporal:

```env
SITE_URL=http://IP_DEL_VPS
PUBLIC_CLINIC_NAME=Clinica Madelcap
PUBLIC_WHATSAPP_NUMBER=595971754545
PUBLIC_CONTACT_EMAIL=recepcionmadelcap@gmail.com
PUBLIC_ADDRESS=Teniente Rivas 136, Centro, Nemby
PUBLIC_GOOGLE_MAPS_URL=https://www.google.com/maps/place/MADELCAP/
```

Build:

```bash
npm run build
```

## 4. Configurar Nginx

> **Si el VPS aloja otros sitios, revisar esto primero.** Ver quien ocupa los
> puertos y que hostnames ya estan tomados:
>
> ```bash
> sudo ss -tlnp | grep -E ':80\b|:443\b'
> sudo nginx -T | grep -E 'server_name|listen '
> ```
>
> No borrar `/etc/nginx/sites-enabled/default` sin confirmar que no sea el
> sitio por defecto de otro proyecto: en un servidor compartido, borrarlo puede
> dejar sin responder a todos los dominios que dependian de ese bloque.

Copiar la configuracion incluida y reemplazar `MADELCAP_HOST` por el hostname
real. El bloque no debe quedar como `server_name _` ni como `default_server`,
porque pasaria a recibir el trafico de todo Host no reconocido.

```bash
sudo cp deploy/nginx-madelcap.conf /etc/nginx/sites-available/madelcap
sudo sed -i 's/MADELCAP_HOST/el.hostname.real/' /etc/nginx/sites-available/madelcap
sudo ln -s /etc/nginx/sites-available/madelcap /etc/nginx/sites-enabled/madelcap
sudo nginx -t
sudo systemctl reload nginx
```

`nginx -t` tiene que pasar antes de recargar. Si falla, el `reload` no aplica
nada y los sitios existentes siguen andando.

## 5. Actualizar el sitio despues de cambios

```bash
cd /var/www/madelcap/current
git pull --ff-only
npm run build
sudo systemctl reload nginx
```

**Si cambio `deploy/nginx-madelcap.conf`, el `git pull` no lo aplica.** Ese
archivo es solo la plantilla versionada; el que usa Nginx vive en
`/etc/nginx/sites-available/madelcap`. Hay que copiarlo de nuevo:

```bash
sudo cp deploy/nginx-madelcap.conf /etc/nginx/sites-available/madelcap
sudo nginx -t
sudo systemctl reload nginx
```

Para saber si hace falta, comparar antes de recargar:

```bash
diff deploy/nginx-madelcap.conf /etc/nginx/sites-available/madelcap
```

## 6. Cuando tengan dominio

1. Apuntar el registro `A` del dominio a la IP del VPS.
2. Cambiar `SITE_URL` en `/var/www/madelcap/current/.env` a `https://dominio.com`.
3. Rehacer el build:

```bash
npm run build
```

4. Instalar Certbot:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d dominio.com -d www.dominio.com
```

5. Recargar Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Seguridad revisada

- No hay dependencias de terceros en runtime ni llamadas a APIs externas desde JavaScript.
- No hay formularios, cookies, almacenamiento local ni datos sensibles del usuario.
- Los enlaces externos con `target="_blank"` usan `rel="noopener"`.
- El build valida que `SITE_URL` sea una URL absoluta `http` o `https`.
- La configuracion propuesta agrega CSP, bloqueo de iframes, `nosniff`, politica de permisos y cache largo para imagenes.

## Puntos a cuidar

- No subir `.env` al repositorio.
- No poner credenciales, tokens ni claves SSH dentro del proyecto.
- Mantener el firewall del VPS abierto solo para SSH, HTTP y luego HTTPS.
- Optimizar imagenes grandes antes de produccion si el sitio se siente lento en 4G.
