# gemX — Multi-Page Philippines HRIS & Payroll Website (`ulthra-website`)

A clean, spacious, space-themed multi-page website for **gemX**, modeled after the clarity and page structure of [PeoplesHR Philippines](https://peopleshr.com/philippines-hris) and written 100% in natural HR and business language.

## Pages & Routes

- `/` — **Philippines All-in-One HRIS Home** (Hero + Demo Form, *Problems We Fix*, 6-Tab Module Overview, Statutory Compliance Strip, Payroll Rules Accordion, *HR in Your Pocket*, and General FAQs)
- **Dedicated Product Module Pages**:
  - `/products/core-hr` — Core HR, Digital 201 Files, Org Chart & Exit Clearances
  - `/products/payroll` — Philippine Payroll, Loans, 13th Month & Statutory Filings
  - `/products/time-attendance` — Biometric Clocks, Mobile Check-Ins, Shifts, Holidays & Leaves
  - `/products/recruitment` — Job Requisitions, Branded Careers Page & Onboarding
  - `/products/talent-learning` — Goals, 360° Appraisals, Calibration, Merit & Online Courses
  - `/products/benefits-assets` — HMO LOAs, Company Equipment QR Labels & Employee Relations
- **Dedicated Special Feature & Tool Pages**:
  - `/features/multi-company` — Multi-Company Holding Groups, Branches & Live Brand Theme Previewer
  - `/features/self-service` — Employee, Manager & HR Leader Web/Mobile Self-Service
  - `/features/workpulse` — WorkPulse Hybrid & Remote Team Insights
  - `/features/salary-payouts` — Instant Bank, Maya & PayMongo Salary Payouts
  - `/roi-calculator` — Interactive HR & Payroll Time-Savings Calculator
  - `/request-demo` — Dedicated Personalized Demo Booking Page

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Docker & Server Deployment

To deploy in Docker (matching the `ulthra-mezzio` workflow):

```bash
# Local / Staging Docker container (http://localhost:8383)
docker compose up -d --build

# Production Server deployment (uses docker-compose.server.yml)
./deploy.sh
```

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the complete production deployment guide, reverse-proxy setup (`./docker/setup-nginx-proxy.sh`), and smoke tests.
