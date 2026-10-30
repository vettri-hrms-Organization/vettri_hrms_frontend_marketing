/* Draft — to be reviewed by legal counsel before publication. */
import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import LegalPage, { Placeholder } from "@/components/site/LegalPage";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How Vettri HRMS handles personal data under India's Digital Personal Data Protection Act, 2023 - as a processor for employers and a fiduciary for its own account holders.",
  path: "/privacy",
});

const TOC = [
  { id: "roles", label: "Who is responsible" },
  { id: "what-we-collect", label: "Data we collect" },
  { id: "employee-data", label: "Employee data we process for employers" },
  { id: "employee-monitoring", label: "Employee device monitoring" },
  { id: "purposes", label: "Why we use it" },
  { id: "sharing", label: "Sharing and sub-processors" },
  { id: "location", label: "Where data is stored" },
  { id: "retention", label: "How long we keep it" },
  { id: "security", label: "Security" },
  { id: "rights", label: "Your rights" },
  { id: "children", label: "Children" },
  { id: "cookies", label: "Cookies" },
  { id: "breach", label: "Data breaches" },
  { id: "changes", label: "Changes" },
  { id: "grievance", label: "Grievance officer" },
];

const SUB_PROCESSORS = [
  { name: "Amazon Web Services (AWS)", purpose: "Cloud hosting, database and encrypted file storage", location: "India (Mumbai region)" },
  { name: "Render", purpose: "Application hosting", location: "[region - to confirm]" },
  { name: "Vercel", purpose: "Website and web app delivery (CDN)", location: "Global edge network" },
  { name: "Razorpay", purpose: "Subscription payments and verification charges", location: "India" },
  { name: "Zoho Mail", purpose: "Transactional and support email", location: "India" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lead="This policy explains what personal data Vettri HRMS handles, why, and the choices and rights you have under the Digital Personal Data Protection Act, 2023."
      version="2026-10-01"
      effectiveDate="1 October 2026"
      toc={TOC}
    >
      <h2 id="roles">1. Who is responsible for your data</h2>
      <p>Vettri HRMS is operated by <Placeholder>[Vettri legal entity name]</Placeholder> (&ldquo;Vettri&rdquo;, &ldquo;we&rdquo;). We play two different roles:</p>
      <ul>
        <li><strong>Data processor for employers.</strong> When an organisation (your employer) uses Vettri to manage its people, the employer is the <em>data fiduciary</em>: it decides what employee data is collected and why. We process that data only on the employer&rsquo;s instructions, under our <Link href="/dpa">Data Processing Agreement</Link>. If you are an employee, your employer&rsquo;s own privacy notice applies, and requests about your data should go to your employer first; the Privacy page inside the app shows your employer&rsquo;s grievance officer.</li>
        <li><strong>Data fiduciary for our own account holders.</strong> For the people who sign up for, buy, administer or contact us about Vettri (for example the details you give at signup or in a demo request), and for website visitors, Vettri is the data fiduciary and this policy is our notice to you.</li>
      </ul>

      <h2 id="what-we-collect">2. Personal data we collect as a fiduciary</h2>
      <ul>
        <li><strong>Account and contact details:</strong> name, work email, phone, job role, organisation name, industry, size and country.</li>
        <li><strong>Billing details:</strong> plan, billing contact, GSTIN and billing address. Card or UPI details are handled by our payment partner; we receive only a payment reference and status.</li>
        <li><strong>Security and usage data:</strong> sign-in history, IP address, browser and device type, two-factor settings, and records of which legal documents you accepted and when.</li>
        <li><strong>Support and communications:</strong> messages you send us and demo or contact-form details.</li>
      </ul>

      <h2 id="employee-data">3. Employee data we process for employers</h2>
      <p>Depending on the modules an employer uses, Vettri may process: employee profile and contact details, job and reporting information, attendance punches (biometric device PINs, browser check-ins with location, optional selfie at check-in), leave, payroll and statutory identifiers (PAN, UAN, ESI, bank account), documents uploaded by HR or the employee, expense claims, onboarding records, assigned assets and devices, and the device data described below. We do not decide these purposes; the employer does.</p>
      <p>Employees can see their own data, download a copy, ask for corrections and (after they leave and the employer&rsquo;s retention period ends) ask for erasure, from the <strong>Privacy</strong> page in the app.</p>

      <h2 id="employee-monitoring">4. Employee device monitoring</h2>
      <p>If an employer installs the Vettri Windows Agent on work computers, the agent can collect:</p>
      <ul>
        <li>applications in use and active window titles, with start and end times;</li>
        <li>activity signals (active vs idle time based on keyboard and mouse activity counts &mdash; not the keys typed);</li>
        <li>device and hardware inventory: model, serial number, processor, memory, disk, Windows version, BIOS and installed software;</li>
        <li>device status: online/offline heartbeats, agent version and IP address;</li>
        <li>remote support sessions started by IT (screen view or control, and commands), which are logged.</li>
      </ul>
      <p>The agent does <strong>not</strong> record keystrokes or typed content, passwords, browser data, personal file contents, webcam or microphone.</p>
      <p>Employers can require each employee to read and accept a monitoring notice before a device is enrolled. Employees can review and withdraw consent from the Privacy page; the employer is notified and decides the consequences under its own policies, and may configure monitoring to pause automatically on withdrawal.</p>

      <h2 id="purposes">5. Why we use personal data (as a fiduciary)</h2>
      <table>
        <thead><tr><th>Purpose</th><th>Basis under the DPDP Act</th></tr></thead>
        <tbody>
          <tr><td>Create and run your account, provide the service and support</td><td>Your consent, given when you sign up and accept these terms; performance of the service you asked for</td></tr>
          <tr><td>Billing, invoicing and GST compliance</td><td>Consent and compliance with law (s.7)</td></tr>
          <tr><td>Security, fraud prevention, audit logs and abuse protection</td><td>Legitimate uses including compliance with law and preventing harm (s.7)</td></tr>
          <tr><td>Service emails (verification, security alerts, product changes that affect you)</td><td>Consent / performance of the service</td></tr>
          <tr><td>Product updates and marketing emails</td><td>Consent, which you can withdraw at any time via the unsubscribe link</td></tr>
        </tbody>
      </table>
      <p>We do not sell personal data and do not use employee data to train public AI models. The in-app assistant only reads data the signed-in user is already permitted to see.</p>

      <h2 id="sharing">6. Sharing and sub-processors</h2>
      <p>We share personal data only with service providers that help us run Vettri, under contracts that require them to protect it, with authorities when the law requires, or with a successor if our business is transferred (with notice to you). Current sub-processors:</p>
      <table>
        <thead><tr><th>Sub-processor</th><th>Purpose</th><th>Location</th></tr></thead>
        <tbody>
          {SUB_PROCESSORS.map((sp) => (
            <tr key={sp.name}><td>{sp.name}</td><td>{sp.purpose}</td><td>{sp.location}</td></tr>
          ))}
        </tbody>
      </table>
      <p><Placeholder>[Sub-processor list to be confirmed before publication.]</Placeholder> We will give administrators at least 30 days&rsquo; notice before adding a sub-processor that handles Customer Data.</p>

      <h2 id="location">7. Where data is stored</h2>
      <p>Customer Data is primarily stored in India (<Placeholder>[AWS ap-south-1, Mumbai - to confirm]</Placeholder>). Some providers above (for example content delivery and email) may process limited data outside India. Any transfer outside India follows the DPDP Act and any restrictions notified by the Central Government.</p>

      <h2 id="retention">8. How long we keep data</h2>
      <ul>
        <li><strong>Account data:</strong> while your account is active, and for up to <Placeholder>[90 days]</Placeholder> after closure to handle queries, unless the law requires longer.</li>
        <li><strong>Invoices and payment records:</strong> 8 years, as required by GST and tax law.</li>
        <li><strong>Security logs:</strong> up to <Placeholder>[1 year]</Placeholder>.</li>
        <li><strong>Employee data:</strong> as configured by the employer. By default Vettri keeps payroll and statutory records for 7 years after an employee exits and other personal data for 24 months, after which an exited employee may request erasure. On erasure we anonymise the person&rsquo;s name, contact, PAN, bank and address details and delete their uploaded documents, while keeping payroll figures the law requires.</li>
        <li><strong>Backups:</strong> rotate out within <Placeholder>[35 days]</Placeholder>.</li>
      </ul>

      <h2 id="security">9. Security</h2>
      <p>We use reasonable security safeguards as required by the DPDP Act and the Information Technology Act, 2000, including encryption in transit, hashed passwords, optional or mandatory two-factor authentication, per-company data isolation, role-based access with scopes, and audit logs. See our <Link href="/security">Security page</Link>.</p>

      <h2 id="rights">10. Your rights</h2>
      <p>Under the DPDP Act you have the right to:</p>
      <ul>
        <li>get a summary of your personal data and how it is processed, and the identities of those it has been shared with;</li>
        <li>correct, complete or update inaccurate data;</li>
        <li>erasure of data that is no longer needed for the purpose or required by law;</li>
        <li>withdraw consent at any time (this does not affect processing already done);</li>
        <li>nominate another person to exercise your rights in case of death or incapacity;</li>
        <li>grievance redressal, and to complain to the Data Protection Board of India if your grievance is not resolved.</li>
      </ul>
      <p>Account holders can contact us at <a href="mailto:privacy@vettrihrms.in">privacy@vettrihrms.in</a>. Employees should use the Privacy page in the app or contact their employer&rsquo;s grievance officer; we help employers respond. We respond within 30 days.</p>

      <h2 id="children">11. Children</h2>
      <p>Vettri is a business service and is not intended for children. Employers who process data of employees under 18 must obtain verifiable parental consent where the law requires.</p>

      <h2 id="cookies">12. Cookies</h2>
      <p>Our website and app use essential cookies and local storage to keep you signed in and remember preferences. <Placeholder>[Describe analytics cookies, if any, and how to opt out.]</Placeholder></p>

      <h2 id="breach">13. Personal data breaches</h2>
      <p>If a personal data breach occurs, we will inform affected customers without undue delay so they can meet their obligations, and notify the Data Protection Board of India and affected individuals where we are the fiduciary, as required by the DPDP Act and its rules. Organisations can record a breach contact in Settings &rsaquo; Privacy &amp; Data. CERT-In reporting obligations under the IT Act are also followed.</p>

      <h2 id="changes">14. Changes to this policy</h2>
      <p>We will post updates here with a new version and date. If a change is material, signed-in users will be asked to review and accept the new version.</p>

      <h2 id="grievance">15. Grievance officer</h2>
      <p>Name: <Placeholder>[Grievance officer name]</Placeholder><br />Email: <a href="mailto:grievance@vettrihrms.in">grievance@vettrihrms.in</a><br />Address: <Placeholder>[postal address]</Placeholder><br />We acknowledge grievances within 72 hours and aim to resolve them within 30 days.</p>
    </LegalPage>
  );
}
