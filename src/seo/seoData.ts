import {
  FaqEntry,
  HOME_GENERAL_FAQS,
  HOME_PAYROLL_ACCORDION,
  PRODUCT_PAGES,
} from '../data/sitePagesData';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface RouteSeoEntry {
  path: string;
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  ogImageAlt: string;
  breadcrumbs: BreadcrumbItem[];
  featureList?: string[];
  faqs?: FaqEntry[];
  changefreq: 'weekly' | 'monthly';
  priority: string;
}

export const ALL_SEO_ROUTES: Record<string, RouteSeoEntry> = {
  '/': {
    path: '/',
    title: 'gemX | All-in-One HRIS & Payroll Software in the Philippines',
    description:
      'Simplify Philippine payroll & HR with gemX. 100% BIR Form 2316, SSS, PhilHealth, Pag-IBIG & DOLE compliant HRIS with biometrics, mobile self-service & multi-company hub.',
    keywords:
      'HRIS Philippines, payroll software Philippines, Philippine payroll system, BIR Form 2316 software, SSS PhilHealth Pag-IBIG payroll, DOLE compliant HRIS, biometric attendance payroll Philippines, gemX HRIS',
    ogImage: '/img/people/hr-director-hero.jpg',
    ogImageAlt: 'Smiling Filipina HR Director running stress-free Philippine payroll and HRIS on gemX',
    breadcrumbs: [{ name: 'Home', path: '/' }],
    featureList: [
      'Automated Philippine Payroll (TRAIN Law Tax, SSS, PhilHealth, Pag-IBIG, 13th Month Pay)',
      'BIR Form 2316 & Alphalist Generation with Digital Signatures',
      'Digital 201 Employee Files, Organization Charts & Exit Clearances',
      'Biometric Time & Attendance, Shift Scheduling & Local City Holidays',
      'Mobile & Web Employee and Manager Self-Service',
      'Multi-Company & Sister-Company Executive Hub',
      'Applicant Tracking System (ATS) & Paperless Pre-Day-One Onboarding',
      '360-Degree Performance Management, LMS, HMO LOA & Asset Tracking',
    ],
    faqs: [...HOME_PAYROLL_ACCORDION, ...HOME_GENERAL_FAQS],
    changefreq: 'weekly',
    priority: '1.0',
  },

  '/products/core-hr': {
    path: '/products/core-hr',
    title: 'Core HR & Digital 201 Files Software Philippines | gemX HRIS',
    description:
      'Organize employee 201 files, live org charts, job movements, onboarding checklists, exit clearances & DOLE 30-day Final Pay in one paperless Philippine HRIS.',
    keywords:
      'Core HR software Philippines, digital 201 file Philippines, employee masterfile system, HRIS org chart Philippines, exit clearance final pay software DOLE',
    ogImage: '/img/people/product-core-hr.jpg',
    ogImageAlt: 'Filipina HR specialist reviewing paperless digital 201 employee records on a tablet',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/#products' },
      { name: 'Core HR & 201 Files', path: '/products/core-hr' },
    ],
    featureList: PRODUCT_PAGES['core-hr'].heroBullets,
    faqs: PRODUCT_PAGES['core-hr'].faqs,
    changefreq: 'weekly',
    priority: '0.9',
  },

  '/products/payroll': {
    path: '/products/payroll',
    title: 'Philippine Payroll Software (BIR 2316, SSS, PhilHealth, Pag-IBIG) | gemX',
    description:
      'Close accurate Philippine payroll cutoffs in minutes. Built-in TRAIN Law tax, SSS, PhilHealth, Pag-IBIG, 13th month ₱90K ceiling, BIR 2316, Alphalist & bank/wallet payouts.',
    keywords:
      'payroll software Philippines, BIR 2316 generator, Alphalist payroll software, SSS PhilHealth Pag-IBIG calculator, 13th month pay software Philippines, TRAIN law payroll',
    ogImage: '/img/people/payroll-relief-story.jpg',
    ogImageAlt: 'Filipino HR and Finance specialists celebrating an accurate, on-time payroll cutoff with gemX',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/#products' },
      { name: 'Payroll & Compliance', path: '/products/payroll' },
    ],
    featureList: PRODUCT_PAGES.payroll.heroBullets,
    faqs: PRODUCT_PAGES.payroll.faqs,
    changefreq: 'weekly',
    priority: '0.95',
  },

  '/products/time-attendance': {
    path: '/products/time-attendance',
    title: 'Biometric Time & Attendance, Shift & Leave Software PH | gemX',
    description:
      'Connect ZKTeco biometrics, GPS selfie mobile clock-ins, rotating shifts, night differentials, local city holidays & leave balances straight into Philippine payroll.',
    keywords:
      'time and attendance software Philippines, biometric payroll integration Philippines, DTR system Philippines, leave management software PH, night differential overtime calculator DOLE',
    ogImage: '/img/people/product-time-attendance.jpg',
    ogImageAlt: 'Filipino employee clocking in seamlessly at a contactless wall biometric terminal in a Makati office',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/#products' },
      { name: 'Time & Attendance', path: '/products/time-attendance' },
    ],
    featureList: PRODUCT_PAGES['time-attendance'].heroBullets,
    faqs: PRODUCT_PAGES['time-attendance'].faqs,
    changefreq: 'weekly',
    priority: '0.9',
  },

  '/products/recruitment': {
    path: '/products/recruitment',
    title: 'Recruitment ATS & Paperless Onboarding Software Philippines | gemX',
    description:
      'Launch a branded careers portal, track applicants visually, send digital job offers & convert hires into complete 201 employee profiles before Day One.',
    keywords:
      'applicant tracking system Philippines, ATS recruitment software PH, paperless employee onboarding Philippines, careers portal software HRIS',
    ogImage: '/img/people/product-recruitment.jpg',
    ogImageAlt: 'Filipina Talent Partner welcoming a smiling new hire on Day One with badge and laptop ready',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/#products' },
      { name: 'Recruitment & Onboarding', path: '/products/recruitment' },
    ],
    featureList: PRODUCT_PAGES.recruitment.heroBullets,
    faqs: PRODUCT_PAGES.recruitment.faqs,
    changefreq: 'weekly',
    priority: '0.85',
  },

  '/products/talent-learning': {
    path: '/products/talent-learning',
    title: 'Performance Management, 360° Reviews & LMS Philippines | gemX',
    description:
      'Run KPI & OKR goal alignment, 360-degree performance appraisals, 9-Box talent grids, merit matrix planning & online employee training courses in one HR platform.',
    keywords:
      'performance management software Philippines, 360 appraisal system PH, employee LMS training Philippines, KPI OKR HRIS software',
    ogImage: '/img/people/manager-team-coaching.jpg',
    ogImageAlt: 'Filipina team manager coaching a team member on career growth and performance goals',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/#products' },
      { name: 'Performance & Learning', path: '/products/talent-learning' },
    ],
    featureList: PRODUCT_PAGES['talent-learning'].heroBullets,
    faqs: PRODUCT_PAGES['talent-learning'].faqs,
    changefreq: 'weekly',
    priority: '0.85',
  },

  '/products/benefits-assets': {
    path: '/products/benefits-assets',
    title: 'Employee Benefits, HMO LOA, Asset & DOLE Relations Software | gemX',
    description:
      'Manage HMO enrollments, fast Hospital LOA requests, QR-tagged laptop & asset handovers, and DOLE twin-notice employee relations workflows in one place.',
    keywords:
      'employee benefits HMO software Philippines, company asset tracking QR code PH, DOLE NTE due process HR software, hospital LOA portal',
    ogImage: '/img/people/product-benefits-assets.jpg',
    ogImageAlt: 'Workplace officer handing over a tracked company laptop and headset to a smiling Filipina employee',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/#products' },
      { name: 'Benefits, Assets & Relations', path: '/products/benefits-assets' },
    ],
    featureList: PRODUCT_PAGES['benefits-assets'].heroBullets,
    faqs: PRODUCT_PAGES['benefits-assets'].faqs,
    changefreq: 'weekly',
    priority: '0.85',
  },

  '/features/multi-company': {
    path: '/features/multi-company',
    title: 'Multi-Company & Multi-Branch HRIS for Philippine Groups | gemX',
    description:
      'Manage multiple sister companies and nationwide branches from one executive hub while keeping each entity’s payroll, TIN/SSS, branding & 201 records 100% separate.',
    keywords:
      'multi-company HRIS Philippines, conglomerate payroll software PH, sister company HR system, multi-branch payroll local holidays Philippines',
    ogImage: '/img/people/executive-multicompany.jpg',
    ogImageAlt: 'Filipino group executives reviewing sister-company workforce insights in a Manila boardroom',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Special Features', path: '/features/multi-company' },
      { name: 'Multi-Company & Branches', path: '/features/multi-company' },
    ],
    featureList: [
      'One-click switching across authorized sister companies',
      '100% isolated payroll, statutory IDs (TIN, SSS, PhilHealth, Pag-IBIG) & 201 files per company',
      'Custom per-company logo, color theme, payslip header & public careers page',
      'Branch-specific geofences, approvers & local city/provincial holidays',
    ],
    changefreq: 'monthly',
    priority: '0.85',
  },

  '/features/self-service': {
    path: '/features/self-service',
    title: 'Employee & Manager Mobile Self-Service HR App Philippines | gemX',
    description:
      'Give Filipino employees & managers 24/7 mobile and web access to payslips, BIR 2316, leave balances, GPS selfie clock-in, overtime & 1-tap team approvals.',
    keywords:
      'employee self service portal Philippines, ESS HRIS app PH, mobile clock in payslip app Philippines, manager leave approval app',
    ogImage: '/img/people/employee-mobile-pocket.jpg',
    ogImageAlt: 'Smiling Filipino employee checking payslips and leave balances on his smartphone',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Special Features', path: '/features/self-service' },
      { name: 'Mobile & Web Self-Service', path: '/features/self-service' },
    ],
    featureList: [
      '24/7 PDF payslips, 13th month statements & BIR Form 2316 downloads',
      'GPS location-verified clock-in with live selfie verification',
      'Real-time Vacation & Sick Leave balances and 2-tap leave/OT filing',
      'One-tap manager approvals and Face/Fingerprint passwordless sign-in',
    ],
    changefreq: 'monthly',
    priority: '0.85',
  },

  '/features/workpulse': {
    path: '/features/workpulse',
    title: 'WorkPulse Hybrid & WFH Time Tracking & Productivity PH | gemX',
    description:
      'Support hybrid and work-from-home teams in the Philippines with transparent focus insights, active hours & project timesheets connected straight to gemX Payroll.',
    keywords:
      'hybrid work time tracking Philippines, WFH attendance software PH, remote employee project timesheets HRIS, WorkPulse gemX',
    ogImage: '/img/people/feature-workpulse.jpg',
    ogImageAlt: 'Filipina remote professional working happily from a sunlit Manila home office',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Special Features', path: '/features/workpulse' },
      { name: 'WorkPulse Hybrid Insights', path: '/features/workpulse' },
    ],
    featureList: [
      'Daily active work time vs. idle break summaries for hybrid teams',
      'Role-based productive focus categories without micromanagement',
      'One-click project and client task timesheets synced to gemX Payroll',
    ],
    changefreq: 'monthly',
    priority: '0.8',
  },

  '/features/salary-payouts': {
    path: '/features/salary-payouts',
    title: 'Instant Payroll Disbursement (Maya, PayMongo & PH Banks) | gemX',
    description:
      'Disburse approved net salaries in minutes via Maya Business, PayMongo digital wallets, or ready-to-upload Philippine corporate bank payroll advice files.',
    keywords:
      'payroll disbursement Philippines, Maya Business payroll payout, PayMongo salary disbursement, bank payroll file generator BDO BPI Metrobank UnionBank',
    ogImage: '/img/people/feature-salary-payouts.jpg',
    ogImageAlt: 'Two Filipino coworkers smiling over iced coffee as instant payday wallet notifications arrive',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Special Features', path: '/features/salary-payouts' },
      { name: 'Instant Salary Payouts', path: '/features/salary-payouts' },
    ],
    featureList: [
      'One-click salary disbursements from locked payroll periods',
      'Direct Maya Business & PayMongo wallet payouts',
      'Formatted payroll advice files for major Philippine commercial banks',
    ],
    changefreq: 'monthly',
    priority: '0.8',
  },

  '/roi-calculator': {
    path: '/roi-calculator',
    title: 'HRIS & Payroll ROI & Time-Savings Calculator Philippines | gemX',
    description:
      'Estimate how many monthly HR hours, paper forms, and payroll cutoff days your Philippine team reclaims by switching from manual spreadsheets to gemX HRIS.',
    keywords:
      'HRIS ROI calculator Philippines, payroll time savings calculator, HR automation savings Philippines, spreadsheet vs HRIS comparison',
    ogImage: '/img/people/roi-time-reclaimed.jpg',
    ogImageAlt: 'Two happy Filipino HR professionals leaving their Makati office on time at sunset',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'HR ROI & Time Calculator', path: '/roi-calculator' },
    ],
    changefreq: 'monthly',
    priority: '0.75',
  },

  '/request-demo': {
    path: '/request-demo',
    title: 'Book a Free Live Demo | gemX Philippine HRIS & Payroll',
    description:
      'Schedule a personalized 30-minute walkthrough with a Philippine HR & Payroll specialist tailored to your shifts, statutory compliance, branches & headcount.',
    keywords:
      'request HRIS demo Philippines, book payroll software demo PH, gemX HRIS pricing and walkthrough',
    ogImage: '/img/people/demo-advisory-specialist.jpg',
    ogImageAlt: 'Friendly Filipino HR Advisory Specialist ready to walk through your payroll and HR workflows',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Request a Demo', path: '/request-demo' },
    ],
    changefreq: 'monthly',
    priority: '0.9',
  },
};

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const cleaned = pathname.replace(/\/+$/, '');
  return cleaned || '/';
}

