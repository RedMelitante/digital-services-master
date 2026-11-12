// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain. Override with SITE_URL when deploying to a preview domain.
const site = process.env.SITE_URL ?? 'https://digitalservicesmaster.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
