export interface MockupPreview {
  eyebrow: string;
  title: string;
  highlightLabel: string;
  highlightValue: string;
  metrics: readonly { label: string; value: string }[];
  items: readonly { title: string; subtitle: string; status: string; tone: 'mint' | 'sky' | 'violet' | 'amber' }[];
}

export interface FaqEntry {
  question: string;
  answer: string;
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
