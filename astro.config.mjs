import { defineConfig } from 'astro/config';
import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [tailwind()],
});
