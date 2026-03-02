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
npx astro add vercel
```

## CI

El workflow de GitHub Actions ejecuta:

1. `npm install`
2. `npm run check`
3. `npm run build`

Así se valida que cada cambio compile correctamente antes de desplegar.

## Why Astro Vercel?

Vercel is a deployment platform that allows you to host your site by connecting directly to your GitHub repository. This adapter enhances the Astro build process to prepare your project for deployment through Vercel.

### Installation

Astro includes an `astro add` command to automate the setup of official integrations. If you prefer, you can install integrations manually instead.

Add the Vercel adapter to enable on-demand rendering in your Astro project with the following `astro add` command. This will install `@astrojs/vercel` and make the appropriate changes to your `astro.config.mjs` file in one step.

**npm**

```bash
npx astro add vercel
```
