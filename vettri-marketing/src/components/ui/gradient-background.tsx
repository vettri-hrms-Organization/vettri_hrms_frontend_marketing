"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

export type GradientVariant = "navy" | "blue" | "soft" | "dark";

type GradientBackgroundProps = {
  variant?: GradientVariant;
  overlayOpacity?: number;
  className?: string;
  children?: ReactNode;
};

const gradients: Record<GradientVariant, string[]> = {
  navy: [
    "linear-gradient(135deg, #071B33 0%, #0B2342 45%, #1769FF 100%)",
    "linear-gradient(135deg, #071B33 0%, #102A43 50%, #2F80FF 100%)",
  ],
  blue: [
    "linear-gradient(135deg, #071B33 0%, #0B2342 45%, #1769FF 100%)",
    "linear-gradient(135deg, #071B33 0%, #102A43 50%, #2F80FF 100%)",
  ],
  soft: [
    "linear-gradient(135deg, #F6F9FD 0%, #EEF5FF 50%, #FFFFFF 100%)",
    "linear-gradient(135deg, #EEF5FF 0%, #FFFFFF 58%, #F6F9FD 100%)",
  ],
  dark: [
    "linear-gradient(135deg, #051326 0%, #071B33 55%, #123E7A 100%)",
    "linear-gradient(135deg, #071B33 0%, #0B2342 58%, #1769FF 100%)",
  ],
};

export function GradientBackground({
  variant = "soft",
  overlayOpacity = 0,
  className = "",
  children,
}: GradientBackgroundProps) {
  const reduce = useReducedMotion();
  const background = gradients[variant];
  const overlay = Math.min(Math.max(overlayOpacity, 0), 1);

  return (
    <div className={`gradient-background gradient-background-${variant} ${className}`} aria-hidden={children ? undefined : true}>
      {reduce ? (
        <div className="gradient-background-layer" style={{ backgroundImage: background[0] }} />
      ) : (
        <motion.div
          className="gradient-background-layer"
          initial={{ backgroundImage: background[0] }}
          animate={{ backgroundImage: background }}
          transition={{ duration: 16, delay: 0.35, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      )}
      {overlay > 0 && <div className="gradient-background-overlay" style={{ "--gradient-overlay-opacity": overlay } as CSSProperties} />}
      {children && <div className="gradient-background-content">{children}</div>}
    </div>
  );
}
