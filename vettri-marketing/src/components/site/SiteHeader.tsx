"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { APP_URL } from "@/lib/config";

const NAV = [
  { href: "/#features", label: "Features" },
  { href: "/#tour", label: "Product tour" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="v-header">
      <div className="v-container v-header__bar">
        <Link href="/" className="v-logo" aria-label="Vettri HRMS home">
          <span className="v-logo__mark" aria-hidden="true" />
          Vettri HRMS
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
