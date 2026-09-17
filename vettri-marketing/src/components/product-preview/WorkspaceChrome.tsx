import { Bell, Search } from "lucide-react";
import { VettriLogo } from "@/components/brand/VettriLogo";

const sidebarItems = [
  "Overview",
  "People",
  "Attendance",
  "Leave",
  "Payroll",
  "Assets",
  "Devices",
  "Software",
  "Remote support",
  "Reports",
];

export function WorkspaceTopbar() {
  return (
    <div className="vw-topbar">
      <div className="vw-brand"><VettriLogo variant="mark" size="sm" alt="Vettri" /></div>
      <span className="vw-workspace-name">Nimbus Retail · Workspace</span>
      <div className="vw-search">
        <Search size={13} />
        Search people, devices, workflows…
      </div>
      <div className="vw-topbar-actions">
        <Bell size={16} />
        <div className="vw-avatar" />
      </div>
    </div>
  );
}

export function WorkspaceSidebar() {
  return (
    <nav className="vw-sidebar" aria-hidden>
      {sidebarItems.map((item, i) => (
        <span className={`vw-sidebar-item ${i === 0 ? "is-active" : ""}`} key={item}>
          {item}
        </span>
      ))}
    </nav>
  );
}
