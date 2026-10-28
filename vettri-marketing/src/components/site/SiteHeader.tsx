"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { APP_URL } from "@/lib/config";

const NAV = [
  { href: "/#product", label: "Product" },
  { href: "/#features", label: "Features" },
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

/** `solid` keeps the dark bar visible at the top, for pages without a dark hero. */
export default function SiteHeader({ solid = false }: { solid?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`v-header${scrolled || open || solid ? " is-scrolled" : ""}`}>
      <div className="v-container v-header__bar">
        <Link href="/" className="v-logo" aria-label="Vettri HRMS home">
          <Image src="/brand/vettri-favicon.png" alt="" width={34} height={34} priority />
          Vettri <small>HRMS</small>
        </Link>

        <nav className="v-nav" aria-label="Main">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="v-header__actions">
          <a className="v-header__signin" href={`${APP_URL}/login`}>Sign in</a>
          <a className="v-btn v-btn--primary v-btn--sm" href={`${APP_URL}/signup`}>
            Start free trial <ArrowRight size={15} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="v-menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="v-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <span className="v-progress" aria-hidden="true" />
      <nav id="v-mobile-nav" className={`v-mobile-nav${open ? " is-open" : ""}`} aria-label="Mobile">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
        <a href={`${APP_URL}/login`}>Sign in</a>
        <a className="v-btn v-btn--primary" href={`${APP_URL}/signup`}>
          Start free trial <ArrowRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
