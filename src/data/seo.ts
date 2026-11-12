/**
 * Page metadata (title, description, social image, dates, authors, breadcrumbs),
 * keyed by URL path. Titles, descriptions, social images and dates were copied
 * from the old WordPress site (digitalservicesmaster.com, crawled 12 Nov 2026);
 * `oldUrl` records the page each entry came from. Breadcrumbs follow the
 * visible breadcrumb on each new page.
 *
 * BaseLayout reads this file; an entry here overrides the title and
 * description passed to the layout.
 */
export interface SeoImage {
  src: string;
  width: number;
  height: number;
  type: string;
}

export interface SeoArticle {
  headline: string;
  author: string;
  datePublished: string;
  dateModified: string;
  wordCount?: number;
  section: string;
}

export interface PageSeo {
  oldUrl?: string;
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: 'website' | 'article';
  image?: SeoImage;
  datePublished?: string;
  dateModified?: string;
  twitterLabels?: [label: string, data: string][];
  article?: SeoArticle;
  /** [name, path] pairs; the last item (the current page) has no path. */
  breadcrumb?: ([name: string, path: string] | [name: string])[];
}

/** Blog authors (ids and avatars as on the old site's schema). */
export const AUTHORS: Record<string, { id: string; image: string }> = {
  "Analou Oculam": {
    "id": "672bb736ea9a25569e17f8aca92f086f",
    "image": "https://secure.gravatar.com/avatar/5ced6a43899b6634ade7f289db5dbd50b20254c227ee7cd0e6b9311eb3c34f07?s=96&d=mm&r=g"
  },
  "Queen Mercado": {
    "id": "24a70cf8e8a5b193ab3cc26d03b81c5c",
    "image": "https://secure.gravatar.com/avatar/6562f5b0cd83948af421e145ad9c6027f120f04f00b18c4a8af9eb60fe62252a?s=96&d=mm&r=g"
  }
};

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    "oldUrl": "/",
    "title": "Trusted Digital Marketing for Aesthetic & Dental Clinic | AU & PH",
    "description": "We provide digital marketing for aesthetic clinics in Australia and dental clinics in the Philippines—web design, SEO, and ads by a PH-based team.",
    "ogType": "website",
    "image": {
      "src": "/images/og/2024-09-cropped-DSM-Logo-New-1.png",
      "width": 512,
      "height": 512,
      "type": "image/png"
    },
    "datePublished": "2024-06-26T23:38:46+00:00",
    "dateModified": "2026-09-10T10:18:23+00:00",
    "breadcrumb": [
      [
        "Home",
        "/"
      ]
    ]
  },
  "/about/": {
    "oldUrl": "/about-us-page-new/",
    "title": "Healthcare Digital Marketing Agency for Clinics That Care, AU & PH",
    "description": "Digital Services Master is a healthcare digital marketing agency helping dental, aesthetic and wellness clinics grow with SEO, web design and Google Ads.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-09-digital-marketing-concept-digital-marketing-2-min.png",
      "width": 1000,
      "height": 840,
      "type": "image/png"
    },
    "datePublished": "2025-07-16T06:43:48+00:00",
    "dateModified": "2026-09-03T05:59:11+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "14 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "About Us"
      ]
    ]
  },
  "/blog/": {
    "oldUrl": "/website-development-insights-blog/",
    "title": "Website Development Insights | Tips & Strategies",
    "description": "Get insights on website development, design trends, and digital strategies to boost your online presence. Stay ahead with our latest tips.",
    "ogType": "article",
    "datePublished": "2024-11-08T07:24:16+00:00",
    "dateModified": "2025-07-15T11:38:50+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "4 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog"
      ]
    ]
  },
  "/blog/7-essential-principles-of-effective-ui-designs/": {
    "oldUrl": "/blogs/7-essential-principles-of-effective-ui-designs/",
    "title": "UI Design Principles: 7 Rules for Better Interfaces",
    "description": "Discover how to enhance your UI designs with these essential principles, ensuring your interfaces are both functional and visually appealing.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-12-15.webp",
      "width": 1200,
      "height": 900,
      "type": "image/webp"
    },
    "datePublished": "2024-12-16T12:05:10+00:00",
    "dateModified": "2026-09-10T07:36:14+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Analou Oculam"
      ],
      [
        "Est. reading time",
        "9 minutes"
      ]
    ],
    "article": {
      "headline": "7 Essential Principles of Effective UI Designs",
      "author": "Analou Oculam",
      "datePublished": "2024-12-16T12:05:10+00:00",
      "dateModified": "2026-09-10T07:36:14+00:00",
      "wordCount": 1624,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "7 Essential Principles of Effective UI Designs"
      ]
    ]
  },
  "/blog/aesthetic-clinic-website-design/": {
    "oldUrl": "/blogs/aesthetic-clinic-website-design-what-actually-converts-visitors-into-consultations/",
    "title": "Aesthetic Clinic Website Design That Converts",
    "description": "What aesthetic clinic website design gets right: booking flows that convert, mobile speed benchmarks, compliant before-and-after galleries, and homepages.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2026-07-doctor-cosmetologist-doing-hydrafacial-procedure-i-2026-03-16-03-21-55-utc-scaled.webp",
      "width": 2560,
      "height": 1707,
      "type": "image/webp"
    },
    "datePublished": "2026-07-16T06:46:10+00:00",
    "dateModified": "2026-09-09T09:39:31+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Queen Mercado"
      ],
      [
        "Est. reading time",
        "14 minutes"
      ]
    ],
    "article": {
      "headline": "Aesthetic Clinic Website Design: What Actually Converts Visitors Into Consultations",
      "author": "Queen Mercado",
      "datePublished": "2026-07-16T06:46:10+00:00",
      "dateModified": "2026-09-09T09:39:31+00:00",
      "wordCount": 2244,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "Aesthetic Clinic Website Design: What Actually Converts Visitors Into Consultations"
      ]
    ]
  },
  "/blog/content-ideas-for-dental-marketing/": {
    "oldUrl": "/blogs/digital-marketing-for-dental-clinics/",
    "title": "Digital Marketing for Dental Clinics: Top Content Ideas",
    "description": "Discover top content ideas for Digital Marketing for Dental Clinics, from patient stories to oral health tips, to boost engagement and trust.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-WhatsApp-Image-2025-03-18-at-4.29.57-PM-1.jpeg",
      "width": 1200,
      "height": 900,
      "type": "image/jpeg"
    },
    "datePublished": "2025-03-18T08:27:59+00:00",
    "dateModified": "2026-09-08T06:47:17+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Analou Oculam"
      ],
      [
        "Est. reading time",
        "9 minutes"
      ]
    ],
    "article": {
      "headline": "Content Ideas for Dental Marketing",
      "author": "Analou Oculam",
      "datePublished": "2025-03-18T08:27:59+00:00",
      "dateModified": "2026-09-08T06:47:17+00:00",
      "wordCount": 1300,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "Content Ideas for Dental Marketing"
      ]
    ]
  },
  "/blog/digital-marketing-for-aesthetic-clinics/": {
    "oldUrl": "/blogs/digital-marketing-for-aesthetic-clinics-the-complete-guide-to-bookings-local-seo-compliant-ads/",
    "title": "Digital Marketing for Aesthetic Clinics: Full Guide",
    "description": "A complete guide to digital marketing for aesthetic clinics – channel mix, a 4-phase growth framework, ad compliance risks, and the ROI metrics to track.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2026-07-african-man-working-on-laptop-in-cafe-digital-mar-2026-01-08-23-14-50-utc-1-scaled.webp",
      "width": 2560,
      "height": 1390,
      "type": "image/webp"
    },
    "datePublished": "2026-07-16T05:17:19+00:00",
    "dateModified": "2026-09-10T08:52:19+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Queen Mercado"
      ],
      [
        "Est. reading time",
        "13 minutes"
      ]
    ],
    "article": {
      "headline": "Digital Marketing for Aesthetic Clinics: The Complete Guide to Bookings, Local SEO & Compliant Ads",
      "author": "Queen Mercado",
      "datePublished": "2026-07-16T05:17:19+00:00",
      "dateModified": "2026-09-10T08:52:19+00:00",
      "wordCount": 2064,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "Digital Marketing for Aesthetic Clinics: The Complete Guide to Bookings, Local SEO & Compliant Ads"
      ]
    ]
  },
  "/blog/from-offline-to-online/": {
    "oldUrl": "/blogs/from-offline-to-online-your-guide-to-building-a-winning-website-in-the-philippines/",
    "title": "Building a Winning Website in the Philippines: Full Guide",
    "description": "Boost your Philippine business online! Learn how to build a winning website with expert Website Development Philippines services.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-11-website.jpg",
      "width": 540,
      "height": 358,
      "type": "image/jpeg"
    },
    "datePublished": "2024-11-11T05:29:12+00:00",
    "dateModified": "2026-09-08T05:48:32+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Analou Oculam"
      ],
      [
        "Est. reading time",
        "14 minutes"
      ]
    ],
    "article": {
      "headline": "From Offline to Online: Your Guide to Building a Winning Website Development in the Philippines",
      "author": "Analou Oculam",
      "datePublished": "2024-11-11T05:29:12+00:00",
      "dateModified": "2026-09-08T05:48:32+00:00",
      "wordCount": 2346,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "From Offline to Online: Your Guide to Building a Winning Website Development in the Philippines"
      ]
    ]
  },
  "/blog/google-ads-for-aesthetic-clinics/": {
    "oldUrl": "/blogs/google-ads-for-aesthetic-clinics-complete-campaign-setup-guide/",
    "title": "Google Ads for Aesthetic Clinics: Setup Guide",
    "description": "Google Ads for aesthetic clinics: campaign structure by treatment, the negative keyword lists you need, conversion tracking, and budget benchmarks.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2026-07-smiling-coworkers-enjoying-success-at-modern-workp-2026-01-08-08-14-49-utc-scaled.webp",
      "width": 2560,
      "height": 1834,
      "type": "image/webp"
    },
    "datePublished": "2026-07-16T09:21:43+00:00",
    "dateModified": "2026-09-08T06:05:39+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Queen Mercado"
      ],
      [
        "Est. reading time",
        "12 minutes"
      ]
    ],
    "article": {
      "headline": "Google Ads for Aesthetic Clinics: Complete Campaign Setup Guide",
      "author": "Queen Mercado",
      "datePublished": "2026-07-16T09:21:43+00:00",
      "dateModified": "2026-09-08T06:05:39+00:00",
      "wordCount": 2003,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "Google Ads for Aesthetic Clinics: Complete Campaign Setup Guide"
      ]
    ]
  },
  "/blog/how-to-choose-the-right-seo-expert-in-the-philippines/": {
    "oldUrl": "/blogs/how-to-choose-the-right-seo-expert-in-the-philippines/",
    "title": "How to Choose the Right SEO Expert in the Philippines",
    "description": "Find the best SEO expert in the Philippines. Discover key factors to boost your website’s rankings and online presence",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Trending-Topics-in-Dental-Marketing-19.png",
      "width": 1200,
      "height": 900,
      "type": "image/png"
    },
    "datePublished": "2025-03-19T08:55:38+00:00",
    "dateModified": "2026-09-08T07:12:28+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Queen Mercado"
      ],
      [
        "Est. reading time",
        "10 minutes"
      ]
    ],
    "article": {
      "headline": "How to Choose the Right SEO Expert in the Philippines",
      "author": "Queen Mercado",
      "datePublished": "2025-03-19T08:55:38+00:00",
      "dateModified": "2026-09-08T07:12:28+00:00",
      "wordCount": 1099,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "How to Choose the Right SEO Expert in the Philippines"
      ]
    ]
  },
  "/blog/local-seo-google-maps-playbook-for-aesthetic-clinics/": {
    "oldUrl": "/blogs/local-seo-google-maps-playbook-for-aesthetic-clinics/",
    "title": "Local SEO & Google Maps Playbook for Clinics",
    "description": "Local SEO for aesthetic clinics: the three ranking factors Google uses, a Business Profile checklist, NAP consistency, and a review acquisition system.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2026-07-man-typing-on-a-laptop-performing-seo-2026-03-12-23-57-54-utc-scaled.webp",
      "width": 2560,
      "height": 1709,
      "type": "image/webp"
    },
    "datePublished": "2026-07-16T08:06:04+00:00",
    "dateModified": "2026-09-08T07:09:49+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Queen Mercado"
      ],
      [
        "Est. reading time",
        "11 minutes"
      ]
    ],
    "article": {
      "headline": "Local SEO & Google Maps Playbook for Aesthetic Clinics",
      "author": "Queen Mercado",
      "datePublished": "2026-07-16T08:06:04+00:00",
      "dateModified": "2026-09-08T07:09:49+00:00",
      "wordCount": 1747,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "Local SEO & Google Maps Playbook for Aesthetic Clinics"
      ]
    ]
  },
  "/blog/responsive-web-design-and-development/": {
    "oldUrl": "/blogs/responsive-web-design-and-development/",
    "title": "Web Design and Development: Mobile-First",
    "description": "Is your website losing mobile customers? Our web design and development services create responsive, user-friendly sites.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-12-38.webp",
      "width": 600,
      "height": 450,
      "type": "image/webp"
    },
    "datePublished": "2024-12-27T10:56:00+00:00",
    "dateModified": "2026-09-08T07:27:48+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Analou Oculam"
      ],
      [
        "Est. reading time",
        "8 minutes"
      ]
    ],
    "article": {
      "headline": "Responsive Web Design and Development: Reaching All Devices",
      "author": "Analou Oculam",
      "datePublished": "2024-12-27T10:56:00+00:00",
      "dateModified": "2026-09-08T07:27:48+00:00",
      "wordCount": 1191,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "Responsive Web Design and Development: Reaching All Devices"
      ]
    ]
  },
  "/blog/seo-best-practices-for-2024/": {
    "oldUrl": "/blogs/seo-best-practices-for-2024-focus-on-the-latest-strategies-and-techniques/",
    "title": "SEO Best Practices 2024: A Guide to Staying Ahead of the Curve",
    "description": "Master the latest SEO best practices for 2024 and boost your website's visibility and traffic. Learn about user intent, content quality, etc.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-11-11.webp",
      "width": 1200,
      "height": 800,
      "type": "image/webp"
    },
    "datePublished": "2024-11-11T07:40:02+00:00",
    "dateModified": "2026-09-08T06:22:33+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Analou Oculam"
      ],
      [
        "Est. reading time",
        "14 minutes"
      ]
    ],
    "article": {
      "headline": "SEO Best Practices for 2024: Focus on the Latest Strategies and Techniques",
      "author": "Analou Oculam",
      "datePublished": "2024-11-11T07:40:02+00:00",
      "dateModified": "2026-09-08T06:22:33+00:00",
      "wordCount": 2334,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "SEO Best Practices for 2024: Focus on the Latest Strategies and Techniques"
      ]
    ]
  },
  "/blog/the-future-of-digital-services/": {
    "oldUrl": "/blogs/the-future-of-digital-services-embracing-digital-transformation/",
    "title": "Digital Transformation: The Future of Digital Services",
    "description": "Discover how digital transformation is reshaping the future of digital services. Learn about AI, automation, data, and more!",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-11-15.webp",
      "width": 1200,
      "height": 800,
      "type": "image/webp"
    },
    "datePublished": "2024-11-11T07:20:20+00:00",
    "dateModified": "2026-09-09T10:57:34+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Analou Oculam"
      ],
      [
        "Est. reading time",
        "14 minutes"
      ]
    ],
    "article": {
      "headline": "The Future of Digital Services: Embracing Digital Transformation",
      "author": "Analou Oculam",
      "datePublished": "2024-11-11T07:20:20+00:00",
      "dateModified": "2026-09-09T10:57:34+00:00",
      "wordCount": 2385,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "The Future of Digital Services: Embracing Digital Transformation"
      ]
    ]
  },
  "/blog/trending-dental-marketing-topics/": {
    "oldUrl": "/blogs/trending-dental-marketing-topics/",
    "title": "Trending in Dental Marketing: AI, Local SEO & Innovation",
    "description": "Discover top dental marketing trends, from AI and local SEO to high-tech innovations, transforming patient engagement and clinic growth.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Trending-Topics-in-Dental-Marketing.png",
      "width": 1200,
      "height": 900,
      "type": "image/png"
    },
    "datePublished": "2025-03-18T07:54:44+00:00",
    "dateModified": "2026-09-08T06:41:35+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Queen Mercado"
      ],
      [
        "Est. reading time",
        "9 minutes"
      ]
    ],
    "article": {
      "headline": "Trending Dental Marketing Topics",
      "author": "Queen Mercado",
      "datePublished": "2025-03-18T07:54:44+00:00",
      "dateModified": "2026-09-08T06:41:35+00:00",
      "wordCount": 1163,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "Trending Dental Marketing Topics"
      ]
    ]
  },
  "/blog/web-design-agency/": {
    "oldUrl": "/blogs/web-design-agency/",
    "title": "How a Web Design Agency Can Revitalize Your Online Presence",
    "description": "Learn how partnering with a professional web design agency can improve your website’s functionality, and user experience to stand out online.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-12-22.webp",
      "width": 1200,
      "height": 900,
      "type": "image/webp"
    },
    "datePublished": "2024-12-17T02:32:43+00:00",
    "dateModified": "2026-09-09T10:40:00+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Analou Oculam"
      ],
      [
        "Est. reading time",
        "8 minutes"
      ]
    ],
    "article": {
      "headline": "Transform Your Website: How a Web Design Agency Can Revitalize Your Online Presence",
      "author": "Analou Oculam",
      "datePublished": "2024-12-17T02:32:43+00:00",
      "dateModified": "2026-09-09T10:40:00+00:00",
      "wordCount": 1136,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "Transform Your Website: How a Web Design Agency Can Revitalize Your Online Presence"
      ]
    ]
  },
  "/blog/why-website-developers-prioritize-responsive-design/": {
    "oldUrl": "/blogs/why-website-developers-prioritize-responsive-design/",
    "title": "Why Website Developers Prioritize Responsive Design",
    "description": "Discover why website developers prioritize responsive design for better UX, SEO, and seamless performance on all devices.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Trending-Topics-in-Dental-Marketing-14.png",
      "width": 1200,
      "height": 900,
      "type": "image/png"
    },
    "datePublished": "2025-03-19T08:01:11+00:00",
    "dateModified": "2026-09-09T10:48:29+00:00",
    "twitterLabels": [
      [
        "Written by",
        "Queen Mercado"
      ],
      [
        "Est. reading time",
        "13 minutes"
      ]
    ],
    "article": {
      "headline": "Why Website Developers Prioritize Responsive Design",
      "author": "Queen Mercado",
      "datePublished": "2025-03-19T08:01:11+00:00",
      "dateModified": "2026-09-09T10:48:29+00:00",
      "wordCount": 1140,
      "section": "Blogs"
    },
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Blog",
        "/blog/"
      ],
      [
        "Why Website Developers Prioritize Responsive Design"
      ]
    ]
  },
  "/case-studies/": {
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Case Studies"
      ]
    ]
  },
  "/case-studies/coastal-luxe-aesthetics/": {
    "oldUrl": "/cosmetic-clinic-website-design-cla/",
    "title": "Cosmetic Clinic Website Design | CLA Luxury Beauty",
    "description": "See how our cosmetic clinic website design and SEO helped Coastal Luxe Aesthetics attract more clients and boost brand reputation.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Group-536-1-1.png",
      "width": 230,
      "height": 92,
      "type": "image/png"
    },
    "datePublished": "2025-03-18T05:11:45+00:00",
    "dateModified": "2026-09-10T08:05:43+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "12 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Coastal Luxe Aesthetics"
      ]
    ]
  },
  "/contact/": {
    "oldUrl": "/contact-website-development-services/",
    "title": "Contact Us | Website Development Services for Your Business",
    "description": "Contact us for website development services and let’s build a high-performing site that boosts your online presence and results.",
    "ogType": "article",
    "datePublished": "2024-07-03T01:28:07+00:00",
    "dateModified": "2026-10-21T07:37:55+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "1 minute"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Contact"
      ]
    ]
  },
  "/faq/": {
    "oldUrl": "/faqs-website-development/",
    "title": "Website Development FAQs | Answers to Your Questions",
    "description": "Find answers to common questions about website development. Learn about design, functionality, SEO, and more to build a successful website.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Mask-group-2.png",
      "width": 700,
      "height": 700,
      "type": "image/png"
    },
    "datePublished": "2024-07-03T00:11:39+00:00",
    "dateModified": "2026-09-03T07:00:58+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "4 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "FAQ"
      ]
    ]
  },
  "/industries/cosmetic-clinics/": {
    "oldUrl": "/clinic-website/cosmetic-clinic/",
    "title": "Cosmetic Clinic Website Design & Marketing",
    "description": "Cosmetic clinic website design and marketing that builds brand authority, lifts your local rankings, and turns enquiries into booked consultations.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-07-Mask-group-5.png",
      "width": 553,
      "height": 557,
      "type": "image/png"
    },
    "datePublished": "2024-06-28T07:42:40+00:00",
    "dateModified": "2026-09-03T08:38:24+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "6 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Cosmetic Clinics"
      ]
    ]
  },
  "/industries/dental-clinics/": {
    "oldUrl": "/clinic-website/dental-clinic-digital-services/",
    "title": "Dental Clinic Website Design & Digital Services",
    "description": "Dental clinic website design and digital marketing – attract new patients, showcase treatments, and fill your calendar with online booking that works.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-07-Mask-group-6.png",
      "width": 553,
      "height": 557,
      "type": "image/png"
    },
    "datePublished": "2024-06-28T03:38:47+00:00",
    "dateModified": "2026-09-03T08:41:09+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "6 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Dental Clinics"
      ]
    ]
  },
  "/industries/eye-clinics/": {
    "oldUrl": "/clinic-website/eye-clinic/",
    "title": "Eye Clinic Website Design & Digital Marketing",
    "description": "Eye clinic website design and digital marketing: clear treatment pages, strong local search visibility, and a booking flow patients actually finish.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-07-Mask-group-7.png",
      "width": 553,
      "height": 557,
      "type": "image/png"
    },
    "datePublished": "2024-06-28T08:04:35+00:00",
    "dateModified": "2026-09-03T08:43:44+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "5 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Eye Clinics"
      ]
    ]
  },
  "/industries/veterinary-clinics/": {
    "oldUrl": "/clinic-website/veterinary-clinic/",
    "title": "Veterinary Clinic Website Design & Marketing",
    "description": "Veterinary clinic website design and marketing to reach local pet owners, showcase your services, and make booking an appointment simple on any device.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-07-Mask-group-8.png",
      "width": 553,
      "height": 557,
      "type": "image/png"
    },
    "datePublished": "2024-06-28T07:54:58+00:00",
    "dateModified": "2026-09-03T08:46:05+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "5 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Veterinary Clinics"
      ]
    ]
  },
  "/portfolio/": {
    "oldUrl": "/web-design-portfolio/",
    "title": "Web Design Philippines | Our Portfolio of Stunning Websites",
    "description": "Explore our portfolio of web design projects in the Philippines. See how we craft stunning, user-friendly, and SEO-optimised websites.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-07-1-1.webp",
      "width": 864,
      "height": 864,
      "type": "image/webp"
    },
    "datePublished": "2025-03-14T10:39:21+00:00",
    "dateModified": "2026-09-03T06:25:14+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "16 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio"
      ]
    ]
  },
  "/portfolio/above-dental-care/": {
    "oldUrl": "/dental-clinic-website-design-above-dental-care/",
    "title": "Dental Clinic Website Design & SEO Services | Above Dental Care",
    "description": "See how our dental clinic website design and SEO boosted Above Dental Care’s new patient inquiries by 80%.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Above-Dental-Care-Logo-1.png",
      "width": 242,
      "height": 154,
      "type": "image/png"
    },
    "datePublished": "2025-03-17T10:01:03+00:00",
    "dateModified": "2025-07-16T09:45:18+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "9 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Above Dental Care"
      ]
    ]
  },
  "/portfolio/aesthetic-clinic-websites/": {
    "oldUrl": "/aesthetics-clinic-website-design/",
    "title": "Aesthetic Clinic Website Design That Drives Bookings",
    "description": "Get a stunning Aesthetic Clinic website design. We create SEO-optimized, user-friendly sites that drive bookings and boost online presence.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-aesthetics.png",
      "width": 503,
      "height": 381,
      "type": "image/png"
    },
    "datePublished": "2025-03-17T09:55:11+00:00",
    "dateModified": "2026-09-10T10:44:08+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "12 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Aesthetic Clinics"
      ]
    ]
  },
  "/portfolio/aplus-health-services/": {
    "oldUrl": "/ndis-provider-website-design-aplus-health-services/",
    "title": "NDIS Provider Website Design & SEO | Aplus Health Services",
    "description": "See how our NDIS provider website design and SEO increased Aplus Health Services’ client inquiries by 70% and improved accessibility.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-A-plus-health-services-Bigger-Font-1.png",
      "width": 299,
      "height": 133,
      "type": "image/png"
    },
    "datePublished": "2025-03-18T03:24:49+00:00",
    "dateModified": "2025-07-21T09:20:42+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "15 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Business & Service Websites",
        "/portfolio/custom-websites/"
      ],
      [
        "Aplus Health Services"
      ]
    ]
  },
  "/portfolio/camco-prefabricated-structures/": {
    "oldUrl": "/prefab-website-design-camco/",
    "title": "Prefab Website Design for More Project Inquiries | Camco",
    "description": "See how our prefab website design and SEO boosted Camco Prefabricated Structures' project inquiries by 55% and enhanced industry credibility.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Group-369-1.png",
      "width": 275,
      "height": 84,
      "type": "image/png"
    },
    "datePublished": "2025-03-18T03:44:13+00:00",
    "dateModified": "2025-07-16T10:01:45+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "26 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Business & Service Websites",
        "/portfolio/custom-websites/"
      ],
      [
        "CAMCO Prefabricated Structures"
      ]
    ]
  },
  "/portfolio/constantin-floors/": {
    "oldUrl": "/flooring-website-design-constantin-floors/",
    "title": "Flooring Website Design Case Study | Constantin Floors",
    "description": "See how our flooring website design and SEO boosted Constantin Floors' client inquiries by 60% and online presence.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Group-51-1.png",
      "width": 271,
      "height": 75,
      "type": "image/png"
    },
    "datePublished": "2025-03-18T05:03:13+00:00",
    "dateModified": "2026-09-10T07:41:17+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "13 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Business & Service Websites",
        "/portfolio/custom-websites/"
      ],
      [
        "Constantin Floors"
      ]
    ]
  },
  "/portfolio/custom-websites/": {
    "oldUrl": "/business-website-design/",
    "title": "Business Website Design | Helping Businesses Succeed Online",
    "description": "Enhance your business’s online presence with a professional business website design that drives conversions and builds credibility.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-business.png",
      "width": 503,
      "height": 381,
      "type": "image/png"
    },
    "datePublished": "2025-03-17T10:24:07+00:00",
    "dateModified": "2026-09-09T10:26:53+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "18 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Business & Service Websites"
      ]
    ]
  },
  "/portfolio/dental-clinic-websites/": {
    "oldUrl": "/dental-clinic-websites/",
    "title": "Dental Clinic Websites | Professional Design to Attract Patients",
    "description": "Enhance your dental clinic’s online presence with a professional dental clinic websites that drives patient inquiries and simplifies appointment bookings.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-clinic.png",
      "width": 503,
      "height": 381,
      "type": "image/png"
    },
    "datePublished": "2025-03-17T09:09:27+00:00",
    "dateModified": "2026-09-16T02:51:09+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "11 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Dental Clinics"
      ]
    ]
  },
  "/portfolio/dr-kc-dental-aesthetic-center/": {
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Dental Clinics",
        "/portfolio/dental-clinic-websites/"
      ],
      [
        "Dr. KC Dental Aesthetic Center"
      ]
    ]
  },
  "/portfolio/ecommerce-websites/": {
    "oldUrl": "/e-commerce-websites/",
    "title": "E-commerce Websites Design | High-Converting Online Stores",
    "description": "Boost sales with ahigh-performance e-commerce websites design that enhances user experience, credibility and boost revenue and engagement.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-ecommerce.png",
      "width": 503,
      "height": 381,
      "type": "image/png"
    },
    "datePublished": "2025-03-17T07:45:00+00:00",
    "dateModified": "2025-04-04T08:55:04+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "2 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "E-commerce Websites"
      ]
    ]
  },
  "/portfolio/good-force/": {
    "oldUrl": "/e-commerce-website-design-good-force/",
    "title": "E-commerce Website Design | Good Force Trading",
    "description": "Discover how our e-commerce website design and SEO strategies helped Good Force increase inquiries by 60% and orders by 79%.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Goodforce-Trading-Logo-1-1.png",
      "width": 397,
      "height": 91,
      "type": "image/png"
    },
    "datePublished": "2025-03-18T05:33:25+00:00",
    "dateModified": "2026-09-10T08:19:25+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "4 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Business & Service Websites",
        "/portfolio/custom-websites/"
      ],
      [
        "Good Force"
      ]
    ]
  },
  "/portfolio/kulaman-ranch/": {
    "oldUrl": "/dairy-e-commerce-website-design-kulaman/",
    "title": "Dairy E-commerce Website Design for Organic Dairy and Tours",
    "description": "See how our dairy e-commerce website design and SEO boosted Kulaman Ranch's dairy sales by 40% and farm tour bookings by 50%.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-image-41.png",
      "width": 847,
      "height": 379,
      "type": "image/png"
    },
    "datePublished": "2025-03-18T05:26:25+00:00",
    "dateModified": "2025-07-21T09:20:11+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "15 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "E-commerce Websites",
        "/portfolio/ecommerce-websites/"
      ],
      [
        "Kulaman Ranch"
      ]
    ]
  },
  "/portfolio/lana-naturalis/": {
    "oldUrl": "/skincare-website-design-lana/",
    "title": "Skincare Website Design to Boost Online Sales | Lana Naturalis",
    "description": "See how our organic skincare website design and SEO helped Lana Naturalis grow online sales by 45% and boost customer engagement.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Group-586-1.png",
      "width": 229,
      "height": 116,
      "type": "image/png"
    },
    "datePublished": "2025-03-18T05:19:41+00:00",
    "dateModified": "2025-07-21T09:28:31+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "5 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "E-commerce Websites",
        "/portfolio/ecommerce-websites/"
      ],
      [
        "Lana Naturalis"
      ]
    ]
  },
  "/portfolio/mang-kikos-cacao/": {
    "oldUrl": "/pasalubong-e-commerce-website-mangkikos-cacao/",
    "title": "Pasalubong E-commerce Website Design | Mangkikos Cacao",
    "description": "See how our pasalubong e-commerce website design and SEO strategies boosted Mangkikos Cacao’s online orders by 60% and enhanced brand.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Final-Mangkiko_s-Logo-1.png",
      "width": 273,
      "height": 174,
      "type": "image/png"
    },
    "datePublished": "2025-03-18T03:11:31+00:00",
    "dateModified": "2025-04-04T08:52:45+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "5 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "E-commerce Websites",
        "/portfolio/ecommerce-websites/"
      ],
      [
        "Mang Kiko's Cacao"
      ]
    ]
  },
  "/portfolio/millennium-smiles-dental-center/": {
    "oldUrl": "/dentistry-website-development-millennium/",
    "title": "Dentistry Website Development | Millennium Dental",
    "description": "Learn how our dentistry website development increased inquiries by 50%, streamlined bookings for Millennium Smiles Dental Clinic.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-Untitled-design-83-300x203-1.png",
      "width": 244,
      "height": 165,
      "type": "image/png"
    },
    "datePublished": "2025-03-18T02:17:06+00:00",
    "dateModified": "2026-09-10T08:25:26+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "4 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Dental Clinics",
        "/portfolio/dental-clinic-websites/"
      ],
      [
        "Millennium Smiles Dental Center"
      ]
    ]
  },
  "/portfolio/sia-tankiko-dental-clinic/": {
    "oldUrl": "/dental-care-website-design-sia-tankiko/",
    "title": "Dental Care Website Design for Patient Engagement | Sia Tankiko",
    "description": "Discover how our dental care website design boosted Sia Tankiko Dental Clinic’s bookings by 40% and reduced missed appointments by 30%.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2025-03-cropped-Sia-Tankiko-Dental-Clinic-Logo-1.png",
      "width": 243,
      "height": 243,
      "type": "image/png"
    },
    "datePublished": "2025-03-18T01:25:33+00:00",
    "dateModified": "2025-04-04T08:49:10+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "5 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Portfolio",
        "/portfolio/"
      ],
      [
        "Dental Clinics",
        "/portfolio/dental-clinic-websites/"
      ],
      [
        "Sia-Tankiko Dental Clinic"
      ]
    ]
  },
  "/pricing/": {
    "oldUrl": "/pricing-plans/",
    "title": "Pricing & Marketing Packages for Dental & Aesthetic Clinics",
    "description": "Transparent pricing on custom websites, SEO, and paid ads built exclusively for dental & aesthetic clinics. Choose a package or get a free growth audit.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-10-7-1.png",
      "width": 200,
      "height": 100,
      "type": "image/png"
    },
    "datePublished": "2026-07-08T03:38:56+00:00",
    "dateModified": "2026-07-08T06:51:55+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "13 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Pricing"
      ]
    ]
  },
  "/privacy-policy/": {
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Privacy Policy"
      ]
    ]
  },
  "/services/": {
    "oldUrl": "/web-development-seo-google-ads-services/",
    "title": "Web Development, SEO & Google Ads Services in the Philippines",
    "description": "Boost your business with expert Web Development, SEO, and Google Ads. Get a high-performing website, better rankings, and more traffic today!",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-09-webdesign-ui-ux-website-3d-illustration-4FKAQPE-1.png",
      "width": 600,
      "height": 376,
      "type": "image/png"
    },
    "datePublished": "2024-06-27T01:28:44+00:00",
    "dateModified": "2026-09-08T08:26:55+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "6 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Services"
      ]
    ]
  },
  "/services/paid-advertising/": {
    "oldUrl": "/google-ads-services/",
    "title": "Google Ads Services for Maximum ROI | Digital Services Master",
    "description": "Get more leads and sales with our Google Ads services. We create targeted campaigns that drive results. Get started today!",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-09-seo-admin-dashboard-ui-kit-min.png",
      "width": 1614,
      "height": 2084,
      "type": "image/png"
    },
    "datePublished": "2025-03-14T10:00:40+00:00",
    "dateModified": "2026-09-08T07:52:17+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "2 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Services",
        "/services/"
      ],
      [
        "Paid Advertising"
      ]
    ]
  },
  "/services/seo/": {
    "oldUrl": "/seo-services-in-the-philippines/",
    "title": "SEO Services in the Philippines for Clinics & Brands",
    "description": "Boost rankings with our SEO services in the Philippines. Increase visibility, drive traffic, and achieve long-term success!",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-11-11.webp",
      "width": 1200,
      "height": 800,
      "type": "image/webp"
    },
    "datePublished": "2025-03-14T09:48:16+00:00",
    "dateModified": "2026-09-10T07:57:21+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "2 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Services",
        "/services/"
      ],
      [
        "SEO"
      ]
    ]
  },
  "/services/web-development/": {
    "oldUrl": "/web-development-seo-google-ads-services/website-development/",
    "title": "Website Development for Clinics | Custom WordPress",
    "description": "Clinic website development from wireframe to launch: responsive, custom WordPress builds that stay fast, secure, and simple for your team to update.",
    "ogType": "article",
    "image": {
      "src": "/images/og/2024-08-Clip-path-group-31.png",
      "width": 500,
      "height": 393,
      "type": "image/png"
    },
    "datePublished": "2024-06-28T08:53:17+00:00",
    "dateModified": "2026-09-03T08:26:16+00:00",
    "twitterLabels": [
      [
        "Est. reading time",
        "7 minutes"
      ]
    ],
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Services",
        "/services/"
      ],
      [
        "Web Development"
      ]
    ]
  },
  "/terms-of-service/": {
    "breadcrumb": [
      [
        "Home",
        "/"
      ],
      [
        "Terms of Service"
      ]
    ]
  }
};
