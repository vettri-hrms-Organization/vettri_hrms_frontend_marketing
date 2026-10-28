import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BadgeCheck, BriefcaseBusiness, CalendarCheck2, Check, CheckCircle2, ClipboardList, Fingerprint,
  KeyRound, LaptopMinimal, MapPin, MessagesSquare, ScrollText, ShieldCheck, Sparkles, Target, UsersRound, Wallet,
} from "lucide-react";
import { APP_URL } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import BrowserFrame from "@/components/site/BrowserFrame";
import ProductTour from "@/components/site/ProductTour";
import PricingBlock from "@/components/site/PricingBlock";
import Faq from "@/components/site/Faq";

export const metadata: Metadata = createPageMetadata({
  title: "Vettri HRMS: HR, payroll, attendance and workplace IT in one platform",
  description: "Run employees, attendance, leave, payroll, hiring and workplace devices from one platform, with an AI assistant for every employee. Start a free trial.",
  path: "/",
  imageAlt: "Vettri HRMS dashboard",
});

const STRIP = [
  { icon: MapPin, label: "GPS and biometric attendance" },
  { icon: Wallet, label: "Payroll with PF, PT and TDS" },
  { icon: Sparkles, label: "AI assistant for every employee" },
  { icon: ShieldCheck, label: "Scoped roles and audit logs" },
];

const FEATURES = [
  { icon: UsersRound, title: "Core HR", copy: "Employee records, job history, reporting lines, documents with expiry reminders and a live org chart.", tags: ["Directory", "Documents", "Org chart", "Bulk import"], span: "wide" },
  { icon: Fingerprint, title: "Attendance", copy: "Biometric devices, GPS check-in within your office radius, work-from-home approvals and regularisation requests.", tags: ["Biometric", "Geofencing", "WFH"] },
  { icon: CalendarCheck2, title: "Leave and holidays", copy: "Custom leave types, yearly balances, manager approvals and one company holiday calendar." },
  { icon: Wallet, title: "Payroll", copy: "Salary structures with your components, payroll runs reviewed before processing, and self-service payslips." },
  { icon: Target, title: "Performance", copy: "Goals for every employee and structured performance reviews." },
  { icon: BriefcaseBusiness, title: "Recruitment", copy: "Your own careers page, a candidate pipeline, interview feedback and offer letters, from opening to hire.", tags: ["Careers page", "Pipeline", "Offers"], span: "wide" },
  { icon: ClipboardList, title: "Reports", copy: "An executive overview plus attendance, leave, hiring and headcount reports with CSV export." },
  { icon: LaptopMinimal, title: "Workplace IT", copy: "A Windows agent for device inventory, software deployment, activity reports and remote support, tied to the same employee record HR uses.", tags: ["Inventory", "Software deployment", "Activity reports", "Remote support"], span: "full" },
];

const ROLES = [
  { icon: BadgeCheck, title: "HR and admins", points: ["One record per employee", "Approvals in a click", "Payroll and reports ready when you are"] },
  { icon: UsersRound, title: "Managers", points: ["Your team's leave and attendance", "Interview feedback and decisions", "Goals and reviews for your reports"] },
  { icon: CheckCircle2, title: "Employees", points: ["Check in from browser or device", "Apply for leave in seconds", "Payslips and documents on demand"] },
  { icon: LaptopMinimal, title: "IT teams", points: ["Every company laptop accounted for", "Push software to many devices", "Remote support when someone is stuck"] },
];

const SECURITY = [
  { icon: KeyRound, title: "Access by role and scope", copy: "Permissions can apply to the whole organisation, a department, a team or just the employee themself." },
  { icon: ScrollText, title: "Audit logs", copy: "Sensitive changes are recorded, so you can see who did what and when." },
  { icon: ShieldCheck, title: "Separate company data", copy: "Every organisation's data is isolated from every other's, and signed-in sessions use short-lived tokens." },
];

