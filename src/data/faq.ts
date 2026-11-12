/** FAQ page content (from FAQ.dc.html). */
export interface FaqGroup {
  id: string;
  name: string;
  items: [question: string, answer: string][];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: 'g',
    name: 'General',
    items: [
      ['What makes your web development different?', 'Every site is built around one goal: turning visitors into consultations. Fast, secure, mobile-first pages, treatment pages written for search and clear booking paths, built by the same team that runs your SEO and ads, so everything works together.'],
      ['What types of businesses do you work with?', 'We specialise in aesthetic clinics, med spas and dental clinics. We also build custom websites for other businesses, including flooring, prefab structures, interior design, events, food brands and e-commerce stores.'],
      ['Do you work with clinics outside the Philippines?', 'Yes. We work with clinics in both the Philippines and Australia, and our whole process runs smoothly online, from the first audit call to launch and reporting.'],
      ['How long until I see results?', 'It depends on your starting point and your market. Paid ads can start bringing enquiries soon after launch, while SEO builds steadily over months. Your free audit includes a realistic timeline for your clinic.'],
    ],
  },
  {
    id: 'w',
    name: 'Web Development',
    items: [
      ['Why is it important for clinics to have a professional website?', 'Your website is usually where patients form their first impression of your clinic. A professional site builds credibility, makes key information easy to find and makes booking simple.'],
      ['Is it important for a clinic website to be mobile-friendly?', 'Yes. Many patients find and compare clinics on their phones. A responsive design looks and works well on every screen size, so booking is easy wherever they are.'],
      ['Do you provide ongoing support and maintenance?', 'Yes. We offer ongoing support and maintenance to keep your clinic website running smoothly and up to date, from security updates to content updates.'],
      ['Can you redesign my existing website?', 'Yes. We review what is working on your current site, keep what helps your search visibility, and rebuild the rest around bookings.'],
    ],
  },
  {
    id: 's',
    name: 'SEO',
    items: [
      ['How does SEO help my clinic?', 'Most patients start with a Google search like “Botox near me” or “dental implants” plus their suburb or city. SEO helps your clinic appear in those results and on Google Maps, so you are found by people already looking for what you offer.'],
      ['How can marketing help boost traffic to my clinic website?', 'SEO brings in people searching for your treatments, paid ads reach people who are ready to book now, and social media keeps your clinic top of mind. Together they bring steady, qualified visitors to your website.'],
      ['Do you handle Google Maps and Google Business Profile?', 'Yes. Local search is a core part of clinic SEO, so we optimise your Google Business Profile and local signals alongside your website.'],
      ['Will I see reports?', 'Yes. You will get regular reports on your rankings, traffic and enquiries, explained in plain English.'],
    ],
  },
  {
    id: 'a',
    name: 'Paid Advertising',
    items: [
      ['Which platforms do you advertise on?', 'Google, Facebook and Instagram. We recommend the right mix for your treatments and goals during your audit.'],
      ['How much should I spend on ads?', 'It depends on your market, your treatments and how many new patients you want. We suggest a starting budget after your free audit.'],
      ['How do you measure results?', 'By the calls and enquiries your ads bring in, not just clicks. We set up tracking before launch and report on it regularly.'],
    ],
  },
  {
    id: 'p',
    name: 'Pricing & Audit',
    items: [
      ['Is the Clinic Growth Audit really free?', 'Yes. There is no cost and no obligation. You will get a clear picture of what to fix first, whether or not you work with us.'],
      ['Which plan is right for my clinic?', 'It depends on your goals, your market and where you are today. Book a free Clinic Growth Audit and we will recommend the plan that fits.'],
      ['Can I combine services?', 'Yes. Your website, SEO and ads work best together, and we can put together a combined plan for your clinic.'],
    ],
  },
];
