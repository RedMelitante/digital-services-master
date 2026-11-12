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
| `PUBLIC_AUDIT_FORM_ENDPOINT` | URL that receives the audit form as a JSON `POST` (for example a Formspree, Make or Zapier webhook, or a CRM intake URL). If it is empty, the form only shows the thank-you message. |

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
    audit-form.ts            Contact page form submission
  styles/
    global.css               design tokens and shared rules
    pages/*.css              page-specific rules from each design file
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
come from `src/data/seo.ts`, keyed by URL. They were copied from the old WordPress site,
and each entry's `oldUrl` records the page it came from. `BaseLayout` uses an entry's
values instead of the `title`/`description` props, and builds the JSON-LD structured data
(`src/lib/schema.ts`) in the same shape the old site's SEO plugin produced. Pages with no
entry use the props passed to `BaseLayout`.

## Pages

| URL | Design file |
| --- | --- |
| `/` | Main, Home-Mobile |
| `/about/` | About |
| `/services/`, `/services/web-development/`, `/services/seo/`, `/services/paid-advertising/` | Services, Service-* |
| `/portfolio/` and `/portfolio/{aesthetic-clinic,dental-clinic,custom,ecommerce}-websites/` | Portfolio, Portfolio-* |
| `/portfolio/<project>/` (10 projects) | Project, Project-* |
| `/case-studies/`, `/case-studies/coastal-luxe-aesthetics/` | CaseStudies, CaseStudy-CoastalLuxe |
| `/industries/{cosmetic,dental,eye,veterinary}-clinics/` | Industry-Landing template (one page per industry) |
| `/pricing/`, `/faq/`, `/contact/` | Pricing, FAQ, Contact |
| `/blog/` and `/blog/<post>/` (14 articles) | Blog, BlogPost, Post-* |
| `/privacy-policy/`, `/terms-of-service/` | Privacy, Terms |

Also generated: `/404.html`, `/robots.txt` and `/sitemap-index.xml`.

## Before launch

Open items from the design handoff:

- Privacy Policy and Terms: add business name and registration, address, analytics tools
  and governing law; get a lawyer's review; remove the "Draft" label.
- Set `PUBLIC_AUDIT_FORM_ENDPOINT` to connect the audit form (email or Fluid CRM).
- Add 301 redirects from the old site's URLs (the redirect list in the migration audit,
  plus the old sitemap and feed URLs).
- Add Analytics and verify the site in Google Search Console.
