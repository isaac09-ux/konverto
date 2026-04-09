import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://konverto-alpha.vercel.app',
  integrations: [
    sitemap({
      // excluye páginas que no quieres indexar
      filter: (page) => !page.includes('/admin') && !page.includes('/gracias'),
      // añade la última modificación automáticamente
      lastmod: new Date(),
    }),
  ],
  // mejora el build para SEO
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
