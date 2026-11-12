/** Pricing plans (from Pricing.dc.html). */
export interface Plan {
  name: string;
  price: string;
  cta: string;
  best: string;
  features: string[];
}

export interface PlanSet {
  /** Key used by the plan-type tabs (see `pricing` logic). */
  key: 'W' | 'G';
  group: string;
  suffix: string;
  intro: string;
  plans: [Plan, Plan, Plan];
}

export const PLAN_SETS: PlanSet[] = [
  {
    key: 'W',
    group: 'Website package',
    suffix: 'one-off project',
    intro: 'Comprehensive website builds tailored to your clinic’s growth.',
    plans: [
      { name: 'Starter', price: '₱24,000', cta: 'Get Started', best: 'Best for new clinics that need a clean, professional site fast.', features: ['Up to 5 pages (Home, About, Services, Gallery, Contact)', 'Mobile-responsive design from a premium template', 'Basic on-page SEO (page titles, meta descriptions, headings)', 'Contact form + click-to-call button', 'Google Business Profile link & map', '1 round of revisions', '~2 week delivery'] },
      { name: 'Professional', price: '₱58,000', cta: 'Choose Professional', best: 'Best for established clinics that want to attract and convert more patients.', features: ['Everything in Starter, plus:', 'Custom design tailored to your brand (no templates)', '8–12 pages', 'Professional copywriting for your key pages', 'Online booking / appointment integration', 'Full on-page SEO + local SEO setup', 'Speed & image optimisation', 'Blog setup', '2 rounds of revisions', '~3–4 week delivery'] },
      { name: 'Premium', price: '₱145,000', cta: 'Choose Premium', best: 'Best for multi-service or multi-location clinics wanting a standout presence.', features: ['Everything in Professional, plus:', 'Fully bespoke design & brand styling', 'E-commerce or advanced booking system', 'Integrations (CRM, payments, email marketing)', 'Advanced technical SEO + schema markup', 'Content for all core pages + 3 launch blog posts', 'Priority delivery + dedicated project manager', '30–60 days post-launch support'] },
    ],
  },
  {
    key: 'G',
    group: 'Monthly growth plan',
    suffix: '/ month',
    intro: 'Recurring, performance-driven SEO and ads to keep new patients coming in.',
    plans: [
      { name: 'SEO Essentials', price: '₱15,000', cta: 'Start Ranking', best: 'Get found by patients searching for your treatments.', features: ['Keyword research & targeting', '10 priority keywords', 'On-page SEO optimisation', 'Google Business Profile optimisation', 'Technical SEO monitoring', 'Monthly performance report'] },
      { name: 'Growth', price: '₱25,000', cta: 'Choose Growth', best: 'For clinics serious about steady, compounding traffic.', features: ['Everything in Essentials, plus:', '20–25 priority keywords', '2 blog / content pieces per month', 'Link building & local citations', 'Conversion & call tracking setup', 'Competitor monitoring', 'Monthly strategy call'] },
      { name: 'Full Funnel', price: '₱45,000', cta: 'Scale My Clinic', best: 'SEO + paid ads working together for maximum bookings.', features: ['Everything in Growth, plus:', '4 blog / content pieces per month', 'Google Ads management', 'Meta (Facebook & Instagram) Ads management', 'Landing page & conversion optimisation', 'Ad creative direction', 'Bi-weekly reporting'] },
    ],
  },
];
