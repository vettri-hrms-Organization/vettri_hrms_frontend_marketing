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
            Vettri workplace platform
          </motion.div>

          <motion.h1 className="display" {...rise(0.18)}>
            HR meets workplace operations
          </motion.h1>

          <motion.p className="body-copy" {...rise(0.3)}>
            One connected platform for your people, payroll, attendance, devices, software and everyday
            workplace operations — built to feel effortless for HR and IT alike.
          </motion.p>

          <motion.div className="hero-actions" {...rise(0.42)}>
            <a className="btn btn-primary" href={`${APP_URL}/signup`}>
              Start free <ArrowRight size={16} />
            </a>
            <Link className="btn btn-quiet" href="/platform">
              See it in action
            </Link>
          </motion.div>

          <motion.div className="proof-line" {...rise(0.52)}>
            <span className="proof-dot" />
            14-day trial · No credit card required
          </motion.div>
        </div>

        <div className="hero-dash-stage">
          <VettriWorkspace />
        </div>
      </div>
    </section>
  );
}
