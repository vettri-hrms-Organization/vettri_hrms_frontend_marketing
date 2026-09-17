"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ConnectionLines } from "./ConnectionLines";
import { FloatingPanels } from "./FloatingPanels";
import { WorkspaceSidebar, WorkspaceTopbar } from "./WorkspaceChrome";
import { WorkspaceDashboard } from "./WorkspaceDashboard";

export function VettriWorkspace() {
  const reduce = useReducedMotion();

  return (
    <div className="vw-stage" aria-hidden>
      <ConnectionLines />

      <motion.div
        className="vw-frame"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 46, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <WorkspaceTopbar />
        <div className="vw-body">
          <WorkspaceSidebar />
          <WorkspaceDashboard />
        </div>
      </motion.div>

      <FloatingPanels />
    </div>
  );
}
