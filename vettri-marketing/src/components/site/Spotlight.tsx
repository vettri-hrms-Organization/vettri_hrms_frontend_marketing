"use client";

import { useRef, type ReactNode } from "react";

/**
 * Cursor-following glow for cards. One listener on the container writes the
 * pointer position into --mx/--my on whichever .v-spot card is hovered; the
 * glow itself is pure CSS (see .v-spot in site.css).
 */
export default function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const card = (event.target as HTMLElement).closest<HTMLElement>(".v-spot");
    if (!card || !ref.current?.contains(card)) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} className={className} onPointerMove={onPointerMove}>
      {children}
    </div>
  );
}
