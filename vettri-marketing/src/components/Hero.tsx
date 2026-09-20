"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { VettriWorkspace } from "@/components/product-preview/VettriWorkspace";
import { GradientBackground } from "@/components/ui/gradient-background";
import { APP_URL } from "@/lib/config";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section className="hero-v2">
      <GradientBackground variant="dark" overlayOpacity={0.16} />
      <div className="container">
        <div className="hero-copy-center">
          <motion.div className="eyebrow" {...rise(0.05)}>
            THE CONNECTED WORKPLACE PLATFORM
          </motion.div>

          <motion.h1 className="display" {...rise(0.18)}>
            Your people, workplace and technology — finally connected.
          </motion.h1>

          <motion.p className="body-copy" {...rise(0.3)}>
            Vettri brings HR, workplace operations and IT into one connected platform — from employee onboarding and payroll to devices, software and everyday support.
          </motion.p>

          <motion.div className="hero-actions" {...rise(0.42)}>
            <a className="btn btn-primary" href={`${APP_URL}/signup`}>
              Book a demo <ArrowRight size={16} />
            </a>
            <Link className="btn btn-quiet" href="/platform">
              Explore the platform
            </Link>
          </motion.div>

          <motion.div className="proof-line" {...rise(0.52)}>
            <span className="proof-dot" />
            People · Workplace · Technology
          </motion.div>
        </div>

        <div className="hero-dash-stage">
          <VettriWorkspace />
        </div>
      </div>
    </section>
  );
}
