"use client";

import { motion, useReducedMotion } from "framer-motion";

const line = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1 },
};
const node = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export function NetworkDiagram() {
  const reduce = useReducedMotion();

  return (
    <div className="network-wrap">
      <motion.div
        className="network-frame"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <svg viewBox="0 0 520 460" width="100%" role="img" aria-label="Diagram showing HR and Workplace systems connecting through Vettri to a shared employee record">
          {/* connecting lines */}
          <motion.path d="M260 60 L260 110" stroke="#2f80ff" strokeWidth="1.4" strokeOpacity="0.55" variants={line} transition={{ duration: reduce ? 0 : 0.6 }} />
          <motion.path d="M260 110 L140 150" stroke="#2f80ff" strokeWidth="1.4" strokeOpacity="0.55" variants={line} transition={{ duration: reduce ? 0 : 0.6, delay: 0.05 }} />
          <motion.path d="M260 110 L380 150" stroke="#2f80ff" strokeWidth="1.4" strokeOpacity="0.55" variants={line} transition={{ duration: reduce ? 0 : 0.6, delay: 0.05 }} />
          <motion.path d="M140 178 L140 230" stroke="#2f80ff" strokeWidth="1" strokeOpacity="0.35" variants={line} transition={{ duration: reduce ? 0 : 0.5, delay: 0.15 }} />
          <motion.path d="M380 178 L380 230" stroke="#2f80ff" strokeWidth="1" strokeOpacity="0.35" variants={line} transition={{ duration: reduce ? 0 : 0.5, delay: 0.15 }} />
          <motion.path d="M140 320 L140 360 Q140 380 165 380 L235 380" stroke="#2f80ff" strokeWidth="1.4" strokeOpacity="0.55" variants={line} transition={{ duration: reduce ? 0 : 0.6, delay: 0.3 }} />
          <motion.path d="M380 320 L380 360 Q380 380 355 380 L285 380" stroke="#2f80ff" strokeWidth="1.4" strokeOpacity="0.55" variants={line} transition={{ duration: reduce ? 0 : 0.6, delay: 0.3 }} />
          <motion.path d="M260 380 L260 405" stroke="#2f80ff" strokeWidth="1.4" strokeOpacity="0.55" variants={line} transition={{ duration: reduce ? 0 : 0.6, delay: 0.4 }} />

          {/* employee node */}
          <motion.g variants={node} transition={{ duration: 0.5 }}>
            <rect x="185" y="20" width="150" height="40" rx="10" fill="#0d2a4c" stroke="#2f80ff" strokeOpacity="0.4" />
            <text x="260" y="45" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">Employee</text>
          </motion.g>

          {/* HR node */}
          <motion.g variants={node} transition={{ duration: 0.5, delay: 0.15 }}>
            <rect x="65" y="150" width="150" height="34" rx="9" fill="rgba(255,255,255,0.06)" stroke="#3d6491" />
            <text x="140" y="171" textAnchor="middle" fontSize="12" fontWeight="700" fill="#dce9fa">HR</text>
          </motion.g>
          {/* Workplace node */}
          <motion.g variants={node} transition={{ duration: 0.5, delay: 0.15 }}>
            <rect x="305" y="150" width="150" height="34" rx="9" fill="rgba(255,255,255,0.06)" stroke="#3d6491" />
            <text x="380" y="171" textAnchor="middle" fontSize="12" fontWeight="700" fill="#dce9fa">Workplace</text>
          </motion.g>

          {/* HR sub-items */}
          {["Attendance", "Leave", "Payroll", "Documents"].map((t, i) => (
            <motion.g key={t} variants={node} transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}>
              <rect x="55" y={230 + i * 24} width="170" height="20" rx="5" fill="none" stroke="#294a6e" />
              <text x="140" y={244 + i * 24} textAnchor="middle" fontSize="10.5" fill="#a9bcd4">{t}</text>
            </motion.g>
          ))}

          {/* Workplace sub-items */}
          {["Devices", "Software", "Remote support", "Vettri Agent"].map((t, i) => (
            <motion.g key={t} variants={node} transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}>
              <rect x="295" y={230 + i * 24} width="170" height="20" rx="5" fill="none" stroke="#294a6e" />
              <text x="380" y={244 + i * 24} textAnchor="middle" fontSize="10.5" fill="#a9bcd4">{t}</text>
            </motion.g>
          ))}

          {/* Vettri node */}
          <motion.g variants={node} transition={{ duration: 0.5, delay: 0.55 }}>
            <rect x="195" y="405" width="130" height="38" rx="10" fill="#1769ff" />
            <text x="260" y="429" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff">VETTRI</text>
            <circle cx="212" cy="424" r="2.5" fill="#d9a441" />
          </motion.g>
        </svg>
      </motion.div>
      <div className="network-caption">Example system relationship · illustrative</div>
    </div>
  );
}
