import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity, ArrowRight, BadgeCheck, BarChart3, BriefcaseBusiness, CalendarCheck2, Check, CheckCircle2, Fingerprint, MonitorCheck,
  PackageCheck, ScreenShare, ShieldCheck, Sparkles, UsersRound, Wallet,
} from "lucide-react";
import { APP_URL } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import Spotlight from "@/components/site/Spotlight";
import ITShowcase from "@/components/site/ITShowcase";
import BrowserFrame from "@/components/site/BrowserFrame";
import ProductTour from "@/components/site/ProductTour";
import PricingBlock from "@/components/site/PricingBlock";
import Faq, { FAQ } from "@/components/site/Faq";

export const metadata: Metadata = createPageMetadata({
  title: "Vettri HRMS: HR and IT management in one platform",
  description: "Manage employees, attendance, leave, payroll and hiring, plus every company laptop: device inventory, live status, software deployment and remote support. Start a free trial.",
  path: "/",
  imageAlt: "Vettri HRMS dashboard",
});

const FACTS = [
  { value: "HR + IT", label: "your people and their devices, in one app" },
  { value: "₹199", label: "per employee per month" },
  { value: "Free trial", label: "just a ₹1 verification to start" },
  { value: "Built in India", label: "for Indian payroll and holidays" },
];

const FEATURES = [
  { icon: UsersRound, title: "Employees", tone: "tone-blue", copy: "One complete profile for every person: job details, documents, reporting lines and history." },
  { icon: Fingerprint, title: "Attendance", tone: "tone-teal", copy: "Check in from the browser with GPS, or connect your biometric machines. Work-from-home included." },
  { icon: CalendarCheck2, title: "Leave", tone: "tone-amber", copy: "Employees apply in seconds, managers approve in one click, balances update automatically." },
  { icon: Wallet, title: "Payroll", tone: "tone-violet", copy: "Salary structures with Basic, HRA, PF, PT and TDS, payroll runs and payslips for every employee." },
  { icon: BriefcaseBusiness, title: "Hiring", tone: "tone-rose", copy: "Publish jobs on your careers page, track candidates through each stage and send offer letters." },
  { icon: Sparkles, title: "AI assistant", tone: "tone-cyan", copy: "Ask Vettri answers employees' HR questions and prepares leave requests, within their permissions." },
];

const IT_FEATURES = [
  { icon: MonitorCheck, title: "Device inventory", tone: "tone-blue", copy: "Every enrolled laptop with its employee, operating system, agent version and hardware scan. Export to CSV or Excel." },
  { icon: Activity, title: "Live workforce status", tone: "tone-teal", copy: "See who is active, idle or offline right now, and which applications your team is using today." },
  { icon: PackageCheck, title: "Software deployment", tone: "tone-violet", copy: "Upload an approved installer once, push it silently to the devices you pick and track every install." },
  { icon: ScreenShare, title: "Remote desktop and CLI", tone: "tone-cyan", copy: "Help an employee without walking to their desk, with a remote desktop session or the Vettri command line." },
  { icon: BarChart3, title: "Activity reports", tone: "tone-amber", copy: "Productivity and management reports by employee and application, ready to export and share." },
  { icon: ShieldCheck, title: "Private by design", tone: "tone-rose", copy: "Devices join through a secure enrolment link, and activity is visible only to roles with monitoring access." },
];

const HOME_FAQ = FAQ.filter((item) => [
  "What does Vettri HRMS include?",
  "How does IT management work?",
  "Can I try it before paying?",
  "Does attendance work with our biometric machines?",
  "Who can see what?",
  "Can we import our existing employee data?",
].includes(item.q));

