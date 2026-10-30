/* Draft — to be reviewed by legal counsel before publication. */
import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import LegalPage, { Placeholder } from "@/components/site/LegalPage";
import { SUPPORT_EMAIL } from "@/components/site/SiteFooter";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description: "The terms that govern your organisation's use of Vettri HRMS, including acceptable use, fees, data protection and liability.",
  path: "/terms",
});

const TOC = [
  { id: "agreement", label: "The agreement" },
  { id: "accounts", label: "Accounts and administrators" },
  { id: "service", label: "The service" },
  { id: "customer-data", label: "Your data" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "fees", label: "Fees, trials and taxes" },
  { id: "term", label: "Term, suspension and termination" },
  { id: "ip", label: "Intellectual property" },
  { id: "warranties", label: "Warranties and disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnity" },
  { id: "law", label: "Governing law and disputes" },
  { id: "general", label: "General" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lead="These terms govern how your organisation uses Vettri HRMS. Please read them with our Privacy Policy and Data Processing Agreement."
      version="2026-10-01"
      effectiveDate="1 October 2026"
      toc={TOC}
    >
      <h2 id="agreement">1. The agreement</h2>
      <p>These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between <Placeholder>[Vettri legal entity name]</Placeholder>, a company incorporated in India with its registered office at <Placeholder>[registered address]</Placeholder> (&ldquo;Vettri&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) and the organisation that signs up for Vettri HRMS (&ldquo;Customer&rdquo;, &ldquo;you&rdquo;).</p>
      <p>The person who creates the workspace confirms that they are authorised to accept these Terms on behalf of the Customer. The <Link href="/privacy">Privacy Policy</Link>, the <Link href="/dpa">Data Processing Agreement</Link> (&ldquo;DPA&rdquo;), the <Link href="/refund-policy">Refund Policy</Link> and any order form or plan you select form part of this agreement. If they conflict, the order form prevails, then the DPA (for personal data), then these Terms.</p>
      <p>We may update these Terms. If a change is material we will tell administrators in the app or by email at least 30 days before it takes effect, and administrators will be asked to accept the new version when they next sign in. Continuing to use the service after that date means you accept the change.</p>

      <h2 id="accounts">2. Accounts and administrators</h2>
      <ul>
        <li>You appoint one or more organisation administrators who control your workspace, invite users, assign roles and permissions, and configure settings such as two-factor authentication and monitoring-consent rules.</li>
        <li>You are responsible for everything done under your users&rsquo; accounts, for keeping credentials confidential, and for removing access promptly when someone leaves.</li>
        <li>Users must be at least 18 years old, or the minimum legal working age where your employees are lawfully employed below 18, in which case you are responsible for any verifiable consent required by law.</li>
        <li>Tell us immediately at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> if you suspect unauthorised access.</li>
      </ul>

      <h2 id="service">3. The service</h2>
      <p>Vettri HRMS is a cloud software service for HR, attendance, leave, payroll, expenses, onboarding, IT device management and related features, as described on our website and in the product. We may improve, change or retire features; we will not materially reduce the core functionality of a paid plan during a paid term without notice.</p>
      <p>Payroll, tax and statutory calculations (for example PF, ESI, professional tax and TDS) are tools to help you. You remain responsible for reviewing outputs, filing returns and complying with labour and tax laws. Vettri does not provide legal, tax or accounting advice.</p>
      <p>We aim for high availability but do not guarantee uninterrupted service. Planned maintenance will be announced where practical. Any service-level commitment applies only if it is written into your order form.</p>

      <h2 id="customer-data">4. Your data</h2>
      <p>You own the data you and your users put into Vettri (&ldquo;Customer Data&rdquo;), including your employees&rsquo; personal data. For that personal data you are the <strong>data fiduciary</strong> and Vettri is your <strong>data processor</strong> under the Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;). The DPA sets out how we process it.</p>
      <ul>
        <li>You are responsible for having a lawful basis to process your employees&rsquo; data, giving them the notices the law requires (including the in-app employee monitoring notice if you use the device agent), and responding to their requests. Vettri provides tools for this.</li>
        <li>We use Customer Data only to provide, secure and support the service, and as described in the DPA. We do not sell it or use it to advertise.</li>
        <li>We may use aggregated, de-identified usage statistics that do not identify you or any individual to operate and improve the service.</li>
        <li>You can export your data at any time from Settings &rsaquo; Privacy &amp; Data. On termination, see section 7.</li>
      </ul>

      <h2 id="acceptable-use">5. Acceptable use</h2>
      <p>This Acceptable Use Policy applies to every user of your workspace. You and your users must not:</p>
      <ul>
        <li>use the service in breach of any law, including the DPDP Act, the Information Technology Act, 2000 and its rules, and labour laws;</li>
        <li>use device monitoring, location or selfie attendance features covertly, beyond what you have told employees, or for purposes unrelated to employment, security or IT management;</li>
        <li>upload content that is unlawful, infringing, defamatory, obscene, or that contains malware;</li>
        <li>use remote support or remote command features on devices you are not authorised to manage, or to access an employee&rsquo;s personal files or accounts;</li>
        <li>try to access other customers&rsquo; data, probe or bypass security or rate limits, or reverse engineer the service except as the law allows;</li>
        <li>resell or provide the service to third parties outside your organisation without our written agreement;</li>
        <li>use automated means to scrape or overload the service, or use it to build a competing product.</li>
      </ul>
      <p>We may remove content or suspend access that breaches this section, acting proportionately and, where reasonable, after notice.</p>

      <h2 id="fees">6. Fees, trials and taxes</h2>
      <ul>
        <li>Fees are as shown on the <Link href="/pricing">pricing page</Link> or your order form, charged per billable employee for the billing cycle you choose (monthly, quarterly or annual), in Indian Rupees.</li>
        <li>Free trials last for the period shown at signup. A small verification charge may be collected through our payment partner to start a trial.</li>
        <li>Fees are exclusive of GST and other applicable taxes, which are added to invoices. Payments are processed by our payment partner; we do not store full card details.</li>
        <li>If payment fails we may suspend paid features after reasonable reminders. Refunds are governed by the <Link href="/refund-policy">Refund Policy</Link>.</li>
        <li>We may change prices for the next billing cycle with at least 30 days&rsquo; notice.</li>
      </ul>

      <h2 id="term">7. Term, suspension and termination</h2>
      <p>The agreement starts when you sign up and continues until terminated. You may cancel at any time; paid plans end at the close of the current billing cycle. We may suspend or terminate for material breach not cured within 15 days of notice, immediately for serious misuse or security risk, or for non-payment.</p>
      <p>An administrator can request deletion of the whole account from Settings &rsaquo; Privacy &amp; Data. Deletion is scheduled 30 days later and can be cancelled until then. Please export your data first. After the grace period, personal data in your workspace is anonymised and the account is removed, except records Vettri must keep by law (such as our own GST invoices) and backups, which expire on their normal cycle of up to <Placeholder>[35]</Placeholder> days.</p>
      <p>Sections 4, 8 to 13 survive termination.</p>

      <h2 id="ip">8. Intellectual property</h2>
      <p>Vettri and its licensors own the service, software, designs and documentation. We grant you a non-exclusive, non-transferable right to use the service for your internal business during the term. Feedback you give us may be used freely to improve the service.</p>

      <h2 id="warranties">9. Warranties and disclaimers</h2>
      <p>Each party confirms it has authority to enter this agreement. We will provide the service with reasonable skill and care and in line with the security measures described in the DPA. Apart from that, and to the extent the law allows, the service is provided &ldquo;as is&rdquo; and we disclaim implied warranties of merchantability, fitness for a particular purpose and non-infringement. AI features (such as Ask Vettri) can make mistakes; review their answers before relying on them.</p>

      <h2 id="liability">10. Limitation of liability</h2>
      <p>Neither party is liable for indirect, incidental, special or consequential losses, or for loss of profits, revenue or goodwill. Each party&rsquo;s total liability arising out of this agreement in any 12-month period is limited to the fees paid or payable by you to Vettri in that period. These limits do not apply to your payment obligations, a party&rsquo;s indemnity obligations, or liability that cannot be limited by law.</p>

      <h2 id="indemnity">11. Indemnity</h2>
      <p>You will defend and indemnify Vettri against third-party claims arising from Customer Data or your breach of section 5. Vettri will defend and indemnify you against third-party claims that the service, used as permitted, infringes their intellectual property rights in India.</p>

      <h2 id="law">12. Governing law and disputes</h2>
      <p>These Terms are governed by the laws of India. The parties will first try to resolve any dispute by good-faith discussion for 30 days. Failing that, the courts at <Placeholder>[city, e.g. Chennai]</Placeholder>, Tamil Nadu, India have exclusive jurisdiction, <Placeholder>[or: disputes will be referred to arbitration under the Arbitration and Conciliation Act, 1996, seated at [city], in English, before a sole arbitrator]</Placeholder>.</p>

      <h2 id="general">13. General</h2>
      <ul>
        <li>Neither party is liable for delays caused by events beyond its reasonable control.</li>
        <li>You may not assign this agreement without our consent, except to a successor of your business. We may assign it to an affiliate or successor.</li>
        <li>Notices to you may be sent to your administrators&rsquo; email addresses or shown in the app. Notices to us go to the contact below.</li>
        <li>If a provision is unenforceable, the rest continues. Not enforcing a right is not a waiver.</li>
        <li>This agreement is the entire agreement on its subject and replaces earlier discussions.</li>
      </ul>

      <h2 id="contact">14. Contact</h2>
      <p>Questions about these Terms: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Grievance officer: <Placeholder>[name]</Placeholder>, <a href="mailto:grievance@vettrihrms.in">grievance@vettrihrms.in</a>, <Placeholder>[postal address]</Placeholder>.</p>
    </LegalPage>
  );
}
