"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Laptop2, UserRound, Wand2, Wifi } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

function FloatPanel({
  className,
  delay,
  children,
}: {
  className: string;
  delay: number;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`vw-float ${className}`}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function FloatingPanels() {
  return (
    <>
      <FloatPanel className="vw-float-employee" delay={0.95}>
        <span className="vw-float-tag">Example</span>
        <div className="vw-float-row">
          <span className="vw-float-icon"><UserRound size={15} /></span>
          <div>
            <b>Ananya</b>
            <span>Product design · present</span>
          </div>
        </div>
        <span className="vw-float-foot">Laptop assigned</span>
      </FloatPanel>

      <FloatPanel className="vw-float-device" delay={1.08}>
        <span className="vw-float-tag">Example</span>
        <div className="vw-float-row">
          <span className="vw-float-icon"><Wifi size={15} /></span>
          <div>
            <b>DESKTOP-14A2</b>
            <span>Online · agent healthy</span>
          </div>
        </div>
      </FloatPanel>

      <FloatPanel className="vw-float-software" delay={1.2}>
        <span className="vw-float-tag">Example</span>
        <div className="vw-float-row">
          <span className="vw-float-icon"><Laptop2 size={15} /></span>
          <div>
            <b>7-Zip</b>
            <span>18 devices · deployment</span>
          </div>
        </div>
        <div className="vw-float-progress"><span style={{ width: "92%" }} /></div>
        <span className="vw-float-foot">92% complete</span>
      </FloatPanel>

      <FloatPanel className="vw-float-automation" delay={1.32}>
        <span className="vw-float-tag">Example</span>
        <div className="vw-float-row">
          <span className="vw-float-icon"><Wand2 size={15} /></span>
          <div>
            <b>New employee</b>
            <span>Automation</span>
          </div>
        </div>
        <div className="vw-float-flow">
          <span>Device assigned</span>
          <span>Software ready</span>
        </div>
      </FloatPanel>
    </>
  );
}
