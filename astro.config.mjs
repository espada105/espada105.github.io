import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://espada105.github.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
