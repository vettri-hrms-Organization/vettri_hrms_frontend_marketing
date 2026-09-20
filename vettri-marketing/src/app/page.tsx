import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Check, CheckCircle2, ChevronRight, CircleDot, Cloud,
  Laptop, Layers3, LockKeyhole, MonitorSmartphone, Network, ShieldCheck,
  Sparkles, UsersRound, Workflow, Zap, BarChart3, FileCheck2, Settings2,
  Search, Bell, MoreHorizontal, Globe2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { NetworkDiagram } from "@/components/NetworkDiagram";
import { APP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Vettri — The connected workplace platform",
  description: "Connect people, workplace operations and IT in one operating layer with Vettri.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vettri — The connected workplace platform",
    description: "One operating layer for people, workplace and technology.",
    type: "website",
  },
};

const pillars = [
  { icon: UsersRound, num: "01", title: "People", copy: "A complete employee record, from joining to everyday self-service and payroll." },
  { icon: Layers3, num: "02", title: "Workplace", copy: "Assets, requests and operations with ownership, status and context in one place." },
  { icon: MonitorSmartphone, num: "03", title: "Technology", copy: "Devices, software and support connected to the people who use them." },
];

const journey = [
  ["01", "Hire", "Create the employee record."],
  ["02", "Onboard", "Collect information and approvals."],
  ["03", "Equip", "Assign devices and software."],
  ["04", "Operate", "Run attendance, leave and payroll."],
  ["05", "Support", "Resolve issues with context."],
  ["06", "Offboard", "Recover assets and close access."],
];

const integrations = ["Google Workspace", "Microsoft 365", "Slack", "Azure", "AWS", "HR & IT workflows"];

function AppChrome({ children, title = "Overview" }: { children: ReactNode; title?: string }) {
  return (
    <div className="saas-frame">
      <div className="saas-topbar">
        <div className="saas-brand"><span className="saas-brand-mark">V</span><b>vettri</b></div>
        <div className="saas-search"><Search size={13} /><span>Search anything...</span><kbd>⌘ K</kbd></div>
        <div className="saas-top-actions"><Bell size={15} /><span className="saas-status"><i /> All systems normal</span><span className="saas-avatar">AK</span></div>
      </div>
      <div className="saas-body">
        <aside className="saas-side">
          {[
            [BarChart3, "Overview"], [UsersRound, "People"], [Laptop, "Devices"], [Layers3, "Software"], [Workflow, "Workflows"], [ShieldCheck, "Security"]
          ].map(([Icon, label]) => <div className={`saas-nav-item ${label === title ? "active" : ""}`} key={label as string}><Icon size={13} /><span>{label as string}</span></div>)}
          <div className="saas-side-bottom"><Settings2 size={13} /><span>Settings</span></div>
        </aside>
        <div className="saas-content">{children}</div>
      </div>
    </div>
  );
}

function OverviewDashboard() {
  return (
    <AppChrome>
      <div className="saas-page-head"><div><span className="saas-overline">MONDAY · 09:12</span><h3>Good morning, Arun.</h3><p>Here is what needs your attention today.</p></div><button className="saas-action"><Sparkles size={13} /> Quick action</button></div>
      <div className="saas-metrics">
        {[['People','248','+12 this month'],['Devices','231','96% compliant'],['Software','1,184','98% healthy'],['Requests','17','4 need attention']].map(([a,b,c])=><div className="saas-metric" key={a}><span>{a}</span><strong>{b}</strong><small><i />{c}</small></div>)}
      </div>
      <div className="saas-grid-main">
        <div className="saas-panel">
          <div className="saas-panel-head"><div><b>Workplace readiness</b><span>New joiners this week</span></div><MoreHorizontal size={15}/></div>
          <div className="saas-chart"><div className="chart-axis"><span>100%</span><span>75%</span><span>50%</span><span>25%</span></div><div className="chart-lines"><i/><i/><i/><i/></div><div className="chart-bars">{[44,58,50,74,66,86,78,94,82,96].map((h,i)=><b style={{height:`${h}%`}} key={i}/>)}</div></div>
          <div className="chart-legend"><span><i className="dot blue"/> Ready</span><span><i className="dot soft"/> In progress</span><b>94% <small>+8.4%</small></b></div>
        </div>
        <div className="saas-panel">
          <div className="saas-panel-head"><div><b>Needs attention</b><span>4 items across the workplace</span></div><ChevronRight size={15}/></div>
          {[['New laptop request','People Ops · 8 min','Review',UsersRound],['Device compliance','IT · 21 min','2 devices',Laptop],['Software approval','IT · 42 min','Approve',Cloud]].map(([a,b,c,I])=><div className="saas-task" key={a as string}><span className="task-icon"><I size={13}/></span><div><b>{a as string}</b><small>{b as string}</small></div><em>{c as string}</em></div>)}
        </div>
      </div>
    </AppChrome>
  );
}

