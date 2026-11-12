// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// Production domain. Override with SITE_URL when deploying to a preview domain.
const site = process.env.SITE_URL ?? 'https://digitalservicesmaster.com';

const { PUBLIC_AUDIT_FORM_ENDPOINT } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
if (!PUBLIC_AUDIT_FORM_ENDPOINT && !process.env.PUBLIC_AUDIT_FORM_ENDPOINT) {
  console.warn(
    '\n[audit form] PUBLIC_AUDIT_FORM_ENDPOINT is not set: the Contact form will show an error instead of sending.\n' +
      'Deploy apps-script/audit-form (see its README) and set the web app URL before building.\n',
  );
}

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
