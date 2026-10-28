"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Fades content up as it scrolls into view. Content is never left hidden:
 *  it also reveals if IntersectionObserver is unavailable or after 1.5s. */
export default function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    observer.observe(node);
    const fallback = window.setTimeout(() => setVisible(true), 1500);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} className={`v-reveal${visible ? " is-visible" : ""} ${className}`.trim()} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