export default function HomePage() {
  return (
    <div className="v-site">
      <SiteHeader />
      <main id="main-content">
        {/* 1. Hero: what it is, who it's for, what to do next */}
        <section className="v-hero">
          <div className="v-mesh" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="v-container">
            <div className="v-hero__copy">
              <Link href="#it" className="v-pill"><b>New</b> Vettri IT: manage every company laptop <ArrowRight size={14} aria-hidden="true" /></Link>
              <h1 className="v-h1">HR and IT management <span className="v-gtext">in one platform</span></h1>
              <p className="v-lead v-hero__lead">
                Run employees, attendance, leave, payroll and hiring, and manage the laptops your team works on: device inventory, live status, software installs and remote support.
              </p>
              <div className="v-actions">
                <a className="v-btn v-btn--primary" href={`${APP_URL}/signup`}>Start free trial <ArrowRight size={16} aria-hidden="true" /></a>
                <Link className="v-btn v-btn--secondary" href="/contact">Book a demo</Link>
              </div>
              <ul className="v-assure">
                <li><Check size={16} aria-hidden="true" /> Only ₹1 to verify</li>
                <li><Check size={16} aria-hidden="true" /> Every feature included</li>
                <li><Check size={16} aria-hidden="true" /> Works on any device</li>
              </ul>
            </div>
          </div>
          <div className="v-hero__shot">
            <div className="v-hero__stage">
              <div className="v-hero__glow" aria-hidden="true" />
              <BrowserFrame src="/product/dashboard.webp" alt="The Vettri HRMS dashboard with workforce numbers and leave approvals" path="app.vettrihrms.in/dashboard" priority />
              <div className="v-glass v-glass--a" aria-hidden="true">
                <span className="v-glass__icon"><BadgeCheck size={20} /></span>
                <span><b>Leave approved</b><small>Balance updated automatically</small></span>
              </div>
              <div className="v-glass v-glass--b" aria-hidden="true">
                <span className="v-glass__icon"><Sparkles size={20} /></span>
                <span><b>Ask Vettri</b><small>&ldquo;How many leaves do I have?&rdquo;</small></span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key facts */}
        <div className="v-facts" role="list">
          {FACTS.map((fact) => (
            <div key={fact.value} role="listitem"><b>{fact.value}</b><span>{fact.label}</span></div>
          ))}
        </div>

        {/* 3. HR & IT management, part 1: HR */}
        <section id="features" className="v-section">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <p className="v-eyebrow"><UsersRound size={16} aria-hidden="true" /> HR management</p>
                <h2 className="v-h2">Everything HR needs, <span className="v-gtext">in one place</span></h2>
                <p className="v-lead">No more juggling spreadsheets and separate tools. Every part of Vettri shares the same employee record.</p>
              </div>
            </Reveal>
            <Spotlight className="v-grid3">
              {FEATURES.map(({ icon: Icon, title, copy, tone }) => (
                <Reveal key={title}>
                  <article className={`v-card v-spot ${tone}`}>
                    <span className="v-icon"><Icon size={22} aria-hidden="true" /></span>
                    <h3 className="v-h3">{title}</h3>
                    <p>{copy}</p>
                  </article>
                </Reveal>
              ))}
            </Spotlight>
            <p className="v-more"><b>Also included:</b> performance reviews, reports, holiday calendar, document reminders, role-based access and audit logs.</p>
          </div>
        </section>

        {/* 4. HR & IT management, part 2: IT (the signature feature) */}
        <section id="it" className="v-section v-it">
          <div className="v-it__mesh" aria-hidden="true"><i /><i /><i /></div>
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <p className="v-eyebrow"><MonitorCheck size={16} aria-hidden="true" /> IT management · Built in</p>
                <h2 className="v-h2">Every company laptop, <span className="v-gtext">managed from your HR app</span></h2>
                <p className="v-lead">Most HR tools stop at people. Vettri also looks after the devices they work on, and every device is linked to the employee who uses it.</p>
              </div>
            </Reveal>
            <ITShowcase />
            <Spotlight className="v-grid3 v-it__grid">
              {IT_FEATURES.map(({ icon: Icon, title, copy, tone }) => (
                <Reveal key={title}>
                  <article className={`v-card v-spot v-it__card ${tone}`}>
                    <span className="v-icon"><Icon size={22} aria-hidden="true" /></span>
                    <h3 className="v-h3">{title}</h3>
                    <p>{copy}</p>
                  </article>
                </Reveal>
              ))}
            </Spotlight>
            <ul className="v-it__facts">
              <li><Check size={16} aria-hidden="true" /> Windows 10 and 11</li>
              <li><Check size={16} aria-hidden="true" /> Lightweight Windows agent</li>
              <li><Check size={16} aria-hidden="true" /> Included in every plan</li>
            </ul>
          </div>
        </section>

        {/* 5. Product tour */}
        <section id="tour" className="v-section v-section--canvas">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <p className="v-eyebrow">Product tour</p>
                <h2 className="v-h2">See how it works</h2>
                <p className="v-lead">These are real Vettri screens. Pick an area to see what your team will use every day.</p>
              </div>
            </Reveal>
            <ProductTour />
          </div>
        </section>

        {/* 6. AI assistant */}
        <section id="ai" className="v-section">
          <div className="v-container v-split">
            <Reveal>
              <p className="v-eyebrow"><Sparkles size={16} aria-hidden="true" /> Ask Vettri AI</p>
              <h2 className="v-h2">Answers for your team, <span className="v-gtext">without emailing HR</span></h2>
              <p className="v-lead">Employees ask questions in plain language and get instant answers from their own records.</p>
              <ul className="v-checks">
                <li><CheckCircle2 size={18} aria-hidden="true" />&ldquo;How much leave do I have left?&rdquo;</li>
                <li><CheckCircle2 size={18} aria-hidden="true" />Prepares a leave request for the employee to confirm</li>
                <li><CheckCircle2 size={18} aria-hidden="true" />Finds holidays, payslips, documents and attendance</li>
                <li><CheckCircle2 size={18} aria-hidden="true" />Only sees what that employee is allowed to see</li>
              </ul>
            </Reveal>
            <Reveal>
              <div className="v-ai-visual">
                <Image src="/product/ask-panel.webp" alt="Ask Vettri answering an employee's question about their leave balance" width={920} height={1360} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. Pricing */}
        <section id="pricing" className="v-section v-section--canvas">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <p className="v-eyebrow">Pricing</p>
                <h2 className="v-h2">Simple pricing, everything included</h2>
                <p className="v-lead">One plan. Pay per employee. No add-ons.</p>
              </div>
            </Reveal>
            <PricingBlock />
          </div>
        </section>

        {/* 8. FAQ + closing call to action */}
        <section className="v-section">
          <div className="v-container v-container--narrow">
            <div className="v-section-head">
              <p className="v-eyebrow">FAQ</p>
              <h2 className="v-h2">Common questions</h2>
            </div>
            <Faq items={HOME_FAQ} />
          </div>
          <div className="v-container" style={{ marginTop: "clamp(64px, 8vw, 96px)" }}>
            <Reveal>
              <div className="v-cta">
                <h2 className="v-h2">Ready to simplify HR and IT?</h2>
                <p className="v-lead">Start your free trial today, or let us walk you through Vettri first.</p>
                <div className="v-actions">
                  <a className="v-btn v-btn--primary" href={`${APP_URL}/signup`}>Start free trial <ArrowRight size={16} aria-hidden="true" /></a>
                  <Link className="v-btn v-btn--on-dark" href="/contact">Book a demo</Link>
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
