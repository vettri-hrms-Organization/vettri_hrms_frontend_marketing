import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BadgeCheck, BarChart3, BriefcaseBusiness, CalendarCheck2, Check, CheckCircle2, Fingerprint,
  LaptopMinimal, MapPin, MessagesSquare, ShieldCheck, Sparkles, UserRound, UsersRound, Wallet, X,
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
import Marquee from "@/components/site/Marquee";
import ShotCrop from "@/components/site/ShotCrop";
import Spotlight from "@/components/site/Spotlight";

export const metadata: Metadata = createPageMetadata({
  title: "Vettri HRMS: HR, payroll, attendance and workplace IT in one platform",
  description: "Run employees, attendance, leave, payroll, hiring and workplace devices from one platform, with an AI assistant for every employee. Start a free trial.",
  path: "/",
  imageAlt: "Vettri HRMS dashboard",
});

const CAPABILITIES = [
  "Employee records", "GPS check-in", "Biometric devices", "Leave and holidays", "Work from home",
  "Salary structures", "Payslips", "Recruitment pipeline", "Careers page", "Offer letters",
  "Performance reviews", "Ask Vettri AI", "Executive reports", "Device inventory",
  "Software deployment", "Remote support", "Scoped roles", "Audit logs",
];

const ALSO = ["Org chart", "Document expiry reminders", "Bulk employee import", "Holiday calendar", "Attendance regularisation", "Interview feedback", "Per-user permission grants", "Dark mode"];

const STEPS = [
  { title: "Create your workspace", copy: "Sign up and add your company details. No payment needed for the trial." },
  { title: "Bring your people", copy: "Import employees from a spreadsheet and send them invitations to sign in." },
  { title: "Set your policies", copy: "Add leave types, holidays, office locations and salary structures." },
  { title: "Go live", copy: "Your team checks in, applies for leave and asks Vettri, from day one." },
];

const BEFORE = [
  "Leave tracked in spreadsheets and email threads",
  "Attendance machine software nobody else can see",
  "Payroll in a separate tool, re-typed every month",
  "Company laptops listed in a sheet that goes stale",
  "HR answering the same questions all day",
];

const AFTER = [
  "Leave requests, balances and approvals in one place",
  "Biometric and GPS check-ins on the employee record",
  "Salary structures and payslips next to the people they pay",
  "Every device, its owner and its software in view",
  "Ask Vettri answers routine questions for employees",
];

const ROLES = [
  { icon: BadgeCheck, title: "HR and admins", points: ["One record per employee", "Approvals in a click", "Payroll and reports ready when you are"] },
  { icon: UsersRound, title: "Managers", points: ["Your team's leave and attendance", "Interview feedback and decisions", "Goals and reviews for your reports"] },
  { icon: CheckCircle2, title: "Employees", points: ["Check in from browser or device", "Apply for leave in seconds", "Payslips and documents on demand"] },
  { icon: LaptopMinimal, title: "IT teams", points: ["Every company laptop accounted for", "Push software to many devices", "Remote support when someone is stuck"] },
];

const SECURITY = [
  { icon: ShieldCheck, title: "Access by role and scope", copy: "Permissions can apply to the whole organisation, a department, a team or just the employee themself." },
  { icon: BadgeCheck, title: "Audit logs", copy: "Sensitive changes are recorded, so you can see who did what and when." },
  { icon: LaptopMinimal, title: "Separate company data", copy: "Every organisation's data is isolated from every other's, and sessions use short-lived tokens." },
];

