# Clinica Madelcap Landing

Landing page estatica para Clinica Madelcap, preparada para deploy en Vercel, Netlify o cualquier hosting que publique la carpeta `dist`.

## Desarrollo

```bash
pnpm build
pnpm preview
```

El preview local queda en:

```text
http://localhost:4173/
```

## Deploy

Build command:

```bash
pnpm build
```

Output directory:

```text
dist
```

## Variables

Las variables publicas estan documentadas en `.env.example`. El build usa `SITE_URL` para canonical, Open Graph, robots y sitemap.

No guardar secretos en `.env`; ese archivo esta ignorado por git.

## VPS

La guia completa para publicar clonando el repositorio por SSH esta en `DEPLOY.md`.
