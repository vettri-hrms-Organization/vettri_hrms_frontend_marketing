import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PricingBlock from "@/components/site/PricingBlock";
import Faq, { FAQ } from "@/components/site/Faq";
import Reveal from "@/components/site/Reveal";

export const metadata: Metadata = createPageMetadata({
  title: "Pricing",
  description: "Vettri HRMS is priced per employee with every module included: HR, attendance, leave, payroll, recruitment, performance, AI assistant and workplace IT.",
  path: "/pricing",
});

const MODULES = [
  ["Core HR", "Employee records, documents with expiry tracking, org chart, bulk import"],
  ["Attendance", "Biometric devices (ADMS), GPS check-in, work-from-home approvals, regularisation"],
  ["Leave", "Custom leave types, balances, manager approvals, holiday calendar"],
  ["Payroll", "Salary structures, payroll runs, self-service payslips"],
  ["Recruitment", "Careers page, candidate pipeline, interviews, offer letters"],
  ["Performance", "Goals and performance reviews"],
  ["Reports", "Executive overview, attendance, leave, hiring and headcount reports"],
  ["Ask Vettri AI", "Plain-language answers and leave requests for employees"],
  ["Workplace IT", "Device inventory, software deployment, activity reports, remote support"],
  ["Access control", "Roles, scoped permissions, per-user grants, audit logs"],
];

export default function PricingPage() {
  const pricingFaq = FAQ.filter((item) => ["How is pricing calculated?", "Can I try it before paying?", "What does Vettri HRMS include?"].includes(item.q));
  return (
    <div className="v-site">
      <SiteHeader />
      <main id="main-content">
        <section className="v-page-hero">
          <div className="v-container">
            <p className="v-eyebrow">Pricing</p>
            <h1 className="v-h1">Simple pricing. <span className="v-accent">Every module included.</span></h1>
            <p className="v-lead">One plan for your whole organisation, priced per employee. Start with a free trial.</p>
          </div>
        </section>

        <section className="v-section v-section--canvas" style={{ paddingTop: 56 }}>
          <div className="v-container">
            <PricingBlock />
          </div>
        </section>

        <section className="v-section">
          <div className="v-container v-container--narrow">
            <Reveal>
              <div className="v-section-head">
                <h2 className="v-h2">What&apos;s included</h2>
                <p className="v-lead">The same plan unlocks every part of Vettri.</p>
              </div>
            </Reveal>
            <table className="v-table">
              <thead><tr><th scope="col">Module</th><th scope="col">What you get</th></tr></thead>
              <tbody>
                {MODULES.map(([name, detail]) => (
                  <tr key={name}><td>{name}</td><td>{detail}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="v-section v-section--canvas">
          <div className="v-container v-container--narrow">
            <div className="v-section-head"><h2 className="v-h2">Pricing questions</h2></div>
            <Faq items={pricingFaq} />
            <p className="v-lead" style={{ marginTop: 28, textAlign: "center" }}>
              Have more than a few hundred employees or a special requirement?{" "}
              <Link href="/contact" className="v-accent" style={{ fontWeight: 700 }}>Talk to us <ArrowRight size={15} style={{ display: "inline", verticalAlign: "-2px" }} /></Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
