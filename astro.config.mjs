import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We have custom base styles in index.css
    }),
  ],
  output: 'static',
  site: 'https://clydedeckingsolutionsltd.com',
  build: {
    format: 'file',
  },
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    resolve: {
      alias: {
        '@': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src'),
      },
    },
  },
});