function EmployeePanel() {
  return <div className="employee-card">
    <div className="employee-person"><span className="employee-photo">PK</span><div><strong>Priya Kumar</strong><small>Product Designer · Design</small><span><i/> Active · Chennai</span></div></div>
    <div className="employee-grid"><div><small>Attendance</small><b>09:08 AM</b><span>Checked in</span></div><div><small>Leave balance</small><b>14 days</b><span>Available</span></div><div><small>Device</small><b>MacBook Pro</b><span>Healthy</span></div><div><small>Software</small><b>14 apps</b><span>Compliant</span></div></div>
    <div className="employee-tabs"><span className="active">Overview</span><span>Attendance</span><span>Assets</span><span>Documents</span><span>Activity</span></div>
  </div>;
}

export default function Home() {
  return <>
    <Navbar />
    <main className="v4-home">
      <section className="v4-hero">
        <div className="v4-grid-glow" />
        <div className="container">
          <div className="v4-hero-copy">
            <Reveal><span className="v4-eyebrow"><i/>THE CONNECTED WORKPLACE PLATFORM</span></Reveal>
            <Reveal delay={.06}><h1>Your workplace, <span>finally connected.</span></h1></Reveal>
            <Reveal delay={.12}><p>Vettri connects people, workplace operations and IT in one clear operating layer.</p></Reveal>
            <Reveal delay={.18}><div className="v4-hero-actions"><a className="v4-btn primary" href={`${APP_URL}/signup`}>Book a demo <ArrowRight size={16}/></a><Link className="v4-btn secondary" href="/product-tour">Explore the product</Link></div></Reveal>
            <Reveal delay={.23}><div className="v4-hero-meta"><span><Check size={13}/> One connected layer</span><span><Check size={13}/> People, workplace & IT</span></div></Reveal>
          </div>
          <Reveal delay={.18}><div className="v4-hero-product"><div className="v4-product-glow"/><OverviewDashboard/></div></Reveal>
        </div>
        <div className="v4-hero-ribbon"><div className="container"><span>PEOPLE</span><i/><span>WORKPLACE</span><i/><span>TECHNOLOGY</span><i/><b>ONE OPERATING PICTURE</b></div></div>
      </section>

      <section className="v6-explore-rail" aria-label="Explore Vettri">
        <div className="container">
          <span className="v6-rail-label">EXPLORE THE PLATFORM</span>
          <a href="#people">People <ArrowRight size={13}/></a>
          <a href="#workplace">Workplace <ArrowRight size={13}/></a>
          <a href="#technology">Technology <ArrowRight size={13}/></a>
          <a href="#automation">Automation <ArrowRight size={13}/></a>
          <a href="#control">Control <ArrowRight size={13}/></a>
        </div>
      </section>

      <section className="v4-statement section-pad"><div className="container v4-statement-grid"><Reveal><span className="v4-eyebrow light">WHY VETTRI</span><h2>People, workplace and IT.<br/><em>One shared context.</em></h2></Reveal><Reveal delay={.1}><p>One system connects the people, work and technology behind every day.</p><Link className="v4-inline" href="/why-vettri">Why Vettri <ArrowRight size={15}/></Link></Reveal></div></section>

      <section id="people" className="v4-pillars section-pad"><div className="container"><Reveal><span className="v4-eyebrow">ONE PLATFORM</span><h2>Three layers. <em>One connected workplace.</em></h2></Reveal><div className="v4-pillar-grid">{pillars.map(({icon:Icon,num,title,copy},i)=><Reveal delay={i*.06} key={title}><article className="v4-pillar"><div className="v4-pillar-top"><span>{num}</span><Icon size={18}/></div><h3>{title}</h3><p>{copy}</p><Link href="/platform">Explore {title}<ArrowRight size={14}/></Link></article></Reveal>)}</div></div></section>

      <section id="workplace" className="v4-difference section-pad"><div className="container v4-difference-grid"><Reveal><span className="v4-eyebrow inverse">THE VETTRI DIFFERENCE</span><h2>HR knows your people.<br/>IT knows their devices.<br/><span>Vettri connects both.</span></h2><p>When an employee joins, the work doesn't stop at the employee record. The device, software, access and support journey begins too.</p><div className="v4-proof-chips"><span><Network size={14}/> Connected</span><span><ShieldCheck size={14}/> Governed</span><span><Workflow size={14}/> Actionable</span></div></Reveal><Reveal delay={.1}><div className="v4-network"><div className="v4-network-caption"><span>CONNECTED WORKPLACE</span><b><i/> Live relationship map</b></div><NetworkDiagram/></div></Reveal></div></section>

      <section id="technology" className="v4-product section-pad"><div className="container"><Reveal><span className="v4-eyebrow">THE PRODUCT</span><h2>Real workflows.<br/><em>Real operational context.</em></h2><p className="v4-lead">See the work. Understand the context. Act faster.</p></Reveal><div className="v4-product-story"><Reveal><div className="v4-story-copy"><span className="v4-number">01 / PEOPLE</span><h3>One employee. One connected workplace.</h3><p>People data and workplace actions live around one employee record.</p><div className="v4-feature-list"><span><CheckCircle2 size={15}/> Self-service workflows</span><span><CheckCircle2 size={15}/> Employee activity timeline</span><span><CheckCircle2 size={15}/> People data in context</span></div></div></Reveal><Reveal delay={.1}><div className="v4-product-window"><AppChrome title="People"><div className="saas-page-head"><div><span className="saas-overline">PEOPLE / EMPLOYEES</span><h3>Employee workspace</h3><p>One record. Every relevant detail.</p></div><button className="saas-action">+ Add employee</button></div><EmployeePanel/></AppChrome></div></Reveal></div><div className="v4-product-story reverse"><Reveal delay={.1}><div className="v4-product-window"><AppChrome title="Devices"><div className="saas-page-head"><div><span className="saas-overline">IT / DEVICES</span><h3>Device operations</h3><p>Know what is assigned, healthy and needs attention.</p></div><button className="saas-action"><Zap size={13}/> Run action</button></div><div className="device-summary"><div><span>231</span><small>Managed devices</small></div><div><span>96%</span><small>Compliant</small></div><div><span>03</span><small>Needs attention</small></div></div><div className="device-table"><div className="device-row head"><span>Device</span><span>Employee</span><span>Status</span><span>Last seen</span></div>{[['MacBook Pro 14','Priya Kumar','Healthy','Just now'],['ThinkPad X1','Arun Kumar','Healthy','2 min ago'],['Dell Latitude','Meena R','Attention','18 min ago']].map(r=><div className="device-row" key={r[0]}><span><b>{r[0]}</b><small>VTR-{r[0].slice(0,3).toUpperCase()}-24</small></span><span>{r[1]}</span><span className={r[2] === 'Attention' ? 'warn' : 'ok'}><i/>{r[2]}</span><span>{r[3]}</span></div>)}</div></AppChrome></div></Reveal><Reveal><div className="v4-story-copy"><span className="v4-number">02 / TECHNOLOGY</span><h3>Technology follows the employee.</h3><p>Devices, software and support stay connected to the people who use them.</p><div className="v4-feature-list"><span><CheckCircle2 size={15}/> Device context</span><span><CheckCircle2 size={15}/> Software deployment</span><span><CheckCircle2 size={15}/> Operational support</span></div></div></Reveal></div></div></section>

      <section className="v4-lifecycle section-pad"><div className="container"><Reveal><span className="v4-eyebrow">EMPLOYEE LIFECYCLE</span><h2>From first day to <em>every day.</em></h2><p className="v4-lead">One connected journey from hire to offboarding.</p></Reveal><div className="v4-lifecycle-track"><div className="v4-track-line"/>{journey.map(([n,title,copy],i)=><Reveal delay={i*.04} key={n}><div className="v4-step"><span className="v4-step-no">{n}</span><div className="v4-step-dot"><span/></div><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div></div></section>

      <section id="automation" className="v4-automation section-pad"><div className="container v4-auto-grid"><Reveal><div><span className="v4-eyebrow">AUTOMATION</span><h2>One event.<br/><em>A coordinated response.</em></h2><p className="v4-lead">One event can coordinate the work across teams.</p><Link className="v4-inline" href="/platform">Explore automation <ArrowRight size={15}/></Link></div></Reveal><Reveal delay={.1}><div className="v4-workflow"><div className="v4-workflow-head"><div><span>WORKFLOW</span><b>New employee → Ready to work</b></div><span className="v4-live-pill"><i/> Active</span></div>{[[UsersRound,'Employee created','People Ops'],[FileCheck2,'Information verified','HR'],[Laptop,'Laptop assigned','IT'],[Cloud,'Software deployed','IT'],[CheckCircle2,'Workplace ready','Vettri']].map(([Icon,title,owner],i)=><div className="v4-workflow-row" key={title as string}><span className="v4-workflow-index">0{i+1}</span><span className="v4-workflow-icon"><Icon size={14}/></span><div><b>{title as string}</b><small>{owner as string}</small></div><CheckCircle2 className="done" size={15}/></div>)}</div></Reveal></div></section>

      <section id="control" className="v4-security section-pad"><div className="container v4-security-grid"><Reveal><div><span className="v4-eyebrow inverse">ENTERPRISE CONTROL</span><h2>Connected doesn't mean uncontrolled.</h2><p>One operating picture. Clear roles, controls and audit trails.</p><div className="v4-security-items"><span><LockKeyhole size={16}/> Role-based access</span><span><ShieldCheck size={16}/> Audit trail</span><span><MonitorSmartphone size={16}/> Device governance</span><span><Globe2 size={16}/> Multi-team visibility</span></div></div></Reveal><Reveal delay={.1}><div className="v4-security-console"><div className="console-head"><span>SECURITY CENTER</span><b><i/> All systems normal</b></div><div className="console-main"><div><small>CONTROL COVERAGE</small><strong>96%</strong><span>Across people, workplace & technology</span></div><div className="console-ring"><b>96</b><small>%</small></div></div><div className="console-bars">{[['Access controls','96%'],['Audit coverage','91%'],['Device compliance','98%']].map(([label,val])=><div key={label}><span>{label}<b>{val}</b></span><i><em style={{width:val}}/></i></div>)}</div></div></Reveal></div></section>

      <section className="v4-integrations section-pad"><div className="container"><Reveal><div className="v4-centered"><span className="v4-eyebrow">FITS INTO YOUR WORK</span><h2>Connect the tools your teams already use.</h2></div></Reveal><div className="v4-integration-row">{integrations.map((x,i)=><Reveal delay={i*.04} key={x}><span><i>{x.slice(0,1)}</i>{x}</span></Reveal>)}</div></div></section>

      <section className="v4-final section-pad"><div className="container"><Reveal><div className="v4-final-card"><div className="v4-final-orb"/><span className="v4-eyebrow">READY WHEN YOU ARE</span><h2>Make your workplace<br/><em>feel connected.</em></h2><p>One platform. One shared context.</p><div className="v4-hero-actions"><a className="v4-btn primary" href={`${APP_URL}/signup`}>Book a demo <ArrowRight size={16}/></a><Link className="v4-btn secondary" href="/pricing">Explore pricing</Link></div></div></Reveal></div></section>
    </main>
    <Footer />
  </>;
}