export default function HomePage() {
  return (
    <div className="v-site">
      <SiteHeader />
      <main id="main-content">
        {/* ---------------- Hero ---------------- */}
        <section className="v-hero">
          <div className="v-hero__aurora" aria-hidden="true"><i /><i /><i /></div>
          <div className="v-container">
            <div className="v-hero__copy">
              <Link href="#ask-vettri" className="v-announce">
                <b>New</b> Ask Vettri, the AI assistant for your whole team <ArrowRight size={15} aria-hidden="true" />
              </Link>
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
              <div className="v-hero__tilt v-parallax">
                <span className="v-hero__glow" aria-hidden="true" />
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
          </div>
        </section>

        <Marquee items={CAPABILITIES} />

        {/* ---------------- Product bento ---------------- */}
        <section id="features" className="v-section v-section--canvas">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow">Everything included</span>
                <h2 className="v-h2">One platform instead of five tools</h2>
                <p className="v-lead">HR, payroll and IT usually live in separate systems that never agree. In Vettri they share one employee record.</p>
              </div>
            </Reveal>

            <Spotlight className="v-bento2">
              <Reveal className="v-span-4">
                <article className="v-fcard v-spot">
                  <div className="v-fcard__body">
                    <span className="v-fcard__kicker"><UserRound size={15} aria-hidden="true" /> Core HR</span>
                    <h3>Every employee, one complete record</h3>
                    <p>Job details, reporting lines, documents with expiry reminders, attendance and leave, all on the profile.</p>
                  </div>
                  <div className="v-fcard__media"><ShotCrop src="/product/profile.webp" zoom={150} x={58} y={13} /></div>
                </article>
              </Reveal>

              <Reveal className="v-span-2" delay={80}>
                <article className="v-fcard v-spot">
                  <div className="v-fcard__body">
                    <span className="v-fcard__kicker"><Fingerprint size={15} aria-hidden="true" /> Attendance</span>
                    <h3>GPS and biometric check-ins</h3>
                    <p>Check in within your office radius, or punch on registered devices.</p>
                  </div>
                  <div className="v-fcard__media v-fcard__media--center">
                    <div className="v-geo" aria-hidden="true">
                      <span className="v-geo__ring" /><span className="v-geo__ring" />
                      <span className="v-geo__pin"><MapPin size={22} /></span>
                      <span className="v-geo__dot" style={{ top: "30%", left: "30%", background: "#16876A" }}>AS</span>
                      <span className="v-geo__dot" style={{ top: "36%", right: "26%", background: "#6558F5" }}>PG</span>
                      <span className="v-geo__dot" style={{ bottom: "34%", left: "38%", background: "#4169E1" }}>RI</span>
                      <span className="v-geo__chip"><i /> Checked in · inside office radius</span>
                    </div>
                  </div>
                </article>
              </Reveal>

              <Reveal className="v-span-2">
                <article className="v-fcard v-spot">
                  <div className="v-fcard__body">
                    <span className="v-fcard__kicker"><CalendarCheck2 size={15} aria-hidden="true" /> Leave</span>
                    <h3>Approvals in one click</h3>
                    <p>Leave types, balances, team approvals and a company holiday calendar.</p>
                  </div>
                  <div className="v-fcard__media"><ShotCrop src="/product/dashboard.webp" zoom={250} x={34} y={78} /></div>
                </article>
              </Reveal>

              <Reveal className="v-span-2" delay={80}>
                <article className="v-fcard v-spot">
                  <div className="v-fcard__body">
                    <span className="v-fcard__kicker"><Wallet size={15} aria-hidden="true" /> Payroll</span>
                    <h3>Payslips everyone can read</h3>
                    <p>Salary structures with Basic, HRA, PF, PT and TDS, plus payslip history.</p>
                  </div>
                  <div className="v-fcard__media"><ShotCrop src="/product/payslip.webp" zoom={220} x={28} y={50} /></div>
                </article>
              </Reveal>

              <Reveal className="v-span-2" delay={160}>
                <article className="v-fcard v-fcard--dark v-spot">
                  <div className="v-fcard__body">
                    <span className="v-fcard__kicker"><Sparkles size={15} aria-hidden="true" /> Ask Vettri AI</span>
                    <h3>Answers instead of tickets</h3>
                    <p>Employees ask about leave, payslips and holidays in plain language.</p>
                  </div>
                  <div className="v-fcard__media"><ShotCrop src="/product/ask-panel.webp" zoom={115} x={0} y={8} /></div>
                </article>
              </Reveal>

              <Reveal className="v-span-3">
                <article className="v-fcard v-spot">
                  <div className="v-fcard__body">
                    <span className="v-fcard__kicker"><BriefcaseBusiness size={15} aria-hidden="true" /> Recruitment</span>
                    <h3>From careers page to offer letter</h3>
                    <p>Publish roles, move candidates through stages, collect feedback and send offers.</p>
                  </div>
                  <div className="v-fcard__media"><ShotCrop src="/product/pipeline.webp" zoom={175} x={50} y={52} /></div>
                </article>
              </Reveal>

              <Reveal className="v-span-3" delay={80}>
                <article className="v-fcard v-spot">
                  <div className="v-fcard__body">
                    <span className="v-fcard__kicker"><LaptopMinimal size={15} aria-hidden="true" /> Workplace IT</span>
                    <h3>Every company device, accounted for</h3>
                    <p>A Windows agent for inventory, software deployment, activity reports and remote support.</p>
                  </div>
                  <div className="v-fcard__media">
                    <div className="v-devlist" aria-hidden="true">
                      <div><LaptopMinimal size={18} /><span><b>Design laptop 07</b><small>Assigned to Priya Gupta</small></span><span className="ok">Online</span></div>
                      <div><LaptopMinimal size={18} /><span><b>Sales laptop 12</b><small>Installing approved software</small></span><span className="busy">Deploying</span></div>
                      <div><LaptopMinimal size={18} /><span><b>Finance desktop 03</b><small>Hardware inventory up to date</small></span><span className="ok">Online</span></div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </Spotlight>

            <div className="v-also"><b>Also included:</b>{ALSO.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </section>

        {/* ---------------- Product tour ---------------- */}
        <section id="product" className="v-section">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow">Product tour</span>
                <h2 className="v-h2">See the real product, screen by screen</h2>
                <p className="v-lead">No mockups. Click through the areas your team will use every day.</p>
              </div>
            </Reveal>
            <Reveal delay={80}><ProductTour /></Reveal>
          </div>
        </section>

        {/* ---------------- Before / after ---------------- */}
        <section className="v-section v-section--canvas">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow">Why teams switch</span>
                <h2 className="v-h2">From scattered tools to one source of truth</h2>
              </div>
            </Reveal>
            <div className="v-compare">
              <Reveal>
                <div className="v-compare__col v-compare__col--before" style={{ height: "100%" }}>
                  <h3>Without Vettri</h3>
                  <ul>{BEFORE.map((item) => <li key={item}><X size={18} aria-hidden="true" />{item}</li>)}</ul>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="v-compare__col v-compare__col--after" style={{ height: "100%" }}>
                  <h3>With Vettri</h3>
                  <ul>{AFTER.map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" />{item}</li>)}</ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- Ask Vettri ---------------- */}
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

        {/* ---------------- How it works ---------------- */}
        <section className="v-section">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow">Getting started</span>
                <h2 className="v-h2">Up and running in four steps</h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <ol className="v-steps">
                {STEPS.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.copy}</p></li>)}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Roles ---------------- */}
        <section className="v-section v-section--canvas">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow">For everyone at work</span>
                <h2 className="v-h2">Each person sees exactly what they need</h2>
              </div>
            </Reveal>
            <Spotlight className="v-roles">
              {ROLES.map(({ icon: Icon, title, points }, index) => (
                <Reveal key={title} delay={index * 70}>
                  <article className="v-role v-spot" style={{ height: "100%", position: "relative" }}>
                    <span className="v-icon" style={{ marginBottom: 0 }}><Icon size={20} aria-hidden="true" /></span>
                    <h3>{title}</h3>
                    <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </article>
                </Reveal>
              ))}
            </Spotlight>
          </div>
        </section>

        {/* ---------------- Security ---------------- */}
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

        {/* ---------------- Pricing ---------------- */}
        <section id="pricing" className="v-section v-section--canvas">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <span className="v-eyebrow"><BarChart3 size={14} aria-hidden="true" /> Pricing</span>
                <h2 className="v-h2">One simple plan. Everything included.</h2>
                <p className="v-lead">Pay per employee. No module add-ons, no surprises.</p>
              </div>
            </Reveal>
            <Reveal delay={80}><PricingBlock /></Reveal>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
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

        {/* ---------------- Final CTA ---------------- */}
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
