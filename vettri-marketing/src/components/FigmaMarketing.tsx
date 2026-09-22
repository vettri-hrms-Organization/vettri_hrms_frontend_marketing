"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, CheckCircle2, ChevronRight, Clock3, Laptop2, LockKeyhole, MapPin, Menu, Network, UsersRound, X, Zap } from "lucide-react";
import Image from "next/image";
import { APP_URL } from "@/lib/config";
import { plans } from "@/data/pricing";

const modules = [
  { id: "people", label: "Employees", color: "#3B82F6", title: "Employee Directory", badge: "2,847 total", rows: ["Priya Sharma · Technology", "Arjun Mehta · Product", "Kavya Nair · People Ops", "Rohan Iyer · Design"] },
  { id: "attendance", label: "Attendance", color: "#06B6D4", title: "Live Attendance", badge: "Live", rows: ["Priya S. · 09:02 AM · HQ Chennai", "Arjun M. · 09:18 AM · Verified GPS", "Kavya N. · 09:31 AM · HQ Chennai"] },
  { id: "payroll", label: "Payroll", color: "#22C55E", title: "Payroll Overview", badge: "Connected", rows: ["Net salaries · Processed on time", "PF & ESI · Ready for review", "TDS deductions · In context"] },
  { id: "recruitment", label: "Recruitment", color: "#818CF8", title: "Open Positions", badge: "Active pipeline", rows: ["Senior Backend Engineer · Interviews", "Product Designer · Review", "HR Business Partner · Screening"] },
];

const stages = [
  ["Candidate", "Application received, screening begins", "Smart applicant tracking and structured interview workflows", "#818CF8"],
  ["Onboarding", "Docs, device assignment, team setup", "Checklist-driven onboarding and workplace readiness", "#3B82F6"],
  ["Attendance", "GPS-verified daily check-ins and outs", "Location-aware attendance and working hours tracking", "#06B6D4"],
  ["Leave", "Managed leave with policy compliance", "Custom leave types, approvals and balance visibility", "#22C55E"],
  ["Payroll", "Accurate payroll processing", "Payroll context, salary slips and compliance workflows", "#F59E0B"],
  ["Offboarding", "Smooth exit, full knowledge transfer", "Device return, access revocation and final settlement", "#EF4444"],
] as const;

const devices = [
  ["VT-D001", "Priya Sharma", "MacBook Pro", "Online", "Secure"],
  ["VT-D002", "Arjun Mehta", "Dell XPS 15", "Online", "Secure"],
  ["VT-D003", "Kavya Nair", "ThinkPad X1", "Online", "Secure"],
  ["VT-D004", "Rohan Iyer", "MacBook Air", "Offline", "Unknown"],
  ["VT-D005", "Sneha Patel", "HP EliteBook", "Online", "Alert"],
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`fig-reveal ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}s` }}>{children}</div>;
}

function Badge({ children, tone = "blue" }: { children: React.ReactNode; tone?: string }) {
  return <span className={`fig-badge fig-badge-${tone}`}><i />{children}</span>;
}

function ProductWindow() {
  const [active, setActive] = useState(0);
  const activeModule = modules[active];
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % modules.length), 5000);
    return () => window.clearInterval(timer);
  }, []);
  return <div className="fig-product-window">
    <div className="fig-window-bar"><span className="fig-window-dots"><i /><i /><i /></span><span>Vettri HRMS · {activeModule.label}</span><span className="fig-live"><i /> live</span></div>
    <div className="fig-module-tabs">{modules.map((item, index) => <button type="button" key={item.id} onClick={() => setActive(index)} className={index === active ? "active" : ""} style={{ "--tab-color": item.color } as React.CSSProperties}>{item.label}</button>)}</div>
    <div className="fig-product-body"><div className="fig-product-head"><div><span className="fig-mono">PLATFORM / {activeModule.label.toUpperCase()}</span><h3>{activeModule.title}</h3></div><span className="fig-status">{activeModule.badge}</span></div><div className="fig-product-rows">{activeModule.rows.map((row) => <div className="fig-product-row" key={row}><span className="fig-avatar" style={{ background: `${activeModule.color}22`, color: activeModule.color }}>{row.split(" ").map((word) => word[0]).slice(0, 2).join("")}</span><span>{row}</span><CheckCircle2 size={14} style={{ color: activeModule.color }} /></div>)}</div><div className="fig-sync-line"><i style={{ background: activeModule.color }} /> Context synced across people, operations and technology</div></div>
  </div>;
}

