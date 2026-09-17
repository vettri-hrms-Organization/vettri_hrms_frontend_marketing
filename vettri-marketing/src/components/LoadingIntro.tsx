"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { VettriLogo } from "@/components/brand/VettriLogo";
import { useEffect, useState } from "react";

const SESSION_KEY = "vettri-intro-seen";
const MAX_VISIBLE_MS = 1400;

export function LoadingIntro() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    setVisible(true);
    const dismiss = () => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(false);
    };
    const failSafe = setTimeout(dismiss, MAX_VISIBLE_MS);
    return () => {
      clearTimeout(failSafe);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-overlay"
          role="presentation"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <VettriLogo size="lg" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
