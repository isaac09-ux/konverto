# KONVERTO

Landing page de KONVERTO construida con [Astro](https://astro.build).

## Estructura del repositorio

- `src/pages/index.astro`: página principal.
- `public/`: assets estáticos (favicon, manifest, imágenes, service worker, SEO files).
- `.github/workflows/astro.yml`: workflow de CI para validar y compilar el proyecto.
- `vercel.json`: configuración de despliegue en Vercel.

## Comandos

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## CI

El workflow de GitHub Actions ejecuta:

1. `npm install`
2. `npm run check`
3. `npm run build`

Así se valida que cada cambio compile correctamente antes de desplegar.
