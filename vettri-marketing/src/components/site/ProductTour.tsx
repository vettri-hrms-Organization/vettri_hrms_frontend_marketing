"use client";

import { useState } from "react";
import { BarChart3, BriefcaseBusiness, CalendarCheck2, CheckCircle2, LayoutDashboard, UserRound, Wallet } from "lucide-react";
import BrowserFrame from "./BrowserFrame";

const TABS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    title: "Know what needs you, the moment you log in",
    copy: "Headcount, who's on leave, pending approvals and expiring documents on one screen, with approve and reject right there.",
    points: ["Live workforce numbers by status and department", "Approve or reject leave without leaving the page", "New joiners, birthdays and the next holiday at a glance"],
    image: "/product/dashboard.webp",
    path: "app.vettrihrms.in/dashboard",
  },
  {
    id: "people",
    label: "People",
    icon: UserRound,
    title: "One complete record for every employee",
    copy: "Profiles, job details, reporting lines, documents, attendance and leave all live on the employee record, so nothing hides in spreadsheets.",
    points: ["Employee directory with search and department filters", "Bulk import from a spreadsheet", "Document tracking with expiry reminders"],
    image: "/product/profile.webp",
    path: "app.vettrihrms.in/employees/12",
  },
  {
    id: "leave",
    label: "Leave",
    icon: CalendarCheck2,
    title: "Leave that runs itself",
    copy: "Employees apply in seconds. Managers see their team's requests. HR configures leave types, balances and the holiday calendar once.",
    points: ["Custom leave types and yearly balances", "Team-scoped approvals for managers", "Company holiday calendar"],
    image: "/product/leave.webp",
    path: "app.vettrihrms.in/leave",
  },
  {
    id: "payroll",
    label: "Payroll",
    icon: Wallet,
    title: "Salary structures and payslips, in one place",
    copy: "Define salary structures with your components, run payroll for a period, and give every employee their payslip history.",
    points: ["Components such as Basic, HRA, PF, PT and TDS", "Payroll runs with review before processing", "Self-service payslips for every employee"],
    image: "/product/payslip.webp",
    path: "app.vettrihrms.in/my-payslip",
  },
  {
    id: "hiring",
    label: "Hiring",
    icon: BriefcaseBusiness,
    title: "From job opening to offer letter",
    copy: "Publish roles on your own careers page, move candidates through stages, collect interview feedback and send offers.",
    points: ["Public careers page with online applications", "Pipeline from applied to hired", "Interview scheduling, feedback and offer letters"],
    image: "/product/pipeline.webp",
    path: "app.vettrihrms.in/recruitment/1",
  },
  {
    id: "insights",
    label: "Insights",
    icon: BarChart3,
    title: "Answers for leadership, without a spreadsheet",
    copy: "An executive overview of headcount, hiring, attendance and leave, plus drill-down reports you can export.",
    points: ["Headcount by department and status", "Hiring funnel and time to hire", "Attendance and leave trends with CSV export"],
    image: "/product/executive.webp",
    path: "app.vettrihrms.in/executive",
  },
];

export default function ProductTour() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((item) => item.id === active) ?? TABS[0];

  return (
    <div className="v-tour">
      <div className="v-tour__tabs" role="tablist" aria-label="Product areas">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`tour-tab-${id}`}
            aria-selected={id === active}
            aria-controls="tour-panel"
            className="v-tour__tab"
            onClick={() => setActive(id)}
          >
            <Icon size={16} aria-hidden="true" /> {label}
          </button>
        ))}
      </div>

      <div className="v-tour__panel" role="tabpanel" id="tour-panel" aria-labelledby={`tour-tab-${tab.id}`}>
        <div className="v-tour__copy">
          <h3 className="v-h3">{tab.title}</h3>
          <p>{tab.copy}</p>
          <ul className="v-checks">
            {tab.points.map((point) => (
              <li key={point}><CheckCircle2 size={17} aria-hidden="true" />{point}</li>
            ))}
          </ul>
        </div>
        <div className="v-tour__shot" key={tab.id}>
          <BrowserFrame src={tab.image} alt={`Vettri HRMS ${tab.label.toLowerCase()} screen`} path={tab.path} />
        </div>
      </div>
      <p className="v-caption">Real product screens, shown with sample data.</p>
    </div>
  );
}
