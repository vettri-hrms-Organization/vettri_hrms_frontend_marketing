"use client";

import { useState } from "react";
import { Activity, MonitorCheck, Wifi } from "lucide-react";
import BrowserFrame from "./BrowserFrame";

const VIEWS = [
  {
    id: "devices",
    label: "Device inventory",
    icon: MonitorCheck,
    image: "/product/it-devices.webp",
    path: "app.vettrihrms.in/monitoring/devices",
    alt: "Vettri IT device inventory listing each laptop, its employee, status, operating system and hardware scan",
  },
  {
    id: "pulse",
    label: "Live workforce",
    icon: Activity,
    image: "/product/it-monitoring.webp",
    path: "app.vettrihrms.in/monitoring",
    alt: "Vettri IT workforce pulse showing active, idle and offline devices and top applications today",
  },
];

/** Switchable real screens for the Vettri IT highlight section. */
export default function ITShowcase() {
  const [active, setActive] = useState(VIEWS[0].id);
  const view = VIEWS.find((item) => item.id === active) ?? VIEWS[0];

  return (
    <div className="v-it__showcase">
      <div className="v-it__switch" role="tablist" aria-label="Vettri IT screens">
        {VIEWS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`it-tab-${id}`}
            aria-selected={id === active}
            aria-controls="it-panel"
            onClick={() => setActive(id)}
          >
            <Icon size={16} aria-hidden="true" /> {label}
          </button>
        ))}
      </div>
      <div className="v-it__stage" role="tabpanel" id="it-panel" aria-labelledby={`it-tab-${view.id}`}>
        <div className="v-it__glow" aria-hidden="true" />
        <div className="v-it__frame" key={view.id}>
          <BrowserFrame src={view.image} alt={view.alt} path={view.path} />
        </div>
        <div className="v-glass v-it__float" aria-hidden="true">
          <span className="v-glass__icon"><Wifi size={18} /></span>
          <span><b>Agent online</b><small>Live status from the Windows agent</small></span>
        </div>
      </div>
    </div>
  );
}
