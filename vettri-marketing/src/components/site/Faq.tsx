export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: "What does Vettri HRMS include?",
    a: "Employee records and documents, attendance (GPS check-in and biometric devices), leave and holidays, salary structures and payslips, recruitment with a careers page, performance goals and reviews, reports, the Ask Vettri AI assistant, and IT tools for device inventory, software deployment and remote support. Every module is included in one plan.",
  },
  {
    q: "How does IT management work?",
    a: "Install the lightweight Vettri agent on each Windows 10 or 11 laptop using a secure enrolment link. The device then appears in your inventory, linked to its employee, and IT admins can scan hardware, see live status, deploy approved software and start remote support. Activity data is visible only to roles with monitoring access.",
  },
  {
    q: "How is pricing calculated?",
    a: "You pay per employee. The monthly price is ₹199 per employee, with a lower effective rate on quarterly and annual billing. There are no separate module add-ons.",
  },
  {
    q: "Can I try it before paying?",
    a: "Yes. You can start a free trial without entering payment details, set up your organisation and invite your team.",
  },
  {
    q: "Does attendance work with our biometric machines?",
    a: "Vettri accepts punches from biometric devices that support the ADMS push protocol, and employees can also check in from a browser with GPS verification against your office locations. Approved work-from-home days are supported too.",
  },
  {
    q: "Who can see what?",
    a: "Access is role-based. Each permission can be scoped to the whole organisation, a department, a team or only the employee themself, so managers see their team and employees see their own records. Sensitive actions are recorded in audit logs.",
  },
  {
    q: "What can the Ask Vettri AI assistant do?",
    a: "Employees can ask about their leave balance, holidays, documents, payslips and attendance in plain language, and Vettri can prepare a leave request for them to confirm. It works within the user's own permissions, so it only answers with data that person is allowed to see.",
  },
  {
    q: "Can we import our existing employee data?",
    a: "Yes. Employees can be imported in bulk from a spreadsheet template, so you don't have to add people one at a time.",
  },
];

/** Accessible FAQ built on native <details>, so it works without JavaScript. */
export default function Faq({ items = FAQ }: { items?: FaqItem[] }) {
  return (
    <div className="v-faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
