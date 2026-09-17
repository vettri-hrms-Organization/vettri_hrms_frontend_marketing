"use client";

import { motion, useReducedMotion } from "framer-motion";

const paths = [
  { d: "M 130 150 C 220 150, 260 190, 360 210", delay: 1.15 },
  { d: "M 870 170 C 770 170, 720 200, 630 220", delay: 1.28 },
  { d: "M 110 470 C 210 470, 260 430, 370 400", delay: 1.4 },
  { d: "M 890 510 C 780 510, 720 460, 620 420", delay: 1.52 },
];

export function ConnectionLines() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <svg className="vw-connections" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="vwLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2f80ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#2f80ff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#2f80ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {paths.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          fill="none"
          stroke="url(#vwLine)"
          strokeWidth={1.4}
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </svg>
  );
}
