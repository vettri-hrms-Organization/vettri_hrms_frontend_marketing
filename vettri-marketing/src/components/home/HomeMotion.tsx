"use client";

import { useEffect } from "react";

/**
 * Section entrances: elements marked data-enter rise in once as they reach the viewport, staggered by
 * --d. The hidden state only exists under html.js and prefers-reduced-motion: no-preference (home.css),
 * so content is never lost without script or with reduced motion.
 */
export default function HomeMotion() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-enter]"));
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      // Start a little before the element enters, so content near the end of the page is never caught hidden.
      { rootMargin: "0px 0px 12% 0px", threshold: 0 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
