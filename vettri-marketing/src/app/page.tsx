import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";
import { plans } from "@/data/pricing";
import { FAQ } from "@/components/site/Faq";
import { SUPPORT_EMAIL } from "@/components/site/SiteFooter";
import { VettriLogo } from "@/components/brand/VettriLogo";
import PunchDemo from "@/components/home/PunchDemo";
import HomeMotion from "@/components/home/HomeMotion";
import "./home.css";

export const metadata: Metadata = createPageMetadata({
  title: "Vettri HRMS: HR and IT management in one platform",
  description: "Manage employees, attendance, leave, payroll and hiring, plus every company laptop: device inventory, live status, software deployment and remote support. Start a free trial.",
  path: "/",
  imageAlt: "Vettri HRMS dashboard",
});

const plan = plans[0];
const perMonthYearly = Math.round((plan.priceAnnual ?? 0) / 12);
const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

const ROWS = [
  {
    title: "Employees and their documents",
    copy: "One profile for every person: job, reporting line, documents, bank and statutory details, and history. Employees update their own details and HR approves the change.",
    src: "/product/employees.webp",
    alt: "The employee directory in Vettri, with departments, designations and status",
    size: "m",
  },
  {
    title: "Leave without the email chain",
    copy: "Employees apply from their phone, managers approve in one click, and balances and the holiday calendar keep themselves up to date.",
    src: "/product/leave.webp",
    alt: "Leave requests waiting for approval in Vettri",
    size: "l",
  },
  {
    title: "Payroll with PF, ESI and PT",
    copy: "Salary structures, monthly payroll runs and payslips, with PF, ESI, professional tax and TDS worked out on every run.",
    src: "/product/payslip.webp",
    alt: "A Vettri payslip with earnings, PF, ESI and professional tax deductions",
    size: "s",
  },
  {
    title: "Hiring to the first day",
    copy: "Publish jobs on your careers page, move candidates through each stage, send offer letters and hand the new joiner straight to onboarding.",
    src: "/product/pipeline.webp",
    alt: "The candidate pipeline in Vettri with interview stages",
    size: "m",
  },
  {
    title: "Every company laptop",
    copy: "Enrolled Windows laptops report their hardware, software and live status. Push approved software silently and help people with a remote session.",
    src: "/product/it-devices.webp",
    alt: "Monitored company laptops in Vettri with their employee, status and Windows version",
    size: "l",
  },
];

const STAGES = [
  { time: "Two minutes", text: "First, sign up with a ₹1 card check.", grow: 12 },
  { time: "An afternoon", text: "Then import your employees from Excel.", grow: 22 },
  { time: "About a day", text: "Next, connect biometric machines and laptops.", grow: 28 },
  { time: "Month end", text: "Finally, run your first payroll.", grow: 38 },
];

const PAYROLL_LINES = [
  { item: "Provident fund and ESI", what: "Worked out from each salary structure on every payroll run", where: "Payslip" },
  { item: "Professional tax", what: "Deducted by state, every month", where: "Payslip" },
  { item: "Income tax (TDS)", what: "Old or new regime, from each employee's own tax declaration", where: "Payslip, Form 16 data" },
  { item: "Labour welfare fund", what: "State rules applied, with the return file prepared for you", where: "Payroll settings" },
  { item: "Statutory bonus", what: "Bonus runs under the Payment of Bonus Act, paid with salary", where: "Bonus runs" },
  { item: "Salary revisions", what: "Back-dated raises with arrears paid in the next payroll", where: "Salary revisions" },
  { item: "Loans and advances", what: "Monthly instalments recovered through payroll", where: "Payslip" },
  { item: "Bank transfer", what: "Salary file ready to upload to your bank", where: "Payroll run" },
  { item: "Full and final", what: "Settlement with pending recoveries when someone leaves", where: "Exits" },
];

const STRIP = [
  { src: "/product/executive.webp", alt: "The executive dashboard with headcount and attrition figures" },
  { src: "/product/org.webp", alt: "The organisation chart in Vettri" },
  { src: "/product/it-monitoring.webp", alt: "Live laptop activity in Vettri" },
];

