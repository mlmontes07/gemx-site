export interface MockupPreview {
  eyebrow: string;
  title: string;
  highlightLabel: string;
  highlightValue: string;
  metrics: readonly { label: string; value: string }[];
  items: readonly { title: string; subtitle: string; status: string; tone: 'mint' | 'sky' | 'violet' | 'amber' }[];
}

export interface SplitFeatureBlock {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  preview: MockupPreview;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface ProductPageConfig {
  slug: string;
  navName: string;
  navTagline: string;
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroBullets: string[];
  heroPreview: MockupPreview;
  sections: SplitFeatureBlock[];
  faqs: FaqEntry[];
  nextSlug: string;
  nextLabel: string;
}

export const HOME_PROBLEMS_WE_FIX = [
  'Payroll discrepancies and last-minute reconciliation nights right before cut-off',
  'Stress over shifting BIR, SSS, PhilHealth, Pag-IBIG, and holiday pay calculations',
  'Disconnected 201 files, biometric logs, and leave spreadsheets requiring manual re-typing',
  'Delayed leave and overtime approvals causing constant employee follow-ups',
  'Managing multiple sister companies or branches across scattered folders and accounts',
  'Resignations and clearances dragging out final pay and BIR Form 2316 release',
];

export interface HomeModuleTab {
  id: string;
  label: string;
  headline: string;
  route: string;
  routeLabel: string;
  outcomeGroups: {
    groupTitle: string;
    points: string[];
  }[];
  preview: MockupPreview;
}

export const HOME_MODULE_TABS: HomeModuleTab[] = [
  {
    id: 'hr',
    label: 'Core HR',
    headline: 'Structure Your Organization & Run the Employee Lifecycle.',
    route: '/products/core-hr',
    routeLabel: 'Explore Core HR & 201 Files',
    outcomeGroups: [
      {
        groupTitle: 'Organize Your Workforce',
        points: [
          'Maintain complete 18-section digital 201 employee files',
          'Map departments, ranks, branches & visual org charts',
          'Capture digital signatures for official forms & certificates',
          'Keep sister companies private under one executive hub',
        ],
      },
      {
        groupTitle: 'Run Every Transition Smoothly',
        points: [
          'Guide new joiners with pre-day-one onboarding checklists',
          'Route multi-department exit clearances without paper chasing',
          'Compute accurate Final Pay & separated Form 2316 on time',
        ],
      },
    ],
    preview: {
      eyebrow: 'Employee Information',
      title: 'Digital 201 Masterfile & Lifecycle',
      highlightLabel: '201 File Completeness',
      highlightValue: '98.8%',
      metrics: [
        { label: 'Active Staff', value: '1,250' },
        { label: 'Locations', value: '18 Branches' },
      ],
      items: [
        {
          title: 'Maria Isabella Reyes · Senior Accountant',
          subtitle: 'TIN, SSS, PhilHealth, Pag-IBIG & Signature Verified',
          status: 'Complete',
          tone: 'mint',
        },
        {
          title: 'Organization Chart & People Directory',
          subtitle: 'Supervisors & leave approvers linked automatically',
          status: 'Updated',
          tone: 'sky',
        },
        {
          title: 'Exit Clearance & Final Pay Settlement',
          subtitle: '8 of 8 departments signed off · Within 30-day rule',
          status: 'Cleared',
          tone: 'violet',
        },
      ],
    },
  },
  {
    id: 'time',
    label: 'Time & Leave',
    headline: 'Manage Attendance, Shifts, Overtime & Leave Effortlessly.',
    route: '/products/time-attendance',
    routeLabel: 'Explore Time & Attendance',
    outcomeGroups: [
      {
        groupTitle: 'Track Office, Field & Hybrid Time',
        points: [
          'Sync office fingerprint & face clocks automatically',
          'Allow mobile clock-in at approved sites with photo check',
          'Manage flexible shifts, rest days & WorkPulse remote logs',
        ],
      },
      {
        groupTitle: 'Automate Leaves & Local Holidays',
        points: [
          'Set separate National and local City/Provincial holidays',
          'Track leave balances, accruals & year-end carry-over',
          'Flag missing time-outs early—before payroll cut-off arrives',
        ],
      },
    ],
    preview: {
      eyebrow: 'Daily Attendance',
      title: 'Team Presence & Leave Overview',
      highlightLabel: 'On Duty Today',
      highlightValue: '96.4%',
      metrics: [
        { label: 'Office Clocks', value: '24 Online' },
        { label: 'Approved Leaves', value: '18 Today' },
      ],
      items: [
        {
          title: 'Makati Head Office · Lobby Biometrics',
          subtitle: '142 morning check-ins recorded automatically',
          status: 'Synced',
          tone: 'mint',
        },
        {
          title: 'Cebu Regional Branch · Mobile Check-In',
          subtitle: 'Approved location & live photo verified at 8:54 AM',
          status: 'On Time',
          tone: 'sky',
        },
        {
          title: 'Overtime & Leave Approvals',
          subtitle: 'Ready and connected directly to current payroll period',
          status: 'Ready',
          tone: 'amber',
        },
      ],
    },
  },
  {
    id: 'pay',
    label: 'Payroll',
    headline: 'Run Accurate Philippine Payroll, Loans & Salary Payouts.',
    route: '/products/payroll',
    routeLabel: 'Explore Philippine Payroll',
    outcomeGroups: [
      {
        groupTitle: 'Stress-Free Pay Runs',
        points: [
          'Process monthly, semi-monthly, or weekly pay groups in minutes',
          'Handle allowances, de minimis, retro pay & loan deductions',
          'Send salaries straight to bank files, Maya, or PayMongo wallets',
        ],
      },
      {
        groupTitle: 'Stay 100% Compliant',
        points: [
          'Auto-compute SSS, PhilHealth, Pag-IBIG & BIR TRAIN taxes',
          'Generate 13th month pay & year-end tax annualization',
          'Download BIR Alphalist & signed Form 2316 PDFs in clicks',
        ],
      },
    ],
    preview: {
      eyebrow: 'Payroll Summary',
      title: 'Semi-Monthly Cutoff · Nov 1–15',
      highlightLabel: 'Employees Balanced',
      highlightValue: '100%',
      metrics: [
        { label: 'Processed', value: '1,250 Staff' },
        { label: 'Net Payout', value: '₱18.42M' },
      ],
      items: [
        {
          title: 'Statutory & Withholding Taxes',
          subtitle: 'SSS, PhilHealth, Pag-IBIG & TRAIN tax verified',
          status: 'Balanced',
          tone: 'mint',
        },
        {
          title: 'Employee Loan Installments',
          subtitle: '94 SSS, Pag-IBIG & company advances deducted',
          status: 'Updated',
          tone: 'sky',
        },
        {
          title: 'Payslips & Salary Disbursement',
          subtitle: 'Bank advice & digital wallet payouts ready to release',
          status: 'Approved',
          tone: 'violet',
        },
      ],
    },
  },
  {
    id: 'talent',
    label: 'Talent & Learning',
    headline: 'Set Clear Goals, Run Fair Reviews & Upskill Your People.',
    route: '/products/talent-learning',
    routeLabel: 'Explore Performance & Learning',
    outcomeGroups: [
      {
        groupTitle: 'Grow High-Performing Teams',
        points: [
          'Align company, team, and individual goals & OKRs',
          'Run self, manager, and 360-degree peer evaluations',
          'Calibrate ratings fairly & plan merit salary increases',
        ],
      },
      {
        groupTitle: 'Deliver Continuous Learning',
        points: [
          'Assign online courses, learning paths & assessments',
          'Track mandatory workplace compliance training easily',
          'Issue printable completion certificates automatically',
        ],
      },
    ],
    preview: {
      eyebrow: 'Talent Growth',
      title: 'Appraisals, Calibration & Courses',
      highlightLabel: 'Review Completion',
      highlightValue: '97.5%',
      metrics: [
        { label: 'Aligned Goals', value: '94.2%' },
        { label: 'Course Compliance', value: '99.1%' },
      ],
      items: [
        {
          title: 'Annual Performance Calibration',
          subtitle: 'Ratings reviewed fairly across 12 departments',
          status: 'Calibrated',
          tone: 'mint',
        },
        {
          title: 'New Manager Leadership Path',
          subtitle: '28 supervisors enrolled · Points & badges active',
          status: 'Active',
          tone: 'sky',
        },
        {
          title: 'Data Privacy & Workplace Safety Course',
          subtitle: 'Completion certificates generated for all staff',
          status: 'Certified',
          tone: 'violet',
        },
      ],
    },
  },
  {
    id: 'benefits',
    label: 'Benefits & Assets',
    headline: 'Care for Your People & Track Every Piece of Company Property.',
    route: '/products/benefits-assets',
    routeLabel: 'Explore Benefits, Assets & Relations',
    outcomeGroups: [
      {
        groupTitle: 'HMO, Perks & Hospital LOAs',
        points: [
          'Manage HMO plans, open enrollment & dependent coverage',
          'Print official Hospital Letters of Authorization (LOAs)',
          'Verify monthly HMO provider billing against active staff',
        ],
      },
      {
        groupTitle: 'Assets & Workplace Relations',
        points: [
          'Track laptops, vehicles & kits with printable QR labels',
          'Print signed equipment handover & return receipts',
          'Manage NTEs, hearings & printable due-process case folders',
        ],
      },
    ],
    preview: {
      eyebrow: 'Benefits & Admin',
      title: 'HMO Coverage & Asset Accountability',
      highlightLabel: 'Tracked Assets',
      highlightValue: '1,680 Units',
      metrics: [
        { label: 'HMO Lives', value: '2,140 Covered' },
        { label: 'Due Process', value: 'DOLE-Aligned' },
      ],
      items: [
        {
          title: 'Hospital Letter of Authorization #8812',
          subtitle: 'Approved & ready for employee download as PDF',
          status: 'LOA Ready',
          tone: 'mint',
        },
        {
          title: 'MacBook Pro 16" Kit · QR Tagged',
          subtitle: 'Assigned to Andrea Reyes · Handover receipt signed',
          status: 'Issued',
          tone: 'sky',
        },
        {
          title: 'Workplace Relations Case Folder',
          subtitle: 'NTE, written explanation & hearing minutes organized',
          status: 'Documented',
          tone: 'amber',
        },
      ],
    },
  },
  {
    id: 'recruitment',
    label: 'Recruitment',
    headline: 'Hire the Right Talent & Welcome New Joiners Seamlessly.',
    route: '/products/recruitment',
    routeLabel: 'Explore Recruitment & Careers',
    outcomeGroups: [
      {
        groupTitle: 'Attract & Select Faster',
        points: [
          'Approve job requisitions with clear budget & headcount',
          'Publish company-branded career pages for each entity',
          'Shortlist candidates & gather structured interview scores',
        ],
      },
      {
        groupTitle: 'Zero Re-Encoding on Day One',
        points: [
          'Prepare job offers matched to your pay grades',
          'Convert hired applicants into 201 files in one click',
          'Trigger onboarding tasks & portal invites automatically',
        ],
      },
    ],
    preview: {
      eyebrow: 'Talent Acquisition',
      title: 'Branded Careers & Hiring Pipeline',
      highlightLabel: 'Offer Acceptance',
      highlightValue: '92%',
      metrics: [
        { label: 'Open Roles', value: '14 Vacancies' },
        { label: 'Avg. Hiring Speed', value: '6 Days Faster' },
      ],
      items: [
        {
          title: 'Andrea Reyes · Senior Operations Manager',
          subtitle: 'Offer accepted · Ready to convert to 201 record',
          status: '1-Click Hire',
          tone: 'mint',
        },
        {
          title: 'Marco Villanueva · Payroll Specialist',
          subtitle: 'Panel interview score: 4.9 / 5.0 · Recommended',
          status: 'Final Stage',
          tone: 'sky',
        },
        {
          title: 'Branded Company Careers Page',
          subtitle: 'Live open positions published with your logo & colors',
          status: 'Published',
          tone: 'violet',
        },
      ],
    },
  },
];

export const HOME_PAYROLL_ACCORDION: FaqEntry[] = [
  {
    question: 'Compliance on Autopilot',
    answer:
      'Stay 100% aligned with BIR, SSS, PhilHealth, Pag-IBIG, and DOLE rules. Updated contribution brackets, withholding tax tables, and the ₱90,000 bonus tax exemption ceiling are built right in.',
  },
  {
    question: '13th Month Pay? Covered. Government Reports? Clicks Away.',
    answer:
      'Calculate accurate 13th and 14th month pay—even for mid-year hires or resignations—and generate signed BIR Form 2316 PDFs, BIR Alphalist files, SSS R-3/R-5, PhilHealth, and Pag-IBIG schedules effortlessly.',
  },
  {
    question: 'Attendance, Overtime & Leaves: All Connected',
    answer:
      'Office biometric punches, field check-ins, local city holidays, approved leaves, overtime, and night differentials flow straight into payroll—zero manual CSV copying.',
  },
  {
    question: 'Payslips That Employees Actually Understand',
    answer:
      'Clean, confidential PDF payslips clearly itemize basic pay, overtime, allowances, government shares, taxes, and loan balances—accessible anytime on web or mobile.',
  },
  {
    question: 'Instant Bank, Maya & PayMongo Salary Payouts',
    answer:
      'Once you lock your payroll run, download ready-to-upload bank advice files or disburse net pay directly into employee digital wallets in moments.',
  },
  {
    question: 'Built for Every Philippine Pay Schedule',
    answer:
      'Whether your people are monthly, semi-monthly, weekly, daily-paid, or spread across multiple sister companies, gemX calculates every peso accurately.',
  },
];

export const HOME_GENERAL_FAQS: FaqEntry[] = [
  {
    question: 'How is gemX priced for growing Philippine businesses?',
    answer:
      'Plans are tailored around your active headcount and the modules your team needs today—so you never pay for bloated extras you won’t use. Request a demo for a clear, transparent quote.',
  },
  {
    question: 'Is gemX fully compliant with Philippine labor and tax rules?',
    answer:
      'Yes. gemX is built from the ground up for Philippine compliance—including BIR withholding tax and Form 2316, BIR Alphalist, SSS (including EC and WISP), PhilHealth, Pag-IBIG, 13th month pay, and DOLE holiday/overtime rates.',
  },
  {
    question: 'Can we manage multiple sister companies and branches in one account?',
    answer:
      'Absolutely. Holding groups and business owners can oversee multiple sister companies and regional branches from one hub, switch companies in one click, and keep each entity’s branding and records strictly separate.',
  },
  {
    question: 'How easy is it to move our current employee records from Excel?',
    answer:
      'Very smooth. gemX provides guided Excel upload templates with a clear preview step so your team can review employee 201 details, salaries, leave balances, and loans before saving.',
  },
  {
    question: 'Can field and branch employees clock in with location tracking?',
    answer:
      'Yes. You can define approved work locations for each branch or client site, allowing employees to clock in from their phones within the approved perimeter alongside live photo verification.',
  },
  {
    question: 'Does gemX include self-service for employees and line managers?',
    answer:
      'Yes—every employee and manager gets 24/7 web and mobile self-service to view payslips, check leave balances, file requests, and complete team approvals without chasing HR.',
  },
];

export const PRODUCT_PAGES: Record<string, ProductPageConfig> = {
  'core-hr': {
    slug: 'core-hr',
    navName: 'Core HR & 201 Files',
    navTagline: 'Complete employee records, org charts & smooth exits',
    badge: 'gemX Core HR',
    heroTitle: 'Turn Scattered Employee Folders Into',
    heroHighlight: 'Effortless Clarity.',
    heroDescription:
      'Give your HR team one organized, paperless home for 201 personnel records, company structures, onboarding checklists, and offboarding clearances.',
    heroBullets: [
      'Complete 18-section digital 201 employee profiles',
      'Captured digital signatures for BIR Form 2316 & official forms',
      'Live visual Organization Chart & searchable People Directory',
      'Structured exit clearances & automatic Final Pay calculation',
    ],
    heroPreview: {
      eyebrow: 'Core HR Hub',
      title: 'Employee Masterfile & Org Overview',
      highlightLabel: 'Paperless 201 Records',
      highlightValue: '100%',
      metrics: [
        { label: 'Profile Sections', value: '18 Tabs' },
        { label: 'Gov’t IDs Checked', value: '99.4%' },
      ],
      items: [
        {
          title: 'Personal, Family, Education & Work History',
          subtitle: 'Centralized in one clean, searchable profile',
          status: 'Organized',
          tone: 'mint',
        },
        {
          title: 'Government IDs & Captured Signature',
          subtitle: 'TIN, SSS, PhilHealth & Pag-IBIG verified once',
          status: 'Verified',
          tone: 'sky',
        },
        {
          title: 'Guided Bulk Excel Migration',
          subtitle: 'Preview & validate hundreds of staff records in minutes',
          status: 'Ready',
          tone: 'violet',
        },
      ],
    },
    sections: [
      {
        eyebrow: 'Digital 201 Masterfile',
        title: 'Every Employee Detail, Organized & Easy to Find',
        description:
          'Stop hunting through filing cabinets and old email attachments. gemX keeps personal details, compensation history, dependents, skills, visas, licenses, and documents neatly structured.',
        bullets: [
          '18 dedicated profile sections tailored for Philippine 201 files',
          'Built-in digital signature pad so tax certificates are signed cleanly',
          'Role-based privacy so sensitive salary data stays strictly confidential',
          'Version-tracked document library for contracts, memos, and policies',
        ],
        preview: {
          eyebrow: '201 Profile',
          title: 'Reyes, Maria Isabella · EMP-0419',
          highlightLabel: 'Record Status',
          highlightValue: 'Verified',
          metrics: [
            { label: 'Department', value: 'Finance' },
            { label: 'Location', value: 'Makati HQ' },
          ],
          items: [
            { title: 'Government Numbers & Tax Status', subtitle: 'TIN, SSS, PHIC & HDMF complete', status: 'Valid', tone: 'mint' },
            { title: 'Dependents & Emergency Contacts', subtitle: '3 dependents linked to HMO coverage', status: 'Synced', tone: 'sky' },
            { title: 'Digital Signature on File', subtitle: 'Ready for annual BIR Form 2316 signing', status: 'Saved', tone: 'violet' },
          ],
        },
      },
      {
        eyebrow: 'Structure & Connection',
        title: 'Visual Org Charts, Directory & Company Announcements',
        description:
          'Keep everyone connected as you grow across departments, ranks, divisions, and regional branches—with approval chains that update automatically whenever reporting lines change.',
        bullets: [
          'Interactive Organization Chart showing supervisor-to-team lines',
          'Searchable colleague directory filtered by branch or department',
          'Company-wide bulletin board for HR memos, townhalls, and news',
          'Quick-glance birthday and work anniversary highlights',
        ],
        preview: {
          eyebrow: 'Organization',
          title: 'Hierarchy & People Directory',
          highlightLabel: 'Departments',
          highlightValue: '12 Active',
          metrics: [
            { label: 'Branches', value: '18 Sites' },
            { label: 'Announcements', value: 'Live Feed' },
          ],
          items: [
            { title: 'Operations Division → Regional Branches', subtitle: 'Branch managers mapped automatically', status: 'Mapped', tone: 'mint' },
            { title: 'Quarterly Townhall & Holiday Advisory', subtitle: 'Published to employee dashboards', status: 'Pinned', tone: 'sky' },
            { title: 'Supervisor Approval Routing', subtitle: 'Leaves & OT follow live reporting lines', status: 'Active', tone: 'amber' },
          ],
        },
      },
      {
        eyebrow: 'Graceful Offboarding',
        title: 'Stress-Free Exit Clearances & On-Time Final Pay',
        description:
          'Close the employee journey respectfully and within DOLE’s 30-day guideline—coordinating every department’s sign-off while calculating prorated Final Pay automatically.',
        bullets: [
          'Simultaneous clearance routing across IT, Admin, Finance, Supervisor & HR',
          'Automatic Final Pay calculation (unpaid days, prorated 13th month, leave conversion & loans)',
          'Printable Clearance Certificates, Final Pay vouchers & separated Form 2316',
          'Structured exit interviews to uncover turnover insights',
        ],
        preview: {
          eyebrow: 'Offboarding',
          title: 'Clearance & Final Settlement',
          highlightLabel: 'Avg. Turnaround',
          highlightValue: '4 Days',
          metrics: [
            { label: 'Sign-Offs', value: '8 of 8 Done' },
            { label: 'Form 2316', value: 'Ready PDF' },
          ],
          items: [
            { title: 'IT & Equipment Return', subtitle: 'Company laptop & ID inspected and cleared', status: 'Cleared', tone: 'mint' },
            { title: 'Itemized Final Pay Voucher', subtitle: 'Prorated 13th month + unused leaves included', status: 'Computed', tone: 'sky' },
            { title: 'Account Access Closure', subtitle: 'Portal access closed cleanly on separation date', status: 'Scheduled', tone: 'violet' },
          ],
        },
      },
    ],
    faqs: [
      {
        question: 'Can we restrict who can view salary details inside employee 201 files?',
        answer:
          'Yes. You can tailor access permissions by role, department, and branch so team members only see the sections relevant to their responsibilities.',
      },
      {
        question: 'Does Final Pay automatically include prorated 13th month pay and remaining loans?',
        answer:
          'Yes. gemX automatically factors in unpaid worked days, prorated 13th month pay, convertible leave credits, remaining loan balances, and year-to-date tax adjustments.',
      },
      {
        question: 'Can we print clean employee clearances and Form 2316 certificates?',
        answer:
          'Every clearance form, Final Pay breakdown, and BIR Form 2316 downloads as a clean, print-ready PDF formatted with your company’s branding.',
      },
    ],
    nextSlug: 'payroll',
    nextLabel: 'Philippine Payroll & Compliance',
  },

  payroll: {
    slug: 'payroll',
    navName: 'Payroll & Compliance',
    navTagline: 'Philippine statutory payroll, loans & instant payouts',
    badge: 'gemX Payroll',
    heroTitle: 'Philippine Payroll That Runs in Minutes—',
    heroHighlight: 'Down to the Last Centavo.',
    heroDescription:
      'Say goodbye to late-night cutoff spreadsheets. gemX automates gross-to-net calculations, government deductions, employee loans, 13th month pay, and instant salary disbursements.',
    heroBullets: [
      'Built-in BIR, SSS, PhilHealth, Pag-IBIG & DOLE pay rules',
      'Automated loan deductions, 13th/14th month & tax annualization',
      'Ready-to-file BIR Alphalist & bulk-printable signed Form 2316',
      'One-click bank payroll files plus Maya & PayMongo wallet payouts',
    ],
    heroPreview: {
      eyebrow: 'Pay Run Overview',
      title: 'Semi-Monthly Payroll · Locked & Verified',
      highlightLabel: 'Statutory Accuracy',
      highlightValue: '100%',
      metrics: [
        { label: 'Pay Groups', value: '4 Active' },
        { label: 'Reports Ready', value: '40+ Formats' },
      ],
      items: [
        { title: 'Attendance, OT & Holiday Multipliers', subtitle: 'Pulled straight from verified time records', status: 'Synced', tone: 'mint' },
        { title: 'SSS, PhilHealth, Pag-IBIG & Tax', subtitle: 'Employee & employer shares balanced', status: 'Verified', tone: 'sky' },
        { title: 'Confidential Payslips & Bank Files', subtitle: 'Ready for payday release in one click', status: 'Ready', tone: 'violet' },
      ],
    },
    sections: [
      {
        eyebrow: '4-Step Cutoff Flow',
        title: 'From Attendance to Payslips Without Manual Copy-Pasting',
        description:
          'Because attendance, leaves, overtime, and allowances already live in gemX, running payroll becomes a calm review process rather than a scramble.',
        bullets: [
          'Supports monthly, semi-monthly, weekly, and daily-paid groups',
          'Flexible taxable, non-taxable de minimis, and retroactive pay items',
          'Side-by-side variance checks comparing current vs. previous cut-off',
          'One-click Payroll Period Lock so approved figures never change',
        ],
        preview: {
          eyebrow: 'Cutoff Steps',
          title: 'Gather → Calculate → Verify → Release',
          highlightLabel: 'Processing Time',
          highlightValue: 'Minutes',
          metrics: [
            { label: 'Variances', value: '0 Unresolved' },
            { label: 'Period Status', value: 'Locked' },
          ],
          items: [
            { title: 'Step 1 · Attendance & Leave Sync', subtitle: 'All approved OT & holidays included', status: 'Done', tone: 'mint' },
            { title: 'Step 2 · Gross-to-Net Calculation', subtitle: '1,250 employees computed smoothly', status: 'Done', tone: 'mint' },
            { title: 'Step 3 · Accounting Journal Export', subtitle: 'Cost-center breakdown ready for Finance', status: 'Ready', tone: 'sky' },
          ],
        },
      },
      {
        eyebrow: 'Philippine Government Reports',
        title: 'Every Monthly & Year-End Filing Ready in Clicks',
        description:
          'Whether it’s monthly remittance schedules or January tax season, gemX prepares clean, accurate files formatted for Philippine agencies.',
        bullets: [
          'BIR Form 1604-C Alphalist validation-ready submission files',
          'Bulk-printable & individual BIR Form 2316 PDFs with employee e-signatures',
          'SSS Contribution Lists, R-3, R-5, EC, and WISP schedules',
          'PhilHealth & Pag-IBIG contribution and loan remittance reports',
        ],
        preview: {
          eyebrow: 'Statutory Center',
          title: 'Government Remittance & Tax Pack',
          highlightLabel: 'Agencies Covered',
          highlightValue: 'BIR · SSS · PHIC · HDMF',
          metrics: [
            { label: 'Form 2316', value: 'Bulk Signed' },
            { label: 'Alphalist', value: 'Validated' },
          ],
          items: [
            { title: 'BIR Withholding & Year-End Annualization', subtitle: 'Exact tax refunds or payables calculated', status: 'Ready', tone: 'mint' },
            { title: 'SSS & Pag-IBIG Contribution Schedules', subtitle: 'Downloadable in clean PDF & Excel formats', status: 'Ready', tone: 'sky' },
            { title: 'PhilHealth Employer & Employee Split', subtitle: 'Balanced across all departments', status: 'Ready', tone: 'violet' },
          ],
        },
      },
      {
        eyebrow: 'Loans, Bonuses & Payouts',
        title: 'Automated Loan Ledgers, 13th Month & Instant Payouts',
        description:
          'Never miss a loan deduction or spend weeks computing December bonuses. Track every installment automatically and pay employees the way they prefer.',
        bullets: [
          'Tracks SSS Salary/Calamity, Pag-IBIG MPL, and company cash advances',
          'Pause, resume, or record manual loan payments with a clear balance ledger',
          'Dedicated 13th Month, 14th Month, and special December bonus runs',
          'Direct payouts to corporate bank files, Maya Business, or PayMongo wallets',
        ],
        preview: {
          eyebrow: 'Loans & Payouts',
          title: 'Amortization & Payday Release',
          highlightLabel: 'Active Loans',
          highlightValue: '94 Tracked',
          metrics: [
            { label: '13th Month', value: 'Auto-Pro-Rated' },
            { label: 'Payout Channels', value: 'Bank + Wallets' },
          ],
          items: [
            { title: 'SSS & Pag-IBIG Loan Deductions', subtitle: 'Deducted automatically every cut-off', status: 'Balanced', tone: 'mint' },
            { title: '13th Month Pay Generator', subtitle: 'Handles ₱90,000 tax-exempt ceiling automatically', status: 'Included', tone: 'sky' },
            { title: 'Instant Digital Wallet Disbursement', subtitle: 'Net salaries credited on time', status: 'Sent', tone: 'violet' },
          ],
        },
      },
    ],
    faqs: [
      {
        question: 'Can we deduct government contributions on either the 1st cut-off, 2nd cut-off, or split across both?',
        answer:
          'Yes. You have full flexibility to configure when SSS, PhilHealth, Pag-IBIG, and loans are deducted for each payroll group.',
      },
      {
        question: 'How does year-end tax annualization work in gemX?',
        answer:
          'With one run, gemX reconciles full-year taxable compensation, 13th month exemptions, and taxes withheld—calculating exact year-end tax refunds or payables and populating BIR Form 2316.',
      },
      {
        question: 'Can employees view their own loan balances and payslip history?',
        answer:
          'Yes. Employees can check their itemized PDF payslips and remaining loan balances anytime from their self-service portal.',
      },
    ],
    nextSlug: 'time-attendance',
    nextLabel: 'Time, Biometrics & Shifts',
  },

  'time-attendance': {
    slug: 'time-attendance',
    navName: 'Time & Attendance',
    navTagline: 'Biometrics, mobile clock-in, shifts & leave management',
    badge: 'gemX Time & Leave',
    heroTitle: 'Accurate Attendance Across Office, Field & Hybrid—',
    heroHighlight: 'Zero Manual DTRs.',
    heroDescription:
      'Connect office biometric clocks, mobile field check-ins, complex shift schedules, local holidays, and leave approvals directly to your payroll.',
    heroBullets: [
      'Automatic sync with office fingerprint & face-recognition clocks',
      'Location-verified mobile clock-in with live selfie photo',
      'Flexible shifts plus National & local City/Provincial holidays',
      'Online leave & overtime requests with real-time balance tracking',
    ],
    heroPreview: {
      eyebrow: 'Attendance Live View',
      title: 'Today’s Workforce Presence',
      highlightLabel: 'DTR Accuracy',
      highlightValue: '99.8%',
      metrics: [
        { label: 'Connected Clocks', value: '24 Devices' },
        { label: 'Field Check-Ins', value: 'Verified' },
      ],
      items: [
        { title: 'Head Office Biometric Terminals', subtitle: 'Logs appear automatically—no USB exports', status: 'Connected', tone: 'mint' },
        { title: 'Regional Field Staff Check-In', subtitle: 'Within 50m of approved site + live photo', status: 'Verified', tone: 'sky' },
        { title: 'Missing Time-Out Early Alert', subtitle: 'Automatic reminder sent before cut-off', status: 'Flagged', tone: 'amber' },
      ],
    },
    sections: [
      {
        eyebrow: 'Biometrics & Mobile Check-In',
        title: 'Every Clock-In Verified, Wherever Work Happens',
        description:
          'Eliminate USB flash drives, manual attendance encoding, and buddy-punching. Office clocks sync automatically while field teams check in safely from their phones.',
        bullets: [
          'Direct automatic sync from office fingerprint and face clocks',
          'Approved branch location perimeters for mobile and web check-ins',
          'Live camera snapshot on clock-in and clock-out for field peace of mind',
          'Instant visibility into who is present, late, on leave, or remote',
        ],
        preview: {
          eyebrow: 'Clocking Channels',
          title: 'Unified Daily Time Record',
          highlightLabel: 'Manual Uploads',
          highlightValue: 'Zero',
          metrics: [
            { label: 'Office Sync', value: 'Automatic' },
            { label: 'Mobile Radius', value: 'Enforced' },
          ],
          items: [
            { title: 'BGC Turnstile #01', subtitle: '8:47 AM · Fingerprint verified', status: 'Logged', tone: 'mint' },
            { title: 'Davao Branch Mobile Check-In', subtitle: '8:52 AM · Location & photo verified', status: 'Logged', tone: 'sky' },
            { title: 'Work-From-Home Check-In', subtitle: '8:58 AM · Remote shift active', status: 'Logged', tone: 'violet' },
          ],
        },
      },
      {
        eyebrow: 'Shifts, OT & Holidays',
        title: 'Smart Rosters & Branch-Specific Philippine Holidays',
        description:
          'A local charter day in Cebu shouldn’t apply holiday pay to Makati—and gemX knows the difference automatically.',
        bullets: [
          'Support regular, shifting, staggered, and rest-day schedules',
          'Separate National Holiday and Provincial/City holiday calendars per branch',
          'Automatic computation of tardiness, undertime, overtime & night differential',
          'Early discrepancy alerts when an employee forgets to time out',
        ],
        preview: {
          eyebrow: 'Schedules & Rules',
          title: 'Shift & Holiday Pay Engine',
          highlightLabel: 'Local Holidays',
          highlightValue: 'Branch-Aware',
          metrics: [
            { label: 'Night Diff', value: 'Auto-Computed' },
            { label: 'OT Rules', value: 'DOLE-Aligned' },
          ],
          items: [
            { title: 'National Regular Holiday', subtitle: 'Applied across all Philippine branches', status: '200% Rate', tone: 'mint' },
            { title: 'Cebu Charter Day (Local)', subtitle: 'Applied only to Cebu branch employees', status: 'Scoped', tone: 'sky' },
            { title: 'Approved Overtime & Night Shift', subtitle: 'Synced straight to timesheet totals', status: 'Computed', tone: 'violet' },
          ],
        },
      },
      {
        eyebrow: 'Leave Management',
        title: 'Hassle-Free Leaves, Accruals & Supervisor Approvals',
        description:
          'Employees check their exact leave balances before applying, managers approve in one tap, and payroll receives approved paid or unpaid leaves automatically.',
        bullets: [
          'Configure Vacation, Sick, SIL, Maternity, Paternity & custom leave types',
          'Automate monthly or annual leave accruals, cash conversion & carry-over',
          'Multi-level approval workflows tailored to your reporting hierarchy',
          'Online time-adjustment requests with full audit history',
        ],
        preview: {
          eyebrow: 'Leave Center',
          title: 'Balances, Requests & Carry-Over',
          highlightLabel: 'Approval Speed',
          highlightValue: 'Same Day',
          metrics: [
            { label: 'VL / SL Accrual', value: 'Automatic' },
            { label: 'Carry-Over', value: 'Configured' },
          ],
          items: [
            { title: 'Vacation Leave · 2 Days Requested', subtitle: 'Remaining balance: 9.5 days · Approved by Manager', status: 'Approved', tone: 'mint' },
            { title: 'Time Adjustment · Client Meeting', subtitle: 'Supporting note attached & verified', status: 'Approved', tone: 'sky' },
            { title: 'Year-End SIL Leave Conversion', subtitle: 'Unused credits ready for cash conversion', status: 'Ready', tone: 'amber' },
          ],
        },
      },
    ],
    faqs: [
      {
        question: 'Do we still need to download attendance logs via USB flash drive?',
        answer:
          'No! Compatible office biometric clocks send employee time-ins and time-outs straight into gemX automatically throughout the day.',
      },
      {
        question: 'Can different branches observe different local city or provincial holidays?',
        answer:
          'Yes. You can tag holidays as National or assign local holidays to specific provinces and cities so holiday pay only applies to the right branches.',
      },
      {
        question: 'What happens if an employee forgets to clock out?',
        answer:
          'gemX flags missing logs automatically and notifies the employee so they can submit a supervisor-approved time adjustment well before cut-off.',
      },
    ],
    nextSlug: 'recruitment',
    nextLabel: 'Recruitment & Onboarding',
  },

  recruitment: {
    slug: 'recruitment',
    navName: 'Recruitment & Onboarding',
    navTagline: 'Branded career pages, applicant pipeline & Day-1 readiness',
    badge: 'gemX Talent Acquisition',
    heroTitle: 'Hire Smarter, Impress Candidates &',
    heroHighlight: 'Eliminate Day-One Paperwork.',
    heroDescription:
      'Manage job requisitions, publish branded career pages, score interviews consistently, and turn accepted offers into active 201 employee profiles in one click.',
    heroBullets: [
      'Company-branded public Careers Page & website job embeds',
      'Structured job requisitions with headcount & budget sign-off',
      'Visual stage-by-stage candidate pipeline & interview scorecards',
      'One-click conversion from hired candidate to 201 employee file',
    ],
    heroPreview: {
      eyebrow: 'Hiring Pipeline',
      title: 'Vacancies, Candidates & Offers',
      highlightLabel: 'Re-Encoding Needed',
      highlightValue: 'None',
      metrics: [
        { label: 'Open Vacancies', value: '14 Roles' },
        { label: 'Offer Rate', value: '92% Accepted' },
      ],
      items: [
        { title: 'Branded Company Careers Portal', subtitle: 'Shows only your company’s open positions & brand', status: 'Live', tone: 'mint' },
        { title: 'Structured Panel Scorecards', subtitle: 'All interviewer ratings & notes in one view', status: 'Scored', tone: 'sky' },
        { title: 'Convert to Employee + Start Onboarding', subtitle: 'Creates 201 profile & sends welcome email', status: '1 Click', tone: 'violet' },
      ],
    },
    sections: [
      {
        eyebrow: 'Branded Careers & Requisitions',
        title: 'Align on Headcount First, Then Attract the Best Talent',
        description:
          'Keep Finance, Department Heads, and Recruitment aligned on approved openings—and showcase your employer brand on a clean, dedicated careers portal.',
        bullets: [
          'Track department requisitions, target start dates, and salary ranges',
          'Dedicated public careers page styled with your company’s logo and colors',
          'Embeddable job board widget for your existing corporate website',
          'Strict separation so sister companies never mix job postings',
        ],
        preview: {
          eyebrow: 'Careers Portal',
          title: 'Approved Openings & Applications',
          highlightLabel: 'Employer Brand',
          highlightValue: 'Customized',
          metrics: [
            { label: 'Active Posts', value: '14 Live' },
            { label: 'New Resumes', value: '46 This Week' },
          ],
          items: [
            { title: 'Senior Payroll Specialist · Makati HQ', subtitle: 'Budget approved · 18 applicants in review', status: 'Open', tone: 'mint' },
            { title: 'Store Operations Supervisor · Cebu', subtitle: 'Published on Retail Subsidiary Careers Page', status: 'Open', tone: 'sky' },
            { title: 'Built-In Resume Viewer', subtitle: 'Review CVs right inside the candidate card', status: 'Included', tone: 'violet' },
          ],
        },
      },
      {
        eyebrow: 'Selection & Hiring',
        title: 'Visual Pipelines, Scorecards & One-Click Onboarding',
        description:
          'Move candidates from Screening to Offer with structured panel feedback—and welcome new joiners with organized Day-One checklists.',
        bullets: [
          'Clear visual pipeline across Screening, Interview, Offer, and Hired',
          'Panel interview scheduling with structured rating scorecards',
          'Formal offer preparation tied to your approved ranks and pay bands',
          'Reusable onboarding task checklists across HR, IT, and Managers',
        ],
        preview: {
          eyebrow: 'Selection to Day 1',
          title: 'Offer & Onboarding Handoff',
          highlightLabel: 'Day-1 Readiness',
          highlightValue: '100%',
          metrics: [
            { label: 'Panel Score', value: '4.9 / 5.0' },
            { label: 'Onboarding Tasks', value: '12 Assigned' },
          ],
          items: [
            { title: 'Job Offer Accepted · Andrea Reyes', subtitle: 'Converted to Employee #0428 in one click', status: 'Hired', tone: 'mint' },
            { title: 'IT Laptop & Email Setup Task', subtitle: 'Assigned automatically before start date', status: 'In Progress', tone: 'sky' },
            { title: 'Government ID & Contract Checklist', subtitle: 'New hire notified via welcome email', status: 'Sent', tone: 'amber' },
          ],
        },
      },
    ],
    faqs: [
      {
        question: 'If we have multiple sister companies, does each company get its own Careers Page?',
        answer:
          'Yes! Each company in your group gets its own branded careers link showing only that specific company’s name, logo, and job openings.',
      },
      {
        question: 'Do we have to re-type a candidate’s information once they accept our offer?',
        answer:
          'Never. Clicking Convert to Employee carries their profile straight into Core HR & 201 Records and triggers their portal invitation.',
      },
    ],
    nextSlug: 'talent-learning',
    nextLabel: 'Performance, Goals & Learning',
  },

  'talent-learning': {
    slug: 'talent-learning',
    navName: 'Performance & Learning',
    navTagline: 'Goals, 360° appraisals, merit planning & online courses',
    badge: 'gemX Talent & Academy',
    heroTitle: 'Align Goals, Reward Great Work &',
    heroHighlight: 'Grow Future Leaders.',
    heroDescription:
      'Replace dreaded annual paper appraisals with continuous goal tracking, fair 360-degree reviews, leadership calibration, merit matrices, and engaging online courses.',
    heroBullets: [
      'Cascading company, department, and individual goals & OKRs',
      'Self, Manager, and 360° peer appraisals plus 1-on-1 check-ins',
      'Fair cross-team calibration, merit salary planning & IDPs/PIPs',
      'Built-in online learning courses, quizzes, leaderboards & certificates',
    ],
    heroPreview: {
      eyebrow: 'Performance & Academy',
      title: 'Goals, Calibration & Upskilling',
      highlightLabel: 'Goal Alignment',
      highlightValue: '94.2%',
      metrics: [
        { label: '360° Reviews', value: '97.5% Done' },
        { label: 'Certificates', value: 'Auto-Issued' },
      ],
      items: [
        { title: 'Annual Appraisal & Calibration', subtitle: 'Linked cleanly to merit increase recommendations', status: 'Calibrated', tone: 'mint' },
        { title: 'Individual Development Plans (IDPs)', subtitle: 'Preparing high-potential staff for leadership', status: 'On Track', tone: 'sky' },
        { title: 'Interactive Online Academy', subtitle: 'Self-paced lessons, quizzes & printable certificates', status: 'Active', tone: 'violet' },
      ],
    },
    sections: [
      {
        eyebrow: 'Performance & Merit',
        title: 'Fair, Transparent Appraisals Connected to Career Growth',
        description:
          'Help every team member understand what success looks like, gather well-rounded feedback, and make data-backed promotion and merit decisions.',
        bullets: [
          'Track measurable Key Results and competencies throughout the year',
          'Combine self-assessments, manager reviews, 360° feedback & 1-on-1 logs',
          'Calibrate ratings across departments to eliminate bias',
          'Support growth with IDPs, structured PIPs, and printable appraisal PDFs',
        ],
        preview: {
          eyebrow: 'Appraisal Cycle',
          title: 'Calibration & Merit Matrix',
          highlightLabel: 'Fairness Check',
          highlightValue: 'Calibrated',
          metrics: [
            { label: 'Talent Pool', value: '36 Ready' },
            { label: '1-on-1 Logs', value: 'Continuous' },
          ],
          items: [
            { title: 'Exceeds Expectations · Top Tier', subtitle: 'Matched to approved merit increase band', status: 'Reviewed', tone: 'mint' },
            { title: 'Succession & Leadership Pool', subtitle: 'Development milestones tracked quarterly', status: 'Active', tone: 'sky' },
            { title: 'Printable Performance Summary', subtitle: 'Clean PDF ready for coaching sign-off', status: 'Ready', tone: 'violet' },
          ],
        },
      },
      {
        eyebrow: 'Learning & Compliance',
        title: 'An Engaging Learning Hub Right Inside gemX',
        description:
          'From mandatory Data Privacy and Safety refreshers to leadership academies, upskill employees without paying for a separate learning platform.',
        bullets: [
          'Deliver interactive online courses, multi-step learning paths & quizzes',
          'Schedule classroom or virtual workshops and log external certifications',
          'Keep mandatory compliance training at 100% with audit-ready PDF reports',
          'Motivate learners with points, leaderboards, communities & certificates',
        ],
        preview: {
          eyebrow: 'Learning Hub',
          title: 'Courses, Paths & Certificates',
          highlightLabel: 'Compliance Rate',
          highlightValue: '99.1%',
          metrics: [
            { label: 'Learning Paths', value: '18 Curated' },
            { label: 'Completion Certs', value: 'Instant PDF' },
          ],
          items: [
            { title: 'Workplace Safety & Data Privacy', subtitle: 'Quiz passed (96%) · Certificate issued', status: 'Certified', tone: 'mint' },
            { title: 'First-Time Supervisor Academy', subtitle: '5 courses · Gamification points awarded', status: 'In Progress', tone: 'sky' },
            { title: 'Training Compliance Audit Report', subtitle: 'Ready for management & regulatory review', status: 'Export PDF', tone: 'amber' },
          ],
        },
      },
    ],
    faqs: [
      {
        question: 'Can we run both probation reviews and annual 360-degree appraisals?',
        answer:
          'Yes. You can run flexible review cycles—probationary evaluations, semi-annual check-ins, or full 360-degree leadership reviews.',
      },
      {
        question: 'Do employees automatically receive a certificate when they finish a course?',
        answer:
          'Yes! Upon completing a course and passing its assessment, employees can immediately download their printable PDF certificate.',
      },
    ],
    nextSlug: 'benefits-assets',
    nextLabel: 'Benefits, Assets & Relations',
  },

  'benefits-assets': {
    slug: 'benefits-assets',
    navName: 'Benefits, Assets & Relations',
    navTagline: 'HMO LOAs, company equipment & Philippine due process',
    badge: 'gemX Care & Governance',
    heroTitle: 'Support Employee Well-Being, Protect Assets &',
    heroHighlight: 'Uphold Fair Due Process.',
    heroDescription:
      'Manage HMO health plans and printable hospital LOAs, track every laptop and tool with QR labels, and handle workplace relations in full alignment with Philippine labor standards.',
    heroBullets: [
      'HMO enrollment, dependent coverage & printable Hospital LOA PDFs',
      'Company laptop, vehicle & kit tracking with printable QR sticker labels',
      'Signed equipment handover, maintenance & return accountability forms',
      'Confidential DOLE twin-notice NTE, hearing & printable Case Folder PDFs',
    ],
    heroPreview: {
      eyebrow: 'Care & Governance',
      title: 'HMO, Equipment & Workplace Cases',
      highlightLabel: 'Accountability',
      highlightValue: '100% Logged',
      metrics: [
        { label: 'Covered Lives', value: '2,140 HMO' },
        { label: 'QR-Tagged Items', value: '1,680 Assets' },
      ],
      items: [
        { title: 'Printable Hospital LOA PDF', subtitle: 'Issued cleanly for employee clinic visit', status: 'Approved', tone: 'mint' },
        { title: 'Laptop + Accessories Bundle', subtitle: 'QR label printed & accountability receipt signed', status: 'Assigned', tone: 'sky' },
        { title: 'Twin-Notice Case Documentation', subtitle: 'NTE, explanation & hearing minutes compiled', status: 'Audit-Ready', tone: 'violet' },
      ],
    },
    sections: [
      {
        eyebrow: 'Health & Flexible Perks',
        title: 'Frictionless HMO Administration & Instant Hospital LOAs',
        description:
          'Make health coverage simple during moments when employees and their families need care most—while keeping monthly provider billing accurate.',
        bullets: [
          'Configure HMO providers, plan tiers, executive perks & open enrollment',
          'Update dependent coverage smoothly during marriage or newborn life events',
          'Process reimbursement claims and print clean Hospital LOA PDFs',
          'Reconcile monthly HMO carrier invoices against active headcount',
        ],
        preview: {
          eyebrow: 'Benefits Center',
          title: 'HMO Plans, Dependents & LOAs',
          highlightLabel: 'Billing Match',
          highlightValue: 'Reconciled',
          metrics: [
            { label: 'Active Plans', value: '4 Tiers' },
            { label: 'LOA Turnaround', value: 'Minutes' },
          ],
          items: [
            { title: 'Outpatient Hospital LOA #8812', subtitle: 'Downloadable PDF sent to employee portal', status: 'Issued', tone: 'mint' },
            { title: 'Qualified Dependent Enrollment', subtitle: 'Synced with employee 201 family record', status: 'Active', tone: 'sky' },
            { title: 'Monthly Carrier Invoice Check', subtitle: 'Resigned staff flagged automatically', status: 'Verified', tone: 'amber' },
          ],
        },
      },
      {
        eyebrow: 'Company Equipment',
        title: 'Know Who Holds Every Laptop, Vehicle & Tool',
        description:
          'From Day-One laptop issuance to preventive maintenance and exit clearance return, keep 100% visibility over company property.',
        bullets: [
          'Group parent items and accessories into bundled kits (e.g., Laptop + Charger + Monitor)',
          'Print durable QR code sticker labels for fast physical audits',
          'Generate printable Issuance and Return receipts for employee signature',
          'Track equipment condition, repair logs, and active warranties',
        ],
        preview: {
          eyebrow: 'Asset Registry',
          title: 'QR Tags & Handover Receipts',
          highlightLabel: 'Unaccounted Items',
          highlightValue: 'Zero',
          metrics: [
            { label: 'QR Labels', value: 'Print-Ready' },
            { label: 'Exit Link', value: 'Automatic' },
          ],
          items: [
            { title: 'MacBook Pro 16" Workstation Bundle', subtitle: 'Assigned to A. Reyes · Handover PDF signed', status: 'Active', tone: 'mint' },
            { title: 'Printable QR Sticker Sheet', subtitle: 'Scannable labels generated offline as PDF', status: 'Ready', tone: 'sky' },
            { title: 'Scheduled Fleet Maintenance', subtitle: 'Service logged · Condition: Excellent', status: 'Up to Date', tone: 'violet' },
          ],
        },
      },
      {
        eyebrow: 'Employee Relations',
        title: 'Fair, Confidential DOLE Twin-Notice Case Management',
        description:
          'Handle grievances, incident reports, Notices to Explain (NTEs), and administrative hearings with complete consistency and legal-ready documentation.',
        bullets: [
          'Restricted, confidential intake for workplace grievances and incidents',
          'Issue formal Notices to Explain (NTEs) and log written replies online',
          'Schedule administrative hearings with printable Hearing Notice PDFs',
          'Export the complete timeline into a single printable Case Folder PDF',
        ],
        preview: {
          eyebrow: 'Workplace Relations',
          title: 'Due-Process Timeline & Dossier',
          highlightLabel: '5-Day NTE Rule',
          highlightValue: 'Tracked',
          metrics: [
            { label: 'Confidentiality', value: 'Strict Role Access' },
            { label: 'Case Folder', value: '1-Click PDF' },
          ],
          items: [
            { title: 'Notice to Explain (NTE) Issued', subtitle: '5-day explanation window tracked clearly', status: 'Logged', tone: 'mint' },
            { title: 'Administrative Hearing Notice', subtitle: 'Official printable invitation & minutes saved', status: 'Recorded', tone: 'sky' },
            { title: 'Complete Case Folder PDF', subtitle: 'Incidents, exhibits & resolution in one file', status: 'Ready', tone: 'violet' },
          ],
        },
      },
    ],
    faqs: [
      {
        question: 'Do assigned laptops and tools appear automatically when an employee resigns?',
        answer:
          'Yes. Any company asset assigned to an employee is automatically surfaced during exit clearance so nothing is overlooked before Final Pay.',
      },
      {
        question: 'Who can see Employee Relations and disciplinary records?',
        answer:
          'Only explicitly authorized Employee Relations / HR leaders can access workplace cases, keeping sensitive matters strictly confidential.',
      },
    ],
    nextSlug: 'core-hr',
    nextLabel: 'Core HR & 201 Files',
  },
};

export const WEB_SELF_SERVICE_FAQS: FaqEntry[] = [
  {
    question: 'Do employees need to install anything to use the Web Self-Service Portal?',
    answer:
      'No. Employees, supervisors, and time keepers sign in from any modern desktop, laptop, or tablet browser at your company’s gemX Hub URL—complete with Passkey and optional two-step verification.',
  },
  {
    question: 'What can line managers and designated Time Keepers do inside the Web Portal?',
    answer:
      'Line managers get the My Team hub to monitor live team attendance and approve leaves, overtime, cash advances, and time adjustments with supervisor remarks. Designated Time Keepers get a dedicated verification grid to reconcile biometric logs, shift schedules, rest days, and local holidays before payroll lock.',
  },
  {
    question: 'Can employees download official PDF payslips and BIR Form 2316 directly from the browser?',
    answer:
      'Yes. Itemized semi-monthly or monthly PDF payslips, 13th month statements, loan ledgers, and digitally signed BIR Form 2316 certificates are available 24/7 for immediate viewing and printing.',
  },
  {
    question: 'How does the Web Portal protect sensitive salary data across departments and sister companies?',
    answer:
      'Every sidebar module is governed by granular role-based ACL permissions and strict multi-tenant company isolation—ensuring employees only ever see their own confidential records and each sister company maintains separate branding and data.',
  },
];

export const MOBILE_SELF_SERVICE_FAQS: FaqEntry[] = [
  {
    question: 'How do employees set up and connect the gemX Mobile App on iOS and Android?',
    answer:
      'Employees simply download the app and scan their personalized setup QR code inside the Web Portal’s Desktop & Mobile Apps Hub—automatically configuring their company server URL, username, and tenant brand theme in seconds.',
  },
  {
    question: 'How does the Mobile App prevent buddy-punching or fake GPS attendance?',
    answer:
      'The 8-mode Punch Clock validates live GPS coordinates against approved branch geofence radii and captures a live front-camera verification selfie stamped onto each attendance log.',
  },
  {
    question: 'Can employees cash out their salary payouts directly from the gemX Mobile App?',
    answer:
      'Yes. When Digital Wallet payouts are enabled, employees can check their available PHP balance, review transparent transfer fees, and cash out directly to Maya, PayMongo, or linked bank accounts.',
  },
  {
    question: 'What happens if an employee loses their phone or resigns from the company?',
    answer:
      'Sign-in is protected by device biometrics—Face ID or Fingerprint Passkeys—paired with encrypted JWT sessions. HR can revoke device access immediately or automatically upon exit clearance.',
  },
];
