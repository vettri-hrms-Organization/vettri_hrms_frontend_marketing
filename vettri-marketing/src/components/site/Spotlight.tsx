"use client";

import { useRef, type ReactNode } from "react";

/**
 * Cursor-following glow for cards. One pointer listener on the container
 * writes the pointer position into --mx/--my on the hovered .v-spot card;
 * the glow itself is pure CSS (see .v-spot in site.css).
 */
export default function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const card = (event.target as HTMLElement).closest<HTMLElement>(".v-spot");
    if (!card || !ref.current?.contains(card)) return;
    const rect = card.getBoundingClientRect();
    // Page zoom makes viewport pixels differ from the card's CSS pixels.
    const scale = card.offsetWidth ? rect.width / card.offsetWidth : 1;
    card.style.setProperty("--mx", `${(event.clientX - rect.left) / scale}px`);
    card.style.setProperty("--my", `${(event.clientY - rect.top) / scale}px`);
  }

  return (
    <div ref={ref} className={className} onPointerMove={onPointerMove}>
      {children}
    </div>
  );
}
