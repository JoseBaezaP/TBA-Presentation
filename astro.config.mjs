import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://josebaezap.github.io',
  base: '/TBA-Presentation',
  integrations: [tailwind()],
});
