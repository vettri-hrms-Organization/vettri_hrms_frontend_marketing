"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  ChevronDown,
  Compass,
  HeartHandshake,
  Laptop2,
  Menu,
  Newspaper,
  UsersRound,
  X,
} from "lucide-react";
import Link from "next/link";
import { VettriLogo } from "@/components/brand/VettriLogo";
import { useEffect, useRef, useState } from "react";
import { APP_URL } from "@/lib/config";
import { usePathname } from "next/navigation";

type MegaItem = {
  icon: typeof UsersRound;
  title: string;
  body: string;
  href: string;
};

type MegaMenu = {
  id: string;
  label: string;
  href: string;
  columns: MegaItem[];
  highlight: { eyebrow: string; title: string; body: string; href: string; cta: string };
};

const megaMenus: MegaMenu[] = [
  {
    id: "platform",
    label: "Platform",
    href: "/platform",
    columns: [
      { icon: UsersRound, title: "People", body: "Profiles, documents and lifecycle in one record.", href: "/platform#platform-people" },
      { icon: CalendarClock, title: "HR operations", body: "Attendance, leave and payroll, dependably connected.", href: "/platform#platform-hr" },
      { icon: Laptop2, title: "Workplace technology", body: "Assets, devices and software in the same picture.", href: "/platform#platform-assets" },
    ],
    highlight: {
      eyebrow: "See it together",
      title: "One operating layer, not a patchwork of tools.",
      body: "Walk through how people, HR operations and workplace technology connect in Vettri.",
      href: "/platform",
      cta: "Explore the platform",
    },
  },
  {
    id: "solutions",
    label: "Solutions",
    href: "/solutions",
    columns: [
      { icon: UsersRound, title: "For HR teams", body: "People operations, attendance, leave and payroll.", href: "/solutions#solutions-hr" },
      { icon: Laptop2, title: "For IT & workplace teams", body: "Device governance, software and endpoint support.", href: "/solutions#solutions-it" },
      { icon: HeartHandshake, title: "For managers & employees", body: "Clear approvals and simple self-service.", href: "/solutions#solutions-people" },
    ],
    highlight: {
      eyebrow: "Every team, one picture",
      title: "Solutions aren't separate products bolted together.",
      body: "They're views into the same connected workplace operating layer.",
      href: "/solutions",
      cta: "See solutions by team",
    },
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources",
    columns: [
      { icon: BookOpen, title: "Guides", body: "Practical guidance for connecting HR and IT.", href: "/resources" },
      { icon: Newspaper, title: "Product updates", body: "A concise record of how Vettri evolves.", href: "/resources" },
      { icon: Compass, title: "Product tour", body: "Explore people operations and workplace technology together.", href: "/product-tour" },
    ],
    highlight: {
      eyebrow: "Need a hand",
      title: "Talk to our team about your workplace.",
      body: "Get a walkthrough tailored to your HR and IT setup — no pressure, no scripts.",
      href: "/contact",
      cta: "Talk to our team",
    },
  },
];

const plainLinks = [
  ["Why Vettri", "/why-vettri"],
  ["Pricing", "/pricing"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setActiveMenu(null);
        setMobileExpanded(null);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setActiveMenu(null);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
    return () => document.body.classList.remove("mobile-nav-open");
  }, [open]);

  const openMenu = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(id);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 140);
  };

  const active = megaMenus.find((m) => m.id === activeMenu) ?? null;

  return (
    <header ref={headerRef} className="site-header" onMouseLeave={scheduleClose}>
      <div className={`nav-surface ${scrolled ? "scrolled" : ""} ${activeMenu ? "menu-open" : ""}`}>
        <div className="container nav">
          <Link className="brand" href="/" onClick={() => setActiveMenu(null)}>
            <VettriLogo size="md" priority />
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            {megaMenus.map((menu) => (
              <button
                key={menu.id}
                type="button"
                className={`nav-trigger ${pathname === menu.href ? "route-active" : ""} ${activeMenu === menu.id ? "menu-open" : ""}`}
                aria-expanded={activeMenu === menu.id}
                aria-controls={`mega-${menu.id}`}
                aria-current={pathname === menu.href ? "page" : undefined}
                onClick={() => setActiveMenu(activeMenu === menu.id ? null : menu.id)}
              >
                {menu.label}
                <ChevronDown size={13} />
              </button>
            ))}
            {plainLinks.map(([label, href]) => (
              <Link
                href={href}
                key={href}
                className={pathname === href ? "route-active" : undefined}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setActiveMenu(null)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="login" href={`${APP_URL}/login`}>Login</a>
            <a className="btn btn-primary" href={`${APP_URL}/signup`}>
              Start free <ArrowRight size={15} />
            </a>
            <button
              ref={menuButtonRef}
              className="mobile-menu"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            id={`mega-${active.id}`}
            className="mega-wrap"
            onMouseEnter={() => openMenu(active.id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
          >
            <div className="container mega-panel">
              <div className="mega-columns">
                {active.columns.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="mega-item"
                    onClick={() => setActiveMenu(null)}
                  >
                    <span className="mega-icon"><item.icon size={17} /></span>
                    <span>
                      <span className="mega-item-title">{item.title}</span>
                      <span className="mega-item-body">{item.body}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <Link href={active.highlight.href} className="mega-highlight" onClick={() => setActiveMenu(null)}>
                <span className="eyebrow">{active.highlight.eyebrow}</span>
                <h3>{active.highlight.title}</h3>
                <p>{active.highlight.body}</p>
                <span className="mega-highlight-cta">
                  {active.highlight.cta} <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container">
              {megaMenus.map((menu) => (
                <div className="mobile-group" key={menu.id}>
                  <button
                    type="button"
                    className="mobile-group-trigger"
                    aria-expanded={mobileExpanded === menu.id}
                    aria-controls={`mobile-submenu-${menu.id}`}
                    onClick={() => setMobileExpanded(mobileExpanded === menu.id ? null : menu.id)}
                  >
                    {menu.label}
                    <ChevronDown
                      size={16}
                      style={{
                        transform: mobileExpanded === menu.id ? "rotate(180deg)" : "none",
                        transition: "transform 0.25s ease",
                      }}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === menu.id && (
                      <motion.div
                        id={`mobile-submenu-${menu.id}`}
                        className="mobile-submenu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {menu.columns.map((item) => (
                          <Link href={item.href} key={item.title} onClick={() => { setOpen(false); setMobileExpanded(null); }}>
                            {item.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              {plainLinks.map(([label, href]) => (
                <Link href={href} onClick={() => setOpen(false)} key={href}>
                  {label}
                </Link>
              ))}
              <a href={`${APP_URL}/login`} onClick={() => setOpen(false)}>Login</a>
              <a className="btn btn-primary" href={`${APP_URL}/signup`} onClick={() => setOpen(false)}>
                Start free <ArrowRight size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
