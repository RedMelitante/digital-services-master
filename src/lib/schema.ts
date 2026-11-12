/**
 * JSON-LD structured data, matching the graph the old site published
 * (Organization, WebSite, WebPage, ImageObject, BreadcrumbList, plus Article and
 * Person on blog posts, FAQPage on the FAQ, ContactPage on contact and
 * ProfessionalService on the homepage), with the new site's URLs.
 */
import { AUTHORS, type PageSeo } from '../data/seo';
import { FAQ_GROUPS } from '../data/faq';

interface SchemaInput {
  site: URL;
  path: string;
  title: string;
  description: string;
  seo: PageSeo;
  /** Absolute URL of the page's social image, if any. */
  image?: { url: string; width?: number; height?: number };
}

const ORG_NAME = 'Digital Services Master';

export function buildSchema({ site, path, title, description, seo, image }: SchemaInput): object[] {
  const abs = (p: string) => new URL(p, site).href;
  const home = abs('/');
  const url = abs(path);
  const orgId = `${home}#organization`;
  const websiteId = `${home}#website`;
  const imageId = `${url}#primaryimage`;
  const breadcrumbId = `${url}#breadcrumb`;

  const pageType: string | string[] =
    path === '/faqs-website-development/' ? ['WebPage', 'FAQPage'] : path === '/contact-website-development-services/' ? ['WebPage', 'ContactPage'] : 'WebPage';

  const webPage: Record<string, unknown> = {
    '@type': pageType,
    '@id': url,
    url,
    name: title,
    isPartOf: { '@id': websiteId },
    ...(path === '/' ? { about: { '@id': orgId } } : {}),
    ...(image
      ? { primaryImageOfPage: { '@id': imageId }, image: { '@id': imageId }, thumbnailUrl: image.url }
      : {}),
    ...(seo.datePublished ? { datePublished: seo.datePublished } : {}),
    ...(seo.dateModified ? { dateModified: seo.dateModified } : {}),
    description,
    breadcrumb: { '@id': breadcrumbId },
    inLanguage: 'en',
    potentialAction: [{ '@type': 'ReadAction', target: [url] }],
  };

  if (path === '/faqs-website-development/') {
    webPage.mainEntity = FAQ_GROUPS.flatMap((g) =>
      g.items.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    );
  }

  const crumbs = seo.breadcrumb ?? [['Home', '/'], [title]];
  const graph: Record<string, unknown>[] = [];

  if (seo.article) {
    const author = AUTHORS[seo.article.author];
    graph.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      isPartOf: { '@id': url },
      author: {
        name: seo.article.author,
        ...(author ? { '@id': `${home}#/schema/person/${author.id}` } : {}),
      },
      headline: seo.article.headline,
      datePublished: seo.article.datePublished,
      dateModified: seo.article.dateModified,
      mainEntityOfPage: { '@id': url },
      ...(seo.article.wordCount ? { wordCount: seo.article.wordCount } : {}),
      publisher: { '@id': orgId },
      ...(image ? { image: { '@id': imageId }, thumbnailUrl: image.url } : {}),
      articleSection: [seo.article.section],
      inLanguage: 'en',
    });
  }

  graph.push(webPage);

  if (image) {
    graph.push({
      '@type': 'ImageObject',
      inLanguage: 'en',
      '@id': imageId,
      url: image.url,
      contentUrl: image.url,
      ...(image.width ? { width: image.width } : {}),
      ...(image.height ? { height: image.height } : {}),
    });
  }

  graph.push({
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c[0],
      ...(c[1] && i < crumbs.length - 1 ? { item: abs(c[1]) } : {}),
    })),
  });

  graph.push(
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: home,
      name: ORG_NAME,
      description: 'Websites that Ranks on Google',
      publisher: { '@id': orgId },
      inLanguage: 'en',
    },
    {
      '@type': 'Organization',
      '@id': orgId,
      name: ORG_NAME,
      url: home,
      logo: {
        '@type': 'ImageObject',
        inLanguage: 'en',
        '@id': `${home}#/schema/logo/image/`,
        url: abs('/images/og/2024-09-Dsm-new-logo.png'),
        contentUrl: abs('/images/og/2024-09-Dsm-new-logo.png'),
        width: 700,
        height: 289,
        caption: ORG_NAME,
      },
      image: { '@id': `${home}#/schema/logo/image/` },
    },
  );

  if (seo.article) {
    const author = AUTHORS[seo.article.author];
    if (author) {
      graph.push({
        '@type': 'Person',
        '@id': `${home}#/schema/person/${author.id}`,
        name: seo.article.author,
        image: {
          '@type': 'ImageObject',
          inLanguage: 'en',
          '@id': author.image,
          url: author.image,
          contentUrl: author.image,
          caption: seo.article.author,
        },
      });
    }
  }

  const blocks: object[] = [{ '@context': 'https://schema.org', '@graph': graph }];

  if (path === '/') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: ORG_NAME,
      serviceType: 'Website Development, Website Design, Digital Marketing, SEO services',
      image: abs('/images/og/2024-09-Dsm-new-logo.png'),
      url: home,
      telephone: '+63 917 67777 17',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Blk 3 Lot 5 Virginia',
        addressLocality: 'Cagayan de Oro',
        postalCode: '9000',
        addressCountry: 'PH',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 8.4802729, longitude: 124.6497636 },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      sameAs: [
        'https://www.facebook.com/DigitalServicesMaster/',
        'https://www.instagram.com/digitalservicesmaster/',
        'https://www.linkedin.com/company/digital-services-master/',
      ],
    });
  }

  return blocks;
}