export default function HomePage() {
  const [emailUser, emailDomain] = SUPPORT_EMAIL.split("@");
  return (
    <div className="h-page">
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      <HomeMotion />

      <header className="h-top">
        <Link href="/" className="h-top__brand" aria-label="Vettri HRMS home">
          <VettriLogo variant="mark" size="sm" alt="" /> Vettri HRMS
        </Link>
        <nav className="h-top__links" aria-label="Main">
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <Link href="/security">Security</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="h-top__actions">
          <a href={`${APP_URL}/login`} className="h-link">Sign in</a>
          <a href={`${APP_URL}/signup`} className="h-btn h-btn--sm">Start free trial</a>
        </div>
        <details className="h-top__menu">
          <summary>Menu</summary>
          <div>
            <a href="#product">Product</a>
            <a href="#pricing">Pricing</a>
            <Link href="/security">Security</Link>
            <Link href="/contact">Contact</Link>
            <a href={`${APP_URL}/login`}>Sign in</a>
          </div>
        </details>
      </header>

      <main id="main-content">
        <section className="h-hero" aria-labelledby="h-title">
          <div className="h-hero__mast">
            <Image src="/product/dashboard.webp" alt="The Vettri dashboard: headcount, people on leave and pending approvals" width={2720} height={1700} priority sizes="(max-width: 700px) 100vw, 50vw" />
            <Image src="/product/leave.webp" alt="Leave approvals in Vettri" width={2720} height={1700} priority sizes="(max-width: 700px) 50vw, 25vw" />
            <Image src="/product/it-devices.webp" alt="Company laptops listed with their employee and live status" width={2720} height={1700} priority sizes="(max-width: 700px) 50vw, 25vw" />
          </div>
          <div className="h-hero__body">
            <h1 id="h-title" className="h-hero__title lines">
              <span className="line"><span data-line style={{ "--i": 0 } as React.CSSProperties}>HR and laptops,</span></span>
              <span className="line"><span data-line style={{ "--i": 1 } as React.CSSProperties}>in one app.</span></span>
            </h1>
            <div className="h-hero__side">
              <p>Vettri HRMS runs attendance, leave, payroll and hiring for Indian companies, and manages the laptops your team works on.</p>
              <div className="h-hero__actions">
                <a href={`${APP_URL}/signup`} className="h-btn">Start free trial</a>
                <Link href="/contact" className="h-link">Book a demo</Link>
              </div>
              <p className="h-hero__fine">{inr(plan.priceMonthly ?? 0)} per employee a month. Every feature included.</p>
            </div>
          </div>
        </section>

        <div id="product" />
        <PunchDemo />

        <section className="h-rows" aria-labelledby="h-rows-title">
          <h2 id="h-rows-title" className="h-head h-axis" data-enter>One record for each person</h2>
          {ROWS.map((row) => (
            <article key={row.title} className="h-row">
              <div className="h-row__text" data-enter>
                <h3 className="h-row__title">{row.title}</h3>
                <p>{row.copy}</p>
              </div>
              <figure className={`h-row__pic h-row__pic--${row.size}`} data-enter style={{ "--d": "90ms" } as React.CSSProperties}>
                <Image src={row.src} alt={row.alt} width={2720} height={1700} loading="lazy" sizes="(max-width: 700px) 100vw, 30vw" />
              </figure>
            </article>
          ))}
        </section>

        <section className="h-stages" aria-labelledby="h-stages-title">
          <h2 id="h-stages-title" className="h-head" data-enter>From sign-up to payroll</h2>
          <ol className="h-bar" data-ui>
            {STAGES.map((s, i) => (
              <li key={s.time} className={`h-bar__seg h-bar__seg--${i}`} style={{ flexGrow: s.grow } as React.CSSProperties} data-enter>
                <strong>{s.time}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="h-pay" aria-labelledby="h-pay-title">
          <h2 id="h-pay-title" className="h-head h-pay__head" data-enter>
            <span>Indian payroll,</span>
            <span className="h-pay__step">line by line</span>
          </h2>
          <table className="h-pay__table" data-enter>
            <caption className="visually-hidden">What Vettri handles in each payroll run</caption>
            <thead>
              <tr><th scope="col">Item</th><th scope="col">What Vettri does</th><th scope="col">Where you see it</th></tr>
            </thead>
            <tbody>
              {PAYROLL_LINES.map((l) => (
                <tr key={l.item}><th scope="row">{l.item}</th><td>{l.what}</td><td>{l.where}</td></tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="pricing" className="h-price" aria-label="Pricing">
          <div className="h-price__plan h-price__plan--month" data-enter>
            <h2 className="h-price__name">Monthly</h2>
            <p className="h-price__who">Pay month by month and stop whenever you like.</p>
            <div className="h-price__foot">
              <p className="h-price__amount">{inr(plan.priceMonthly ?? 0)}<span> per employee a month</span></p>
              <a href={`${APP_URL}/signup`} className="h-btn h-btn--on-paper">Start free trial</a>
            </div>
          </div>
          <div className="h-price__plan h-price__plan--year" data-enter style={{ "--d": "90ms" } as React.CSSProperties}>
            <h2 className="h-price__name">Yearly</h2>
            <p className="h-price__who">Billed {inr(plan.priceAnnual ?? 0)} per employee for the year, which saves 10%. Quarterly billing is {inr(plan.priceQuarterly ?? 0)}.</p>
            <p className="h-price__incl">Everything is included: employees, attendance, leave, payroll, hiring, performance, the Ask Vettri assistant and laptop management. No add-ons. The free trial only needs a ₹1 card check.</p>
            <div className="h-price__foot">
              <p className="h-price__amount">{inr(perMonthYearly)}<span> per employee a month</span></p>
              <a href={`${APP_URL}/signup`} className="h-btn h-btn--on-blue">Start free trial</a>
            </div>
          </div>
        </section>

        <section className="h-faq" aria-labelledby="h-faq-title">
          <h2 id="h-faq-title" className="h-faq__head" data-enter>Questions, answered</h2>
          <div className="h-faq__text">
            {FAQ.map((f, i) => (
              <p key={f.q} data-enter style={{ "--d": `${(i % 2) * 70}ms` } as React.CSSProperties}><b>{f.q}</b> {f.a}</p>
            ))}
          </div>
        </section>

        <section className="h-close" aria-labelledby="h-close-title">
          <div className="h-close__strip">
            {STRIP.map((s) => (
              <Image key={s.src} src={s.src} alt={s.alt} width={2720} height={1700} loading="lazy" sizes="(max-width: 700px) 50vw, 33vw" />
            ))}
          </div>
          <div className="h-close__band">
            <h2 id="h-close-title" className="h-head h-close__head" data-enter>Bring your own team</h2>
            <p className="h-close__statement" data-enter style={{ "--d": "60ms" } as React.CSSProperties}>
              Try Vettri with your real team. <a href={`${APP_URL}/signup`}>Start your free trial</a>, or book a demo and we will set it up with you.
            </p>
            <p className="h-close__small" data-enter style={{ "--d": "90ms" } as React.CSSProperties}>
              Built in India for teams of 20 to 500. Your data stays in your own company workspace. <Link href="/contact">Book a demo</Link>
            </p>
          </div>
        </section>
      </main>

      <footer className="h-foot">
        <div className="h-foot__top">
          <p>Vettri HRMS<br />HR and IT management for growing Indian companies.</p>
          <a href="#h-title" className="h-foot__back">Back to top</a>
        </div>
        <a className="h-foot__mail" href={`mailto:${SUPPORT_EMAIL}`}>
          <span>{emailUser}</span><span>@{emailDomain}</span>
        </a>
        <div className="h-foot__meta">
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/dpa">DPA</Link>
            <Link href="/refund-policy">Refunds</Link>
            <Link href="/security">Security</Link>
          </nav>
          <span>© {new Date().getFullYear()} Vettri HRMS</span>
          <span>Made in India</span>
        </div>
      </footer>
    </div>
  );
}
