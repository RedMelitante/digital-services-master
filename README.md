# Digital Services Master — website

Marketing site for Digital Services Master (web development, SEO and paid advertising for
aesthetic and dental clinics in the Philippines and Australia), built with [Astro](https://astro.build)
from the Claude Design handoff in [`design/`](design/README.md).

## Getting started

Requires Node.js 22.22 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the production build
npm run check     # type-check .astro and .ts files
```

The build is fully static (`dist/`), so it can be hosted on any static host or CDN.

### Environment variables

Copy `.env.example` to `.env` and set as needed:

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Public URL used for canonical links, Open Graph URLs, `robots.txt` and the sitemap. Defaults to `https://digitalservicesmaster.com`. |
| `PUBLIC_AUDIT_FORM_ENDPOINT` | The Google Apps Script web app URL (ending in `/exec`) that emails audit form requests to redmelitante@digitalservicesmaster.com. See [`apps-script/audit-form/`](apps-script/audit-form/README.md). Required in production: without it the form shows an error instead of sending, and the build prints a warning. |

## Project structure

```
public/
  images/              all design images (logos, client sites, clinic photos, blog images)
  images/og/           social share images and logo carried over from the old site
  favicon.png, apple-touch-icon.png
src/
  layouts/BaseLayout.astro   <head> (SEO and social tags, fonts), header, footer, runtime
  components/                SiteHeader, SiteFooter
  pages/                     one .astro file per page (URL = file path)
  data/                      FAQ, pricing plans, industry content and page metadata (seo.ts)
  lib/schema.ts              JSON-LD structured data
  scripts/
    logic.ts                 page state (menus, accordions, filters, tabs, form) from the design
    bindings.ts              small runtime that applies that state to the page
    audit-form.ts            Contact page form submission (posts to the Apps Script below)
  styles/
    global.css               design tokens and shared rules
    pages/*.css              page-specific rules from each design file
apps-script/audit-form/      Google Apps Script that emails audit form requests
design/                      original design handoff (reference only)
```

### How pages are built

Each page keeps the markup, inline styles and copy of its design file. Shared tokens
(`--ink`, `--blue`, `--accent` and the rest) are defined in `src/styles/global.css`.

Interactive parts are rendered on the server in their default state and updated in the
browser by `src/scripts/bindings.ts`:

- `data-b-if="name"`: element shown only while `name` is true
- `data-b-<attribute>="… {{name}} …"`: attribute re-rendered from state
- `data-b-click="handler"`: click handler

Each page chooses its state logic with the `logic` prop on `BaseLayout`.

The homepage serves the desktop design above 640px and the dedicated phone design
(`Home-Mobile`) at 640px and below.

### Page metadata

Titles, meta descriptions, social share images, publish/modified dates and blog authors
come from `src/data/seo.ts`, keyed by URL. They were copied from the old WordPress site
page at the same URL. `BaseLayout` uses an entry's
values instead of the `title`/`description` props, and builds the JSON-LD structured data
(`src/lib/schema.ts`) in the same shape the old site's SEO plugin produced. Pages with no
entry use the props passed to `BaseLayout`.

## Pages

Pages keep the URLs of the old WordPress site, so links and search rankings carry over
without redirects.

| URL | Design file |
| --- | --- |
| `/` | Main, Home-Mobile |
| `/about-us-page-new/` | About |
| `/web-development-seo-google-ads-services/` | Services |
| `/web-development-seo-google-ads-services/website-development/` | Service-WebDev |
| `/seo-services-in-the-philippines/` | Service-SEO |
| `/google-ads-services/` | Service-Ads |
| `/web-design-portfolio/` | Portfolio |
| `/aesthetics-clinic-website-design/`, `/dental-clinic-websites/`, `/business-website-design/`, `/e-commerce-websites/` | Portfolio-Aesthetic, -Dental, -Business, -Ecommerce |
| `/dental-clinic-website-design-above-dental-care/` and the other project URLs (11 projects) | Project, Project-* |
| `/case-studies/` | CaseStudies |
| `/cosmetic-clinic-website-design-cla/` | CaseStudy-CoastalLuxe |
| `/clinic-website/{cosmetic-clinic,dental-clinic-digital-services,eye-clinic,veterinary-clinic}/` | Industry-Landing template (one page per industry) |
| `/pricing-plans/`, `/faqs-website-development/`, `/contact-website-development-services/` | Pricing, FAQ, Contact |
| `/website-development-insights-blog/` and `/blogs/<post>/` (14 articles) | Blog, BlogPost, Post-* |
| `/privacy-policy/`, `/terms-of-service/` | Privacy, Terms |

New pages the old site didn't have: `/case-studies/`, `/dental-clinic-website-design-dr-kc/`,
`/privacy-policy/` and `/terms-of-service/`.

Also generated: `/404.html`, `/robots.txt` and `/sitemap-index.xml`.

## Before launch

Open items from the design handoff:

- Privacy Policy and Terms: add business name and registration, address, analytics tools
  and governing law; get a lawyer's review; remove the "Draft" label.
- Deploy `apps-script/audit-form/` and set `PUBLIC_AUDIT_FORM_ENDPOINT` to its web app URL,
  so the audit form sends.
- Add 301 redirects for the old URLs that no longer have their own page:
  `/about-us-web-developer/`, `/website-development/`,
  `/web-development-seo-google-ads-services/web-design-services/`,
  `/web-development-seo-google-ads-services/digital-marketing-services/`, `/clinic-website/`,
  `/category/blogs/`, `/gun-shop-website-surehit/`, plus the old sitemaps, `/feed/`, `/blogs/`,
  `/category/blogs/page/2/`, `/websit-development/`, `/blogs/7-essential-principal-ui-designs/`
  and `/author/…`.
- Add Analytics and verify the site in Google Search Console.
