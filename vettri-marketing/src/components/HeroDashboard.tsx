"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bell, Search, Sparkles } from "lucide-react";
import { VettriLogo } from "@/components/brand/VettriLogo";

const nav = ["Overview", "People", "Attendance", "Devices", "Software", "Automation"];
const bars = [42, 58, 50, 74, 62, 88, 70, 54, 66, 80, 60, 46];

export function HeroDashboard() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="hero-dash-frame"
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="hero-dash-clip">
        <div className="hd-topbar">
          <div className="hd-brand"><VettriLogo variant="mark" size="sm" alt="Vettri" /></div>
          <div className="hd-search"><Search size={13} /> Search people, devices, workflows…</div>
          <div className="hd-icons">
            <Bell size={16} />
            <Sparkles size={16} />
            <div className="hd-avatar" />
          </div>
        </div>
        <div className="hd-body">
          <div className="hd-side">
            {nav.map((item, i) => (
              <div className={`hd-side-item ${i === 0 ? "active" : ""}`} key={item}>{item}</div>
            ))}
          </div>
          <div className="hd-main">
            <div className="hd-main-head">
              <div>
                <h3>Workplace overview</h3>
                <span>Product preview · representative data</span>
              </div>
            </div>
            <div className="hd-stat-grid">
              <div className="hd-stat"><span>People</span><b>128</b></div>
              <div className="hd-stat"><span>Devices online</span><b>94%</b></div>
              <div className="hd-stat"><span>Workflows</span><b>12</b></div>
              <div className="hd-stat"><span>Open requests</span><b>3</b></div>
            </div>
            <div className="hd-panels">
              <div className="hd-chart-card">
                <b>Attendance, last 12 weeks</b>
                <div className="hd-bars2">
                  {bars.map((h, i) => (
                    <span key={i} className={i === 5 || i === 9 ? "on" : ""} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="hd-list-card">
                <b>Recent activity</b>
                <div className="hd-list-row"><span className="hd-dot" /> Device assigned · onboarding</div>
                <div className="hd-list-row"><span className="hd-dot" /> Software deployed · 14 devices</div>
                <div className="hd-list-row"><span className="hd-dot" /> Leave approved · Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-dash-fade" aria-hidden />
    </motion.div>
  );
}