export default function HomePage() {
  return (
    <div className="v-site">
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section className="v-hero">
          <div className="v-container">
            <div className="v-hero__copy">
              <span className="v-eyebrow v-eyebrow--dark"><Sparkles size={14} aria-hidden="true" /> HR, payroll and workplace IT in one platform</span>
              <h1 className="v-h1">Run your people and workplace <span className="v-gradient-text">from one place.</span></h1>
              <p className="v-hero__lead">
                Vettri brings employees, attendance, leave, payroll, hiring and company devices into one calm workspace, with an AI assistant that answers your team&apos;s HR questions.
              </p>
              <div className="v-hero__actions">
                <a className="v-btn v-btn--primary" href={`${APP_URL}/signup`}>Start free trial <ArrowRight size={16} aria-hidden="true" /></a>
                <Link className="v-btn v-btn--ghost-dark" href="/contact">Book a demo</Link>
              </div>
              <ul className="v-hero__assurance">
                <li><Check size={15} aria-hidden="true" /> No payment to start</li>
                <li><Check size={15} aria-hidden="true" /> Every module included</li>
                <li><Check size={15} aria-hidden="true" /> Priced per employee in ₹</li>
              </ul>
            </div>
          </div>

          <div className="v-container v-hero__stage">
            <div className="v-hero__frame">
              <div className="v-float v-float--toast" aria-hidden="true">
                <span className="v-float__icon"><Check size={18} strokeWidth={2.6} /></span>
                <span><b>Leave approved</b><small>Priya Gupta · Sick leave · 2 days</small></span>
              </div>
              <BrowserFrame src="/product/dashboard.webp" alt="Vettri HRMS dashboard showing workforce numbers and leave approvals" path="app.vettrihrms.in/dashboard" priority />
              <div className="v-float v-float--ask" aria-hidden="true">
                <Image src="/product/ask-panel.webp" alt="" width={920} height={1360} />
              </div>
            </div>
          </div>
        </section>

        <section className="v-strip" aria-label="Highlights">
          <div className="v-container">
            <ul className="v-strip__list">
              {STRIP.map(({ icon: Icon, label }) => <li key={label}><Icon size={20} aria-hidden="true" />{label}</li>)}
            </ul>
          </div>
        </section>

        {/* Product tour */}
        <section id="product" className="v-section">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow">Product tour</span>
                <h2 className="v-h2">Built for the work HR actually does</h2>
                <p className="v-lead">Every screen below is the real Vettri product. Click through the areas your team uses every day.</p>
              </div>
            </Reveal>
            <Reveal delay={80}><ProductTour /></Reveal>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="v-section v-section--canvas">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow">Everything included</span>
                <h2 className="v-h2">One platform instead of five tools</h2>
                <p className="v-lead">HR, payroll and IT usually live in separate systems that never agree. In Vettri they share one employee record.</p>
              </div>
            </Reveal>
            <div className="v-bento">
              {FEATURES.map(({ icon: Icon, title, copy, tags, span }, index) => (
                <Reveal key={title} delay={(index % 3) * 70} className={span ? `v-card--${span}` : ""}>
                  <article className="v-card" style={{ height: "100%" }}>
                    <span className="v-icon"><Icon size={21} aria-hidden="true" /></span>
                    <h3 className="v-h3">{title}</h3>
                    <p>{copy}</p>
                    {tags && <div className="v-card__tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ask Vettri */}
        <section id="ask-vettri" className="v-section v-ai">
          <div className="v-container v-split">
            <Reveal>
              <span className="v-eyebrow v-eyebrow--dark"><Sparkles size={14} aria-hidden="true" /> Ask Vettri AI</span>
              <h2 className="v-h2">An HR assistant your whole team can talk to</h2>
              <p className="v-lead">Employees get answers in plain language instead of emailing HR. Vettri reads only what that person is allowed to see.</p>
              <ul className="v-checks">
                <li><CheckCircle2 size={17} aria-hidden="true" />&ldquo;How much leave do I have left?&rdquo; answered from live balances</li>
                <li><CheckCircle2 size={17} aria-hidden="true" />Prepares leave requests for the employee to confirm</li>
                <li><CheckCircle2 size={17} aria-hidden="true" />Finds holidays, payslips, documents and attendance</li>
                <li><CheckCircle2 size={17} aria-hidden="true" />Respects every role and permission in your workspace</li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="v-ai__visual">
                <span className="v-ai__halo" aria-hidden="true" />
                <Image src="/product/ask-panel.webp" alt="Ask Vettri answering an employee's question about their leave balance" width={920} height={1360} style={{ position: "relative" }} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Roles */}
        <section className="v-section">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow">For everyone at work</span>
                <h2 className="v-h2">Each person sees exactly what they need</h2>
              </div>
            </Reveal>
            <div className="v-roles">
              {ROLES.map(({ icon: Icon, title, points }, index) => (
                <Reveal key={title} delay={index * 70}>
                  <article className="v-role" style={{ height: "100%" }}>
                    <span className="v-icon" style={{ marginBottom: 0 }}><Icon size={20} aria-hidden="true" /></span>
                    <h3>{title}</h3>
                    <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="v-section v-security">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow v-eyebrow--dark"><ShieldCheck size={14} aria-hidden="true" /> Security</span>
                <h2 className="v-h2">Built to handle sensitive people data</h2>
                <p className="v-lead">Salaries, documents and personal details deserve strict access rules. Vettri enforces them on every request.</p>
              </div>
            </Reveal>
            <div className="v-security__grid">
              {SECURITY.map(({ icon: Icon, title, copy }, index) => (
                <Reveal key={title} delay={index * 70}>
                  <div className="v-security__item" style={{ height: "100%" }}>
                    <Icon size={22} aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div style={{ marginTop: 32, textAlign: "center" }}>
              <Link className="v-btn v-btn--ghost-dark" href="/security">How Vettri protects your data <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="v-section v-section--canvas">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow">Pricing</span>
                <h2 className="v-h2">One simple plan. Everything included.</h2>
                <p className="v-lead">Pay per employee. No module add-ons, no surprises.</p>
              </div>
            </Reveal>
            <Reveal delay={80}><PricingBlock /></Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="v-section">
          <div className="v-container v-container--narrow">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow"><MessagesSquare size={14} aria-hidden="true" /> FAQ</span>
                <h2 className="v-h2">Questions buyers ask us</h2>
              </div>
            </Reveal>
            <Faq />
          </div>
        </section>

        {/* Final CTA */}
        <section className="v-section" style={{ paddingTop: 0 }}>
          <div className="v-container">
            <Reveal>
              <div className="v-cta">
                <h2 className="v-h2">See Vettri with your own team</h2>
                <p className="v-lead">Start a free trial and set up your organisation yourself, or book a walkthrough with us first.</p>
                <div className="v-hero__actions">
                  <a className="v-btn v-btn--primary" href={`${APP_URL}/signup`}>Start free trial <ArrowRight size={16} aria-hidden="true" /></a>
                  <Link className="v-btn v-btn--ghost-dark" href="/contact">Book a demo</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
