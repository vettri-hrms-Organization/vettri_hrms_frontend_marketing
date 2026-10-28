import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BriefcaseBusiness, CalendarCheck2, Check, CheckCircle2, Fingerprint, Sparkles, UsersRound, Wallet,
} from "lucide-react";
import { APP_URL } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import BrowserFrame from "@/components/site/BrowserFrame";
import ProductTour from "@/components/site/ProductTour";
import PricingBlock from "@/components/site/PricingBlock";
import Faq, { FAQ } from "@/components/site/Faq";

export const metadata: Metadata = createPageMetadata({
  title: "Vettri HRMS: all-in-one HR software for growing teams",
  description: "Manage employees, attendance, leave, payroll and hiring in one simple app, with an AI assistant that answers your team's HR questions. Start a free trial.",
  path: "/",
  imageAlt: "Vettri HRMS dashboard",
});

const FACTS = [
  { value: "All-in-one", label: "HR, attendance, leave, payroll and hiring" },
  { value: "₹199", label: "per employee per month" },
  { value: "Free trial", label: "no payment details needed" },
  { value: "Built in India", label: "for Indian payroll and holidays" },
];

const FEATURES = [
  { icon: UsersRound, title: "Employees", copy: "One complete profile for every person: job details, documents, reporting lines and history." },
  { icon: Fingerprint, title: "Attendance", copy: "Check in from the browser with GPS, or connect your biometric machines. Work-from-home included." },
  { icon: CalendarCheck2, title: "Leave", copy: "Employees apply in seconds, managers approve in one click, balances update automatically." },
  { icon: Wallet, title: "Payroll", copy: "Salary structures with Basic, HRA, PF, PT and TDS, payroll runs and payslips for every employee." },
  { icon: BriefcaseBusiness, title: "Hiring", copy: "Publish jobs on your careers page, track candidates through each stage and send offer letters." },
  { icon: Sparkles, title: "AI assistant", copy: "Ask Vettri answers employees' HR questions and prepares leave requests, within their permissions." },
];

const HOME_FAQ = FAQ.filter((item) => [
  "What does Vettri HRMS include?",
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
          <div className="v-container">
            <div className="v-hero__copy">
              <Link href="#ai" className="v-pill"><b>New</b> Meet Ask Vettri, your AI HR assistant <ArrowRight size={14} aria-hidden="true" /></Link>
              <h1 className="v-h1">All-in-one HR software <span className="v-accent">for growing teams</span></h1>
              <p className="v-lead v-hero__lead">
                Manage employees, attendance, leave, payroll and hiring in one simple app, so your HR team spends less time on admin and more time on people.
              </p>
              <div className="v-actions">
                <a className="v-btn v-btn--primary" href={`${APP_URL}/signup`}>Start free trial <ArrowRight size={16} aria-hidden="true" /></a>
                <Link className="v-btn v-btn--secondary" href="/contact">Book a demo</Link>
              </div>
              <ul className="v-assure">
                <li><Check size={16} aria-hidden="true" /> No payment needed</li>
                <li><Check size={16} aria-hidden="true" /> Every feature included</li>
                <li><Check size={16} aria-hidden="true" /> Works on any device</li>
              </ul>
            </div>
          </div>
          <div className="v-hero__shot">
            <BrowserFrame src="/product/dashboard.webp" alt="The Vettri HRMS dashboard with workforce numbers and leave approvals" path="app.vettrihrms.in/dashboard" priority />
          </div>
        </section>

        {/* 2. Key facts */}
        <div className="v-facts" role="list">
          {FACTS.map((fact) => (
            <div key={fact.value} role="listitem"><b>{fact.value}</b><span>{fact.label}</span></div>
          ))}
        </div>

        {/* 3. What's included */}
        <section id="features" className="v-section">
          <div className="v-container">
            <Reveal>
              <div className="v-section-head">
                <p className="v-eyebrow">Features</p>
                <h2 className="v-h2">Everything HR needs, in one place</h2>
                <p className="v-lead">No more juggling spreadsheets and separate tools. Every part of Vettri shares the same employee record.</p>
              </div>
            </Reveal>
            <div className="v-grid3">
              {FEATURES.map(({ icon: Icon, title, copy }) => (
                <Reveal key={title}>
                  <article className="v-card">
                    <span className="v-icon"><Icon size={22} aria-hidden="true" /></span>
                    <h3 className="v-h3">{title}</h3>
                    <p>{copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="v-more"><b>Also included:</b> performance reviews, reports, holiday calendar, document reminders, device management and audit logs.</p>
          </div>
        </section>

        {/* 4. Product tour */}
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

        {/* 5. AI assistant */}
        <section id="ai" className="v-section">
          <div className="v-container v-split">
            <Reveal>
              <p className="v-eyebrow"><Sparkles size={16} aria-hidden="true" /> Ask Vettri AI</p>
              <h2 className="v-h2">Answers for your team, without emailing HR</h2>
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

        {/* 6. Pricing */}
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

        {/* 7. FAQ + closing call to action */}
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
                <h2 className="v-h2">Ready to simplify HR?</h2>
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
