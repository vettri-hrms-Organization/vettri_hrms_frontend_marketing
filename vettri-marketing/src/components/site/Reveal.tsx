import type { ReactNode } from "react";

/**
 * Scroll reveal driven entirely by CSS (animation-timeline: view(), see
 * .v-reveal in site.css). Content is visible by default, so it can never be
 * left hidden if JavaScript fails or the browser lacks scroll timelines.
 * `delay` staggers siblings by shifting where in the scroll the reveal ends.
 */
export default function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`v-reveal ${className}`.trim()} style={delay ? ({ "--v-reveal-shift": `${Math.round(delay / 8)}%` } as React.CSSProperties) : undefined}>
      {children}
    </div>
  );
}
