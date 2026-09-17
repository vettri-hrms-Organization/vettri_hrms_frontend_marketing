import { Laptop2, PlayCircle, ShieldCheck, UserPlus, UsersRound, Wallet } from "lucide-react";

const kpis = [
  { label: "People", value: "1,248", icon: UsersRound },
  { label: "Attendance", value: "96.8%", icon: ShieldCheck },
  { label: "Devices online", value: "42", icon: Laptop2 },
  { label: "Deployments", value: "12", icon: PlayCircle },
];

const activity = [
  { label: "Ananya R. clocked in", meta: "Product design · on time" },
  { label: "Leave approved", meta: "Engineering · 2 requests" },
  { label: "New hire onboarded", meta: "Device and software auto-assigned" },
];

const workplace = [
  { label: "Devices online", value: "42 / 46" },
  { label: "Software deployments", value: "92% complete" },
  { label: "Pending actions", value: "3 to review" },
];

const quickActions = [
  { label: "Add employee", icon: UserPlus },
  { label: "Run payroll", icon: Wallet },
  { label: "Deploy software", icon: PlayCircle },
  { label: "Assign device", icon: Laptop2 },
];

export function WorkspaceDashboard() {
  return (
    <div className="vw-main">
      <div className="vw-main-head">
        <div>
          <h3>Good morning, Priya.</h3>
          <span>Nimbus Retail · overview</span>
        </div>
        <span className="vw-preview-tag">Product preview</span>
      </div>

      <div className="vw-kpi-grid">
        {kpis.map((kpi) => (
          <div className="vw-kpi" key={kpi.label}>
            <kpi.icon size={15} />
            <div>
              <b>{kpi.value}</b>
              <span>{kpi.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="vw-columns">
        <div className="vw-panel">
          <b>Workforce activity</b>
          <div className="vw-activity-list">
            {activity.map((row) => (
              <div className="vw-activity-row" key={row.label}>
                <span className="vw-dot" />
                <div>
                  <span className="vw-activity-label">{row.label}</span>
                  <span className="vw-activity-meta">{row.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="vw-panel">
          <b>Workplace health</b>
          <div className="vw-health-list">
            {workplace.map((row) => (
              <div className="vw-health-row" key={row.label}>
                <span>{row.label}</span>
                <b>{row.value}</b>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="vw-quick-actions">
        {quickActions.map((action) => (
          <span className="vw-quick-action" key={action.label}>
            <action.icon size={13} />
            {action.label}
          </span>
        ))}
      </div>
    </div>
  );
}
