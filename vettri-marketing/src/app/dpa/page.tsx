/* Draft — to be reviewed by legal counsel before publication. */
import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import LegalPage, { Placeholder } from "@/components/site/LegalPage";

export const metadata: Metadata = createPageMetadata({
  title: "Data Processing Agreement",
  description: "How Vettri HRMS processes employee personal data on behalf of employers as a data processor under India's DPDP Act, 2023.",
  path: "/dpa",
});

const TOC = [
  { id: "scope", label: "Scope and roles" },
  { id: "instructions", label: "Processing on instructions" },
  { id: "details", label: "Details of processing" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "security", label: "Security measures" },
  { id: "sub-processors", label: "Sub-processors" },
  { id: "rights", label: "Data principal requests" },
  { id: "breach", label: "Breach notification" },
  { id: "transfers", label: "Location and transfers" },
  { id: "return", label: "Return and deletion" },
  { id: "audit", label: "Information and audits" },
  { id: "customer", label: "Customer responsibilities" },
  { id: "general", label: "General" },
];

export default function DpaPage() {
  return (
    <LegalPage
      title="Data Processing Agreement"
      lead="This DPA forms part of the Terms of Service. The organisation administrator accepts it on behalf of the organisation when creating a Vettri workspace."
      version="2026-10-01"
      effectiveDate="1 October 2026"
      toc={TOC}
    >
      <h2 id="scope">1. Scope and roles</h2>
      <p>This Data Processing Agreement (&ldquo;DPA&rdquo;) is between the Customer named in the workspace (the <strong>Data Fiduciary</strong>) and <Placeholder>[Vettri legal entity name]</Placeholder> (the <strong>Data Processor</strong>). It applies to digital personal data that the Customer or its users put into Vettri HRMS (&ldquo;Customer Personal Data&rdquo;), and is governed by the Digital Personal Data Protection Act, 2023 and its rules (&ldquo;DPDP Act&rdquo;) and the Information Technology Act, 2000. Terms not defined here have the meaning in the DPDP Act or the <Link href="/terms">Terms of Service</Link>.</p>

      <h2 id="instructions">2. Processing only on instructions</h2>
      <p>Vettri processes Customer Personal Data only to provide the service, on the Customer&rsquo;s documented instructions. The Terms, this DPA, and the Customer&rsquo;s configuration and use of the product (for example enabling modules, the device agent or selfie attendance) are the Customer&rsquo;s instructions. Vettri will tell the Customer if it believes an instruction breaks the law, and will not process the data for its own purposes.</p>

      <h2 id="details">3. Details of processing</h2>
      <table>
        <tbody>
          <tr><th>Data principals</th><td>The Customer&rsquo;s employees, former employees, candidates, contractors and users; contacts such as nominees and emergency contacts.</td></tr>
          <tr><th>Categories of data</th><td>Identity and contact details; employment details; attendance (including biometric device PINs, location and optional selfie at check-in); leave; payroll, tax and statutory identifiers (PAN, UAN, ESI), bank details; documents; expenses; assets; device activity and inventory data from the Windows agent; audit logs.</td></tr>
          <tr><th>Purpose</th><td>Providing HR, attendance, payroll, recruitment, onboarding, expense and IT device management features to the Customer.</td></tr>
          <tr><th>Duration</th><td>The term of the agreement, then as described in section 10.</td></tr>
        </tbody>
      </table>

      <h2 id="confidentiality">4. Confidentiality</h2>
      <p>Vettri ensures that its personnel who can access Customer Personal Data are bound by confidentiality obligations, receive privacy and security training, and access data only when needed to provide or support the service (for example a support request the Customer raises).</p>

      <h2 id="security">5. Security measures</h2>
      <p>Vettri maintains reasonable security safeguards appropriate to the risk, including:</p>
      <ul>
        <li>encryption in transit (TLS) and encryption at rest for databases and file storage;</li>
        <li>logical separation of each customer&rsquo;s data, with company scoping enforced on every request;</li>
        <li>role-based access with organisation, department, team and self scopes, and audit logs of sensitive actions;</li>
        <li>hashed passwords, short-lived sessions, and two-factor authentication that customers can make mandatory;</li>
        <li>least-privilege access for Vettri staff, logging of administrative access, and regular backups;</li>
        <li>vulnerability management and secure development practices.</li>
      </ul>

      <h2 id="sub-processors">6. Sub-processors</h2>
      <p>The Customer authorises Vettri to use the sub-processors listed in the <Link href="/privacy#sharing">Privacy Policy</Link> (currently AWS, Render, Vercel, Razorpay and Zoho Mail <Placeholder>[to confirm]</Placeholder>). Vettri imposes data protection terms on each sub-processor that are no less protective than this DPA and remains responsible for their performance. Vettri will notify administrators at least 30 days before adding or replacing a sub-processor; the Customer may object on reasonable data protection grounds and, if the parties cannot resolve the objection, terminate the affected service and receive a pro-rata refund of prepaid fees.</p>

      <h2 id="rights">7. Data principal requests</h2>
      <p>Vettri provides tools for the Customer to meet its obligations to data principals: employees can download a copy of their data, request corrections and request erasure from the in-app Privacy page; HR handles requests in a queue with a 30-day due date; erasure anonymises personal fields while preserving records the law requires the Customer to keep. If Vettri receives a request directly, it will redirect the person to the Customer and will not respond itself except as instructed.</p>

      <h2 id="breach">8. Personal data breach notification</h2>
      <p>Vettri will notify the Customer&rsquo;s breach contact (configured in Settings &rsaquo; Privacy &amp; Data, or the organisation administrators) without undue delay and in any event within <Placeholder>[48]</Placeholder> hours of becoming aware of a personal data breach affecting Customer Personal Data. The notice will describe the nature of the breach, the data and people likely affected, likely consequences, and the measures taken or proposed. Vettri will help the Customer meet its obligations to inform the Data Protection Board of India and affected data principals, and will meet its own CERT-In reporting obligations.</p>

      <h2 id="transfers">9. Location and transfers</h2>
      <p>Customer Personal Data is primarily hosted in India <Placeholder>[AWS Mumbai region - to confirm]</Placeholder>. Transfers outside India happen only through the sub-processors listed and in compliance with any restrictions notified under section 16 of the DPDP Act.</p>

      <h2 id="return">10. Return and deletion</h2>
      <p>The Customer can export all workspace data at any time as CSV files from Settings &rsaquo; Privacy &amp; Data. When the Customer requests account deletion, deletion is scheduled after a 30-day grace period during which it can be cancelled. At the end of that period Vettri anonymises personal data and removes the account, and backups expire within <Placeholder>[35]</Placeholder> days, unless the law requires Vettri to keep particular records. The Customer is responsible for exporting and retaining any records it must keep under labour and tax laws (for example payroll registers for the statutory period).</p>

      <h2 id="audit">11. Information and audits</h2>
      <p>On reasonable written request, and no more than once a year (or after a breach), Vettri will provide information needed to demonstrate compliance with this DPA, such as security documentation, responses to security questionnaires and summaries of third-party assessments. On-site audits require 30 days&rsquo; notice, are conducted during business hours under confidentiality, and are at the Customer&rsquo;s cost.</p>

      <h2 id="customer">12. Customer responsibilities</h2>
      <ul>
        <li>Have a lawful basis to process employee data and give employees the notices the DPDP Act requires, including a clear notice before using device monitoring (Vettri provides an in-app monitoring notice and consent record).</li>
        <li>Configure access, retention and monitoring-consent settings appropriately, and appoint a grievance officer visible to employees.</li>
        <li>Only upload the data needed for the purposes above, and keep it accurate.</li>
      </ul>

      <h2 id="general">13. General</h2>
      <p>This DPA lasts as long as Vettri processes Customer Personal Data. The liability limits in the Terms apply. If this DPA conflicts with the Terms regarding personal data, this DPA prevails. Governing law and jurisdiction are as set out in the Terms (India; courts at <Placeholder>[city]</Placeholder>).</p>
    </LegalPage>
  );
}