export function getRouteSeo(pathname: string): RouteSeoEntry {
  const norm = normalizePathname(pathname);
  return ALL_SEO_ROUTES[norm] ?? ALL_SEO_ROUTES['/'];
}

export function buildJsonLdGraph(entry: RouteSeoEntry, siteDomain: string): Record<string, unknown> {
  const cleanDomain = siteDomain.trim().replace(/^https?:\/\//i, '').replace(/\/+$/, '') || 'gemx.ph';
  const baseUrl = `https://${cleanDomain}`;
  const canonicalUrl = entry.path === '/' ? `${baseUrl}/` : `${baseUrl}${entry.path}`;
  const imageUrl = `${baseUrl}${entry.ogImage}`;

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'gemX',
      legalName: 'gemX Payroll and HR Software',
      url: `${baseUrl}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/img/logo/gemx-payroll-logo-light.png`,
        width: 1068,
        height: 527,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Philippines',
        identifier: 'PH',
      },
      knowsAbout: [
        'Human Resource Information System (HRIS)',
        'Philippine Payroll Compliance',
        'BIR Form 2316 & Alphalist',
        'SSS, PhilHealth & Pag-IBIG Contributions',
        'DOLE Labor Standards',
        'Biometric Time & Attendance',
        'Multi-Company Workforce Management',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: 'gemX — All-in-One HRIS & Payroll Software Philippines',
      inLanguage: 'en-PH',
      publisher: { '@id': `${baseUrl}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: entry.title,
      description: entry.description,
      inLanguage: 'en-PH',
      isPartOf: { '@id': `${baseUrl}/#website` },
      about: { '@id': `${baseUrl}/#organization` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1280,
        height: 800,
        caption: entry.ogImageAlt,
      },
    },
  ];

  if (entry.featureList && entry.featureList.length > 0) {
    graph.push({
      '@type': 'SoftwareApplication',
      '@id': `${canonicalUrl}#software`,
      name: entry.path === '/' ? 'gemX All-in-One Philippine HRIS & Payroll' : entry.title.split('|')[0].trim(),
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Human Resources & Payroll Software',
      operatingSystem: 'Web, iOS, Android',
      url: canonicalUrl,
      image: imageUrl,
      description: entry.description,
      inLanguage: 'en-PH',
      areaServed: {
        '@type': 'Country',
        name: 'Philippines',
      },
      provider: { '@id': `${baseUrl}/#organization` },
      featureList: entry.featureList,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'PHP',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/request-demo`,
        description: 'Personalized Philippine HRIS & Payroll walkthrough and tailored headcount pricing',
      },
    });
  }

  if (entry.breadcrumbs.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: entry.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.path === '/' ? `${baseUrl}/` : `${baseUrl}${crumb.path}`,
      })),
    });
  }

  if (entry.faqs && entry.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: entry.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
