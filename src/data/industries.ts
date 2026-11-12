/**
 * Industry landing pages (one template, four industries) from
 * Industry-Landing.dc.html / Industry-Dental.dc.html.
 */
export interface IndustryWork {
  name: string;
  img: string;
  type: string;
  bg: string;
  ink: string;
  href: string;
}

export interface Industry {
  label: string;
  labelLower: string;
  noun: string;
  h1a: string;
  h1b: string;
  sub: string;
  bg: string;
  mid: string;
  deep: string;
  screenName: string;
  screenHead: string;
  shot?: string;
  shotUrl?: string;
  shotAlt?: string;
  challenges: { n: number; t: string; d: string }[];
  web: string;
  seo: string;
  ads: string;
  keywords: string[];
  workTitle: string;
  work: IndustryWork[];
}

const clinicWork: IndustryWork[] = [
  { name: 'Coastal Luxe Aesthetics', img: '/images/cla-photo.webp', type: 'Aesthetic Clinic', bg: '#F3ECE4', ink: '#5B463A', href: '/case-studies/coastal-luxe-aesthetics/' },
  { name: 'Above Dental Care', img: '/images/above-photo.webp', type: 'Dental Clinic', bg: '#E3F5F6', ink: '#0E6F78', href: '/portfolio/above-dental-care/' },
  { name: 'Sia-Tankiko Dental Clinic', img: '/images/sia-photo.webp', type: 'Dental Clinic', bg: '#E6F4EC', ink: '#1F6B48', href: '/portfolio/sia-tankiko-dental-clinic/' }
];