function AttendanceVisual() {
  return <div className="fig-map"><div className="fig-map-grid" /><div className="fig-map-office"><MapPin size={16} /><span>Vettri HQ · Chennai</span></div>{[[34,35,"PS"],[70,28,"AM"],[45,62,"KN"],[25,67,"RI"],[64,66,"SP"]].map(([x, y, label], index) => <span key={String(label)} className={`fig-map-dot ${index % 2 ? "remote" : "office"}`} style={{ left: `${x}%`, top: `${y}%` }}>{label}</span>)}<div className="fig-map-label"><i /> 5 employees verified</div><div className="fig-map-radius">Allowed radius: 500m</div></div>;
}

export default function FigmaMarketing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stage, setStage] = useState(0);
  const activeStage = stages[stage];
  const plan = plans[0];
  const yearLabel = useMemo(() => new Date().getFullYear(), []);
  useEffect(() => { const timer = window.setInterval(() => setStage((current) => (current + 1) % stages.length), 2800); return () => window.clearInterval(timer); }, []);

  return <div className="figma-site">
    <header className="fig-nav"><a className="fig-logo" href="#hero"><Image src="/brand/vettri-favicon.png" alt="Vettri" width={32} height={32} /><b>Vettri</b></a><nav className={menuOpen ? "open" : ""}>{[["Platform", "#platform"], ["Why Vettri", "#why-vettri"], ["Pricing", "#pricing"], ["About", "#about"]].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="fig-mobile-cta" href={`${APP_URL}/signup`}>Start free for ₹1 <ArrowRight size={14} /></a></nav><div className="fig-nav-actions"><a className="fig-signin" href={`${APP_URL}/login`}>Sign in</a><a className="fig-button fig-button-small" href={`${APP_URL}/signup`}>Start free for ₹1 <ArrowRight size={14} /></a><button type="button" className="fig-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button></div></header>

    <main id="main-content">
      <section id="hero" className="fig-hero"><div className="fig-grid" /><div className="fig-hero-glow" /><div className="fig-container fig-hero-grid"><Reveal className="fig-hero-copy"><Badge>Connected workplace platform</Badge><h1>Your entire<br /><em>workforce,</em><br />one platform.</h1><p>Vettri connects employee management, attendance, leave, payroll, recruitment and workplace technology into one intelligent system built for modern teams.</p><div className="fig-actions"><a className="fig-button" href={`${APP_URL}/signup`}>Start free for ₹1 <ArrowRight size={16} /></a><a className="fig-button fig-button-ghost" href="#platform">Explore platform</a></div><div className="fig-proof"><span><Check size={13} /> One connected layer</span><span><Check size={13} /> Built for modern teams</span><span><Check size={13} /> Real operational context</span></div></Reveal><Reveal className="fig-hero-product" delay={0.15}><ProductWindow /></Reveal></div><div className="fig-ribbon"><div className="fig-container"><span>PEOPLE</span><i /><span>WORKPLACE</span><i /><span>TECHNOLOGY</span><i /><b>ONE OPERATING PICTURE</b></div></div></section>

      <section id="platform" className="fig-section fig-platform"><div className="fig-container"><Reveal className="fig-centered-head"><Badge tone="cyan">The platform</Badge><h2>Every HR operation,<br /><em>beautifully connected</em></h2><p>From hiring to payroll, Vettri gives your team a single intelligent workspace where nothing falls through the cracks.</p></Reveal><Reveal delay={0.12}><ProductWindow /></Reveal></div></section>

      <section id="features" className="fig-section fig-lifecycle"><div className="fig-container"><Reveal className="fig-centered-head"><Badge tone="indigo">Employee lifecycle</Badge><h2>From first application<br /><em>to graceful exit</em></h2><p>Vettri manages every phase of the employee journey without switching tools.</p></Reveal><div className="fig-lifecycle-grid"><Reveal><div className="fig-stage-list">{stages.map(([label, description, , color], index) => <button type="button" key={label} onClick={() => setStage(index)} className={stage === index ? "active" : ""} style={{ "--stage-color": color } as React.CSSProperties}><span className="fig-stage-icon"><Clock3 size={17} /></span><span><b>{label}</b><small>{description}</small></span>{stage === index && <i>Active</i>}</button>)}</div></Reveal><Reveal delay={0.12}><div className="fig-stage-detail" style={{ "--stage-color": activeStage[3] } as React.CSSProperties}><span className="fig-stage-icon large"><Zap size={23} /></span><h3>{activeStage[0]}</h3><p>{activeStage[2]}</p><div className="fig-mini-ui"><span><i /> Live in Vettri</span><b /><b /><b /></div><div className="fig-dots">{stages.map((item, index) => <button type="button" key={item[0]} onClick={() => setStage(index)} className={index === stage ? "active" : ""} aria-label={`Show ${item[0]}`} />)}</div></div></Reveal></div></div></section>

      <section className="fig-section fig-attendance"><div className="fig-container fig-two-col"><Reveal><AttendanceVisual /></Reveal><Reveal delay={0.12}><Badge tone="green">GPS-verified attendance</Badge><h2>Know exactly who&apos;s<br /><em>where, and when</em></h2><p>Vettri verifies attendance through GPS location, ensuring employees check in from authorized office locations or approved remote addresses.</p><div className="fig-chips"><span>Office radius check</span><span>Remote verification</span><span>Live map view</span><span>Working hours</span></div><div className="fig-checkins"><div className="fig-checkins-head"><b>Today&apos;s check-ins</b><span><i /> Live</span></div>{["Priya Sharma · Office · 09:02 AM", "Arjun Mehta · Remote · 09:18 AM", "Kavya Nair · Office · 09:31 AM"].map((item) => <div className="fig-checkin" key={item}><span className="fig-avatar">{item.slice(0, 2)}</span><span>{item}</span><CheckCircle2 size={14} /></div>)}</div></Reveal></div></section>

      <section className="fig-section fig-devices"><div className="fig-container"><Reveal><Badge tone="cyan">Device management</Badge><div className="fig-device-head"><div><h2>Every company device,<br /><em>always accounted for</em></h2><p>The Vettri Agent gives IT and HR real-time visibility into device health, ownership and security posture.</p></div><div className="fig-stat-grid"><div><b>1,203</b><small>Managed devices</small></div><div><b className="green">5</b><small>Online now</small></div><div><b className="amber">1</b><small>Security alert</small></div><div><b>99.7%</b><small>Agent uptime</small></div></div></div></Reveal><div className="fig-device-grid"><Reveal><div className="fig-network-card"><div className="fig-card-head"><b><Network size={15} /> Device network</b><span><i /> Live</span></div><div className="fig-orbit"><div className="fig-orbit-core"><LockKeyhole size={23} /></div>{devices.map(([id, user], index) => <span key={id} className="fig-orbit-node" style={{ "--orbit": `${index * 60}deg` } as React.CSSProperties}>{user.split(" ").map((word) => word[0]).join("")}</span>)}</div><small className="fig-card-note">Online · Offline · Alert</small></div></Reveal><Reveal delay={0.12}><div className="fig-device-table"><div className="fig-table-head"><span>Device</span><span>User</span><span>Status</span><span>Security</span></div>{devices.map(([id, user, device, status, security]) => <div className="fig-table-row" key={id}><span><b>{id}</b><small>{device}</small></span><span>{user}</span><span className={status === "Online" ? "green" : "muted"}>{status}</span><span className={security === "Secure" ? "blue" : security === "Alert" ? "amber" : "muted"}>{security}</span></div>)}</div></Reveal></div></div></section>

      <section className="fig-section fig-connected"><div className="fig-container"><Reveal className="fig-centered-head"><Badge>One connected platform</Badge><h2>Everything flows through<br /><em>a single system</em></h2><p>Vettri is a unified platform where every module is aware of every other.</p></Reveal><div className="fig-connected-grid"><Reveal><div className="fig-connection-visual"><div className="fig-central-node"><Network size={26} /><span>Vettri</span></div>{["People", "Attendance", "Payroll", "Devices", "Recruitment", "Leave"].map((label, index) => <div className="fig-connected-node" key={label} style={{ "--node-index": index } as React.CSSProperties}><span>{label.slice(0, 2)}</span><b>{label}</b><small>Connected</small></div>)}</div></Reveal><Reveal delay={0.12}><div className="fig-module-list">{[[UsersRound, "People", "Employee records and lifecycle"], [Clock3, "Attendance", "GPS-verified operations"], [Laptop2, "Devices", "Ownership and security"], [Zap, "Automation", "Coordinated workflows"], [LockKeyhole, "Control", "Roles and audit context"], [MapPin, "Workplace", "The work behind the work"]].map(([Icon, label, copy]) => <div key={String(label)}><span className="fig-list-icon"><Icon size={16} /></span><span><b>{String(label)}</b><small>{String(copy)}</small></span><ChevronRight size={15} /></div>)}</div></Reveal></div></div></section>

      <section id="why-vettri" className="fig-section fig-why"><div className="fig-container"><Reveal className="fig-centered-head"><Badge tone="cyan">Why Vettri</Badge><h2>Less switching.<br /><em>More connected work.</em></h2><p>One calm operating layer for the people, workplace and technology behind every day.</p></Reveal><div className="fig-why-grid">{[[UsersRound,"One employee record","Keep profiles, documents, attendance and workplace context together."],[Network,"One shared picture","HR, managers and IT work from the same current information."],[Laptop2,"Deploy software at scale","Push approved software to every employee device from one central workflow."],[LockKeyhole,"Vettri CLI and laptop monitoring","Use the Vettri CLI to keep device status, software and laptop health visible."],[Zap,"One coordinated response","Turn everyday events into clear actions across teams."],[MapPin,"One layer of control","Make roles, ownership and operational status visible." ]].map(([Icon,title,copy]) => <Reveal key={String(title)}><article className="fig-why-card"><span className="fig-why-icon"><Icon size={19} /></span><h3>{String(title)}</h3><p>{String(copy)}</p><a href="#platform">See it in Vettri <ArrowRight size={13} /></a></article></Reveal>)}</div></div></section>

      <section id="pricing" className="fig-section fig-pricing"><div className="fig-container"><Reveal className="fig-centered-head"><Badge>Pricing</Badge><h2>One clear Vettri plan</h2><p>Real Vettri pricing with flexible monthly, quarterly and annual billing. Start the free trial with ₹1 verification.</p></Reveal><div className="fig-price-grid fig-cycle-grid">{[["Monthly", plan.priceMonthly, "month", "Billed monthly"], ["Quarterly", plan.priceQuarterly, "quarter", "Billed quarterly"], ["Annual", plan.priceAnnual, "year", "Best annual value"]].map(([label, value, unit, note], index) => <Reveal key={String(label)} delay={index * 0.06}><div className={`fig-price-card ${index === 1 ? "featured" : ""}`}>{index === 1 && <span className="fig-popular">Recommended</span>}<Badge tone={index === 2 ? "indigo" : index === 0 ? "slate" : "blue"}>{String(label)}</Badge><div className="fig-real-price"><b>₹{Number(value).toLocaleString("en-IN")}</b><small>/ employee / {String(unit)}</small></div><p>{String(note)}. {plan.description}</p><ul>{plan.featureGroups.flatMap((group) => group.features).slice(0, index === 2 ? 6 : 4).map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul><a href={`${APP_URL}/signup?plan=VETTRI_HRMS&billing=${String(label).toLowerCase()}`} className={`fig-button fig-button-wide ${index === 1 ? "" : "fig-button-ghost"}`}>Start free with ₹1 <ArrowRight size={15} /></a><span className="fig-price-note">₹1 verification starts your free trial.</span></div></Reveal>)}</div></div></section>

      <section id="about" className="fig-section fig-about"><div className="fig-container fig-two-col"><Reveal><Badge tone="indigo">Our story</Badge><h2>Built by brothers.<br /><em>Built for better workplaces.</em></h2><p>Vettri was born from a frustration many HR teams share: disconnected tools, manual processes and software designed for the software instead of the people using it.</p><p>We are building a platform that is thoughtfully designed, genuinely useful and connected to the way modern teams work.</p><div className="fig-founder-grid"><div><b>V</b><strong>Vikkash</strong><small>Product & Technology</small></div><div><b>H</b><strong>Hariharan</strong><small>Product & Technology</small></div></div></Reveal><Reveal delay={0.12}><div className="fig-about-card"><div className="fig-about-stats"><span><b>12+</b><small>Connected modules</small></span><span><b>India</b><small>Built for modern teams</small></span><span><b>256-bit</b><small>Security-minded design</small></span><span><b>24/7</b><small>Support when needed</small></span></div><blockquote>“We want Vettri to give HR professionals back the time to focus on what they do best: the people.”</blockquote><small>Vikkash, Co-founder</small></div></Reveal></div></section>
    </main>

    <footer className="fig-footer"><div className="fig-container"><div className="fig-footer-cta"><Badge>Ready when you are</Badge><h2>Make your workplace<br /><em>feel connected.</em></h2><p>One platform. One shared context.</p><div className="fig-actions"><a className="fig-button" href={`${APP_URL}/signup`}>Start free for ₹1 <ArrowRight size={15} /></a><a className="fig-button fig-button-ghost" href={`${APP_URL}/login`}>Sign in</a></div></div><div className="fig-footer-links"><div><a className="fig-logo" href="#hero"><Image src="/brand/vettri-favicon.png" alt="Vettri" width={32} height={32} /><b>Vettri</b></a><p>Connected workplace platform for modern teams.</p></div><div><b>Explore</b><a href="#platform">Platform</a><a href="#why-vettri">Why Vettri</a><a href="#pricing">Pricing</a></div><div><b>Company</b><a href="#about">About</a><a href={`${APP_URL}/login`}>Sign in</a><a href="mailto:customersupport@vettrihrms.in">Contact</a></div></div><div className="fig-footer-bottom"><span>© {yearLabel} Vettri HRMS. All rights reserved.</span><a href="mailto:customersupport@vettrihrms.in">customersupport@vettrihrms.in</a><span>Built for better workplaces.</span></div></div></footer>
  </div>;
}
