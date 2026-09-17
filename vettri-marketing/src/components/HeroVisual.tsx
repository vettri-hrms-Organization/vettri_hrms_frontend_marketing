"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Laptop, Sparkles, UsersRound } from "lucide-react";

const bars = [38, 54, 46, 72, 58, 84, 66];

const floatIn = (delay: number, reduce: boolean | null) => ({
  initial: reduce ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="hero-visual" aria-label="Vettri product preview: workplace command center" role="img">
      <div className="hv-glow" aria-hidden />

      <svg className="hv-lines" viewBox="0 0 600 560" fill="none" aria-hidden>
        <motion.path
          d="M170 90 C120 130, 110 180, 150 240"
          stroke="#2f80ff" strokeOpacity="0.35" strokeWidth="1.2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
        />
        <motion.path
          d="M470 260 C500 300, 495 340, 460 380"
          stroke="#2f80ff" strokeOpacity="0.35" strokeWidth="1.2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, delay: 1.05, ease: "easeOut" }}
        />
        <motion.path
          d="M180 470 C230 440, 300 430, 360 440"
          stroke="#2f80ff" strokeOpacity="0.35" strokeWidth="1.2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, delay: 1.2, ease: "easeOut" }}
        />
      </svg>

      <motion.div className="hv-main" {...floatIn(0.35, reduce)}>
        <div className="hv-topbar">
          <span className="hv-dot" /><span className="hv-dot" /><span className="hv-dot" />
          <span className="hv-topbar-label">vettri / workplace command center</span>
        </div>
        <div className="hv-body">
          <div className="hv-body-head">
            <div>
              <h3>Workplace overview</h3>
              <span>Example workspace · not live data</span>
            </div>
            <Activity size={17} color="var(--blue)" />
          </div>

          <div className="hv-stats">
            <div className="hv-stat">
              <div className="hv-stat-label">People</div>
              <motion.div
                className="hv-stat-value"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.5 }}
              >
                128
              </motion.div>
            </div>
            <div className="hv-stat">
              <div className="hv-stat-label">Devices online</div>
              <motion.div
                className="hv-stat-value blue"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.25, duration: 0.5 }}
              >
                94%
              </motion.div>
            </div>
            <div className="hv-stat">
              <div className="hv-stat-label">Workflows</div>
              <motion.div
                className="hv-stat-value"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.5 }}
              >
                12
              </motion.div>
            </div>
          </div>

          <div className="hv-chart">
            <div className="hv-chart-title"><span>Attendance, this week</span><span>Example data</span></div>
            <div className="hv-bars">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className={`hv-bar ${i === 3 || i === 5 ? "on" : ""}`}
                  initial={{ scaleY: reduce ? 1 : 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 1.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="hv-float hv-people" {...floatIn(0.75, reduce)}>
        <div className="hv-float-head"><UsersRound size={14} /> People</div>
        <div className="hv-ring">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="16" stroke="var(--line)" strokeWidth="4" fill="none" />
            <motion.circle
              cx="20" cy="20" r="16" stroke="var(--blue)" strokeWidth="4" fill="none" strokeLinecap="round"
              strokeDasharray={100.5}
              initial={{ strokeDashoffset: reduce ? 15 : 100.5 }}
              animate={{ strokeDashoffset: 15 }}
              transition={{ duration: 1.1, delay: 1.4, ease: "easeOut" }}
            />
          </svg>
          <span className="hv-ring-label">85%</span>
        </div>
        <div className="hv-people-row">
          <div className="hv-avatars"><span /><span /><span /></div>
          <span className="hv-people-count">on time today</span>
        </div>
      </motion.div>

      <motion.div className="hv-float hv-device" {...floatIn(1.0, reduce)}>
        <div className="hv-float-head"><Laptop size={14} /> Devices</div>
        <div className="hv-device-row"><span>Assigned</span><b>142</b></div>
        <div className="hv-device-row">
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span className="hv-pulse-dot" /> Agent online
          </span>
          <b>134</b>
        </div>
      </motion.div>

      <motion.div className="hv-float hv-software" {...floatIn(1.15, reduce)}>
        <div className="hv-float-head"><Sparkles size={14} /> Software deployment</div>
        <div className="hv-progress-track">
          <motion.div
            className="hv-progress-fill"
            initial={{ width: reduce ? "72%" : "0%" }}
            animate={{ width: "72%" }}
            transition={{ duration: 1.3, delay: 1.6, ease: [0.16, 1, 0.3, 1] as const }}
          />
        </div>
        <div className="hv-software-foot"><span>Workspace tools</span><span>Verifying…</span></div>
      </motion.div>

      <motion.div className="hv-float hv-automation" {...floatIn(1.35, reduce)}>
        <div className="hv-float-head"><Sparkles size={14} /> Automation</div>
        <div className="hv-automation-body">New hire → device assigned → software ready.</div>
        <div className="hv-automation-badge"><span /> Running</div>
      </motion.div>
    </div>
  );
}