export const INDUSTRIES: Record<'cosmetic' | 'dental' | 'eye' | 'veterinary', Industry> = {
  cosmetic: {
    label: 'Cosmetic Clinics', labelLower: 'cosmetic clinics', noun: 'cosmetic clinic',
    h1a: 'Websites and marketing that fill your', h1b: 'treatment calendar',
    sub: 'For cosmetic and aesthetic clinics that want more consultation requests for injectables, skin and body treatments, not just more traffic.',
    bg: '#F6E9E4', mid: '#EED5CC', deep: '#9A5A47', screenName: 'Your Cosmetic Clinic', screenHead: 'Look refreshed. Book in minutes.', shot: '/images/cla-desk.webp', shotUrl: 'coastalluxeaesthetics.com.au', shotAlt: 'Coastal Luxe Aesthetics website, built by Digital Services Master',
    challenges: [
      { n: 1, t: 'Patients compare before they book', d: 'They check results, reviews and practitioners before they ever call. Your website has to earn that trust fast.' },
      { n: 2, t: 'Crowded local searches', d: 'Searches like “anti-wrinkle near me” are competitive. Without strong local SEO, patients find the clinic down the road.' },
      { n: 3, t: 'Strict advertising rules', d: 'Cosmetic treatments come with advertising restrictions, so ads and website copy need to be written with care.' }
    ],
    web: 'An elegant, fast website with clear treatment pages, galleries and online booking.',
    seo: 'Rank for the injectables and skin treatments you want to grow, and show up on Google Maps.',
    ads: 'Google and social campaigns built around consultations, written with advertising rules in mind.',
    keywords: ['Botox near me', 'Dermal fillers', 'Lip filler', 'Anti-wrinkle injections', 'Skin needling', 'Laser hair removal'],
    workTitle: 'Cosmetic clinic websites we’ve built',
    work: [
      { name: 'Coastal Luxe Aesthetics', img: '/images/cla-photo.webp', type: 'Aesthetic Clinic', bg: '#F3ECE4', ink: '#5B463A', href: '/case-studies/coastal-luxe-aesthetics/' },
      { name: 'La Maison Beaute', img: '/images/lamaison-photo.webp', type: 'Aesthetic Clinic', bg: '#F7E8EC', ink: '#7A3349', href: '/portfolio/' },
      { name: 'Venus Medispa', img: '/images/venus-photo.webp', type: 'Med Spa', bg: '#EEEAF7', ink: '#4B3A7A', href: '/portfolio/' }
    ]
  },
  dental: {
    label: 'Dental Clinics', labelLower: 'dental clinics', noun: 'dental clinic',
    h1a: 'Be the dental clinic nearby patients', h1b: 'find and trust first',
    sub: 'For general, cosmetic and family dental practices that want more booked appointments from Google, social media and their website.',
    bg: '#E3F5F6', mid: '#C8ECEE', deep: '#0E7C86', screenName: 'Your Dental', screenHead: 'A brighter smile starts with one visit.', shot: '/images/above-desk.webp', shotUrl: 'abovedentalcare.com', shotAlt: 'Above Dental Care website, built by Digital Services Master',
    challenges: [
      { n: 1, t: 'Patients choose on convenience', d: 'Location, opening hours and easy booking decide most first visits. Your site needs to make all three obvious.' },
      { n: 2, t: 'Nervous patients need reassurance', d: 'Friendly, clear information about your team and treatments turns hesitation into a booked check-up.' },
      { n: 3, t: 'High-value treatments need more', d: 'Veneers, implants and braces need dedicated pages that answer questions and build confidence.' }
    ],
    web: 'A friendly, fast website with online booking and a page for every treatment.',
    seo: 'Rank for “dentist near me” and the treatments you want to grow, in Search and on Google Maps.',
    ads: 'Campaigns for check-ups and high-value treatments, tracked to calls and bookings.',
    keywords: ['Dentist near me', 'Dental implants', 'Veneers', 'Teeth whitening', 'Braces', 'Emergency dentist'],
    workTitle: 'Dental clinic websites we’ve built',
    work: [
      { name: 'Above Dental Care', img: '/images/above-photo.webp', type: 'Dental Clinic', bg: '#E3F5F6', ink: '#0E6F78', href: '/portfolio/above-dental-care/' },
      { name: 'Sia-Tankiko Dental Clinic', img: '/images/sia-photo.webp', type: 'Dental Clinic', bg: '#E6F4EC', ink: '#1F6B48', href: '/portfolio/sia-tankiko-dental-clinic/' },
      { name: 'Millennium Smiles', img: '/images/mil-photo.webp', type: 'Dental Center', bg: '#E8F1FB', ink: '#1F4F8A', href: '/portfolio/millennium-smiles-dental-center/' }
    ]
  },
  eye: {
    label: 'Eye Clinics', labelLower: 'eye clinics', noun: 'eye clinic',
    h1a: 'More eye exam and consultation bookings for your', h1b: 'eye clinic',
    sub: 'For optometrists and eye clinics that want to be found for eye exams, glasses, contact lenses and specialist care.',
    bg: '#ECEFFB', mid: '#D9DFF6', deep: '#3B4BA8', screenName: 'Your Eye Clinic', screenHead: 'Clear vision starts with an eye exam.',
    challenges: [
      { n: 1, t: 'Routine visits are easy to put off', d: 'Simple online booking and clear information help patients act instead of waiting another year.' },
      { n: 2, t: 'Clinical care and retail in one', d: 'Your website needs to showcase eye care services and help patients choose frames and lenses.' },
      { n: 3, t: 'Chains in the same results', d: 'You compete with big brands in local search, so your local SEO has to be sharp.' }
    ],
    web: 'A clear, fast website for your eye care services, eyewear and online booking.',
    seo: 'Rank for eye exams, optometrists and eyewear searches near you, including Google Maps.',
    ads: 'Campaigns for eye exams, eyewear and specialist services, tracked to real bookings.',
    keywords: ['Eye exam near me', 'Optometrist', 'Eye clinic', 'Contact lenses', 'Prescription glasses', 'Kids eye test'],
    workTitle: 'Clinic websites we’ve built',
    work: clinicWork
  },
  veterinary: {
    label: 'Veterinary Clinics', labelLower: 'veterinary clinics', noun: 'vet clinic',
    h1a: 'Help more pet owners find and book', h1b: 'your vet clinic',
    sub: 'For veterinary clinics that want more appointments, from vaccinations and check-ups to surgery and emergencies.',
    bg: '#EAF4E4', mid: '#D3E9C8', deep: '#3F7A2E', screenName: 'Your Vet Clinic', screenHead: 'Caring for your pets, close to home.',
    challenges: [
      { n: 1, t: 'Urgent searches happen fast', d: 'When a pet is unwell, owners call the first clinic they find that looks trustworthy and is open.' },
      { n: 2, t: 'Owners want to know your team', d: 'Vet and staff profiles help owners feel comfortable before their first visit.' },
      { n: 3, t: 'Services are easy to overlook', d: 'Clear service pages help owners discover everything you offer, beyond check-ups.' }
    ],
    web: 'A warm, fast website with service pages, team profiles and easy booking.',
    seo: 'Rank for “vet near me” and your key services, and stand out on Google Maps.',
    ads: 'Local campaigns for check-ups, vaccinations and key services, tracked to calls.',
    keywords: ['Vet near me', 'Emergency vet', 'Pet vaccinations', 'Dog desexing', 'Cat vet', 'Pet dental care'],
    workTitle: 'Clinic websites we’ve built',
    work: clinicWork
  }
};

/** URL slug and page title for each industry. */
export const INDUSTRY_PAGES = [
  { slug: 'cosmetic-clinics', key: 'cosmetic', title: 'Cosmetic Clinic Marketing' },
  { slug: 'dental-clinics', key: 'dental', title: 'Dental Clinic Marketing' },
  { slug: 'eye-clinics', key: 'eye', title: 'Eye Clinic Marketing' },
  { slug: 'veterinary-clinics', key: 'veterinary', title: 'Veterinary Clinic Marketing' },
] as const;
