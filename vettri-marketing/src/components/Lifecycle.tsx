"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stages = [
  { name: "Hire", desc: "Candidate context flows straight into a workplace-ready employee record.", tags: ["Offer", "Records"] },
  { name: "Onboard", desc: "Devices, software and access line up automatically as new hires join.", tags: ["Device", "Software", "Access"] },
  { name: "Work", desc: "Attendance, leave and everyday essentials stay in one connected view.", tags: ["Attendance", "Leave"] },
  { name: "Manage", desc: "Managers get context that spans people, performance and equipment.", tags: ["Performance", "Approvals"] },
  { name: "Pay", desc: "Payroll draws on the same operating picture, without re-entry.", tags: ["Payroll", "Payslips"] },
  { name: "Grow", desc: "Career and skill data stay connected to the roles people actually do.", tags: ["Growth", "Reviews"] },
  { name: "Exit", desc: "Offboarding retrieves devices and revokes access in one clear workflow.", tags: ["Access", "Assets"] },
];

export function Lifecycle() {
  const [active, setActive] = useState(2);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const progress = ((active + 1) / stages.length) * 100;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.35 });
    if (shellRef.current) observer.observe(shellRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !isVisible || isPaused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % stages.length), 2800);
    return () => window.clearInterval(timer);
  }, [isPaused, isVisible, reduce]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <div
      ref={shellRef}
      className="lifecycle-shell"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) resume();
      }}
    >
      <div className="lifecycle-track" role="tablist" aria-label="Employee lifecycle stages">
        <div className="lifecycle-progress" style={{ width: `${progress}%` }} aria-hidden />
        {stages.map((stage, index) => (
          <button
            key={stage.name}
            role="tab"
            aria-selected={active === index}
            className={`lifecycle-step ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
          >
            <span className="journey-index">0{index + 1}</span>
            <b>{stage.name}</b>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={stages[active].name}
          className="lifecycle-panel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="eyebrow">Stage 0{active + 1}</div>
            <h4>{stages[active].name}</h4>
            <p>{stages[active].desc}</p>
            <div className="lifecycle-tags">
              {stages[active].tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="interface" aria-hidden>
            <div className="interface-header">
              <strong>{stages[active].name} · preview</strong>
              <span className="status">Example workspace</span>
            </div>
            <div className="preview-tabs">
              {stages[active].tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="preview-callout">
              <div className="avatar" />
              <div>
                <b>Connected context</b>
                <small>People, devices and operations in one view</small>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
