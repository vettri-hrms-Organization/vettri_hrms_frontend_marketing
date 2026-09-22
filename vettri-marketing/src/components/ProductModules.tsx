"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck2,
  Laptop2,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const modules = [
  {
    id: "people",
    label: "Core HR",
    icon: UsersRound,
    eyebrow: "People operations",
    title: "Give every employee one reliable home.",
    body: "Profiles, documents, org structure and lifecycle changes stay connected from the first day to the last.",
    stats: ["Employee records", "Documents", "Lifecycle workflows"],
    accent: "#1769ff",
  },
  {
    id: "payroll",
    label: "Payroll & time",
    icon: CalendarCheck2,
    eyebrow: "HR operations",
    title: "Run the everyday work with less reconciliation.",
    body: "Attendance, leave, approvals and payroll inputs move through one clear operating picture.",
    stats: ["Attendance", "Leave", "Payroll context"],
    accent: "#1c9a6c",
  },
  {
    id: "hiring",
    label: "Hiring",
    icon: BriefcaseBusiness,
    eyebrow: "Talent workflows",
    title: "Move from candidate to connected employee.",
    body: "Keep hiring progress, offers, onboarding tasks and workplace readiness in the same flow.",
    stats: ["Pipeline", "Offers", "Onboarding"],
    accent: "#d9a441",
  },
  {
    id: "performance",
    label: "Performance",
    icon: Target,
    eyebrow: "Growth and alignment",
    title: "Make progress visible between review cycles.",
    body: "Goals, feedback, one-to-ones and growth conversations give managers better context to act.",
    stats: ["Goals", "Feedback", "Reviews"],
    accent: "#8b63d9",
  },
  {
    id: "workplace",
    label: "Workplace IT",
    icon: Laptop2,
    eyebrow: "Technology operations",
    title: "Know the people behind every device.",
    body: "Assets, software, deployments and support stay tied to the employee and team they serve.",
    stats: ["Devices", "Software", "Support"],
    accent: "#e2684d",
  },
  {
    id: "experience",
    label: "Employee experience",
    icon: Sparkles,
    eyebrow: "Self-service",
    title: "Make the essentials easy to find.",
    body: "Give employees a calm, useful surface for attendance, leave, payslips, assets and requests.",
    stats: ["Self-service", "Approvals", "Notifications"],
    accent: "#1c8ca8",
  },
] as const;

export function ProductModules() {
  const [activeId, setActiveId] = useState<(typeof modules)[number]["id"]>("people");
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const active = modules.find((module) => module.id === activeId) ?? modules[0];
  const Icon = active.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.35 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !isVisible || isPaused) return;
    const timer = window.setInterval(() => {
      setActiveId((current) => {
        const index = modules.findIndex((module) => module.id === current);
        return modules[(index + 1) % modules.length].id;
      });
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused, isVisible, reduce]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <section
      ref={sectionRef}
      className="modules-section"
      id="modules"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) resume();
      }}
    >
      <div className="container">
        <div className="modules-heading">
          <div>
            <div className="eyebrow">One connected platform</div>
            <h2 className="section-title">Every module works better with the others.</h2>
          </div>
          <p className="body-copy">Start with the workflows you need today. Keep the context you will need tomorrow.</p>
        </div>

        <div className="module-tabs" role="tablist" aria-label="Vettri product modules">
          {modules.map((module) => {
            const ModuleIcon = module.icon;
            return (
              <button
                key={module.id}
                className={`module-tab ${activeId === module.id ? "active" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeId === module.id}
                onClick={() => setActiveId(module.id)}
              >
                <ModuleIcon size={16} />
                {module.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className="module-panel"
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="module-copy">
              <div className="module-icon" style={{ color: active.accent, background: `${active.accent}14` }}>
                <Icon size={22} />
              </div>
              <div className="eyebrow">{active.eyebrow}</div>
              <h3>{active.title}</h3>
              <p>{active.body}</p>
              <Link href="/platform" className="text-link">Explore the platform <ArrowRight size={14} /></Link>
            </div>
            <div className="module-preview" aria-hidden>
              <div className="module-preview-top"><span>Vettri workspace</span><span className="status">Product preview</span></div>
              <div className="module-preview-heading"><span className="module-preview-dot" style={{ background: active.accent }} /><strong>{active.label}</strong><span>Today</span></div>
              <div className="module-stat-grid">
                {active.stats.map((stat, index) => (
                  <div className="module-stat" key={stat}>
                    <small>{stat}</small>
                    <b>{["1,248", "96.8%", "42"][index] ?? "12"}</b>
                    <span className="module-bar"><i style={{ width: `${[88, 72, 58][index] ?? 64}%`, background: active.accent }} /></span>
                  </div>
                ))}
              </div>
              <div className="module-activity"><span className="activity-pulse" style={{ background: active.accent }} /> Context synced across people, operations and technology</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
