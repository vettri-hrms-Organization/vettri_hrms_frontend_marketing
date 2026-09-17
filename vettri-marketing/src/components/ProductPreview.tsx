import { Activity, CheckCircle2, Laptop, ShieldCheck, UsersRound } from "lucide-react";

type Variant = "command" | "employee" | "software" | "assets" | "hr";

export function ProductPreview({ variant = "command" }: { variant?: Variant }) {
  if (variant === "employee") {
    return (
      <div className="interface employee-preview">
        <div className="interface-header"><strong>My Vettri</strong><span className="status">Product preview</span></div>
        <div className="profile-row"><div className="avatar large" /><div><b>My workspace</b><small>Profile, leave and documents in one place</small></div></div>
        <div className="preview-tabs"><span>Attendance</span><span>Leave</span><span>Documents</span><span>Payslips</span></div>
        <div className="preview-callout"><CheckCircle2 size={17} color="var(--green)" /><div><b>Everything in context</b><small>Example employee experience surface</small></div></div>
      </div>
    );
  }

  if (variant === "software") {
    return (
      <div className="interface software-preview">
        <div className="interface-header"><strong>Software catalog</strong><span className="status">Example workflow</span></div>
        <div className="software-flow"><span>Select application</span><i>→</i><span>Select device</span><i>→</i><span>Deploy</span><i>→</i><span>Verify</span></div>
        <div className="software-item"><Laptop size={18} color="var(--blue)" /><div><b>Workspace tools</b><small>Sample deployment to an assigned device</small></div><span className="list-state">Ready to review</span></div>
      </div>
    );
  }

  if (variant === "assets") {
    return (
      <div className="interface">
        <div className="interface-header"><strong>Assets &amp; devices</strong><span className="status">Example workspace</span></div>
        <div className="software-item"><Laptop size={18} color="var(--blue)" /><div><b>MacBook Pro 14&quot;</b><small>Assigned · Engineering</small></div><span className="list-state">Online</span></div>
        <div className="software-item" style={{ marginTop: 10 }}><ShieldCheck size={18} color="var(--blue)" /><div><b>Device governance</b><small>Role-based access, audit trail</small></div><span className="list-state">Compliant</span></div>
        <div className="preview-tabs" style={{ marginTop: 18 }}><span>142 assigned</span><span>134 online</span><span>8 pending</span></div>
      </div>
    );
  }

  if (variant === "hr") {
    return (
      <div className="interface">
        <div className="interface-header"><strong>People operations</strong><span className="status">Example workspace</span></div>
        <div className="profile-row"><div className="avatar" /><div><b>Attendance &amp; leave</b><small>128 employees, connected in one view</small></div></div>
        <div className="preview-tabs" style={{ marginTop: 12 }}><span>Payroll</span><span>Documents</span><span>Reports</span></div>
        <div className="preview-callout" style={{ marginTop: 12 }}><UsersRound size={17} color="var(--blue)" /><div><b>Operational clarity</b><small>Every HR moment, one operating picture</small></div></div>
      </div>
    );
  }

  return (
    <div className="interface">
      <div className="interface-header"><strong>Workplace command center</strong><span className="status">Example workspace</span></div>
      <div className="profile-row"><Activity size={18} color="var(--blue)" /><div><b>See the work behind the work</b><small>Sample command-center surface for product exploration</small></div></div>
    </div>
  );
}
