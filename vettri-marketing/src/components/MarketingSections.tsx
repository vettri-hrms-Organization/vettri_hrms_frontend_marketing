import { ArrowRight, Headphones, Laptop, LockKeyhole, PlugZap, ShieldCheck, Sparkles, UserPlus, Workflow } from "lucide-react";
import Link from "next/link";
import { ProductPreview } from "@/components/ProductPreview";
import { NetworkDiagram } from "@/components/NetworkDiagram";
import { Lifecycle as LifecycleInteractive } from "@/components/Lifecycle";
import { Reveal } from "@/components/Reveal";
import { GradientBackground } from "@/components/ui/gradient-background";
import { APP_URL } from "@/lib/config";

export function ValueStrip() {
  return (
    <section className="value-strip">
      <div className="container strip-inner">
        <div className="strip-item"><span className="dot" /><span className="strip-number">People</span><span className="strip-label">in one operating picture</span></div>
        <div className="strip-item"><span className="dot" /><span className="strip-number">Operations</span><span className="strip-label">without the operational noise</span></div>
        <div className="strip-item"><span className="dot" /><span className="strip-number">Technology</span><span className="strip-label">that works in context</span></div>
      </div>
    </section>
  );
}

export function ProofRail() {
  return (
    <section className="proof-rail" aria-label="Vettri platform capabilities">
      <div className="container proof-rail-inner">
        <span className="proof-rail-label">Built for the work between teams</span>
        {[
          ["People", "One employee record"],
          ["Operations", "Fewer handoffs"],
          ["Technology", "Context that travels"],
          ["Control", "Clearer governance"],
        ].map(([title, body]) => (
          <div className="proof-rail-item" key={title}>
            <span className="proof-rail-mark" />
            <span><b>{title}</b><small>{body}</small></span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ConnectedSystem() {
  return (
    <section className="intro" id="platform">
      <div className="container intro-grid">
        <Reveal>
          <div className="eyebrow">One connected system</div>
          <h2 className="section-title">Everything your workplace needs to move as one.</h2>
          <p className="body-copy">
            Vettri brings people operations and workplace technology into the same operating picture. Less
            switching. Fewer blind spots. Better decisions, every day.
          </p>
          <Link className="text-link" href="/platform">See the platform <ArrowRight size={14} /></Link>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="system-visual">
            <div className="node"><UserPlus size={18} color="var(--blue)" /><div><b>People</b><small>People, payroll, leave, experience</small></div></div>
            <div className="node"><Laptop size={18} color="var(--blue)" /><div><b>Workplace</b><small>Devices, software, support, automation</small></div></div>
            <div className="node main"><Workflow size={18} color="#74a7ff" /><div><b>Vettri</b><small>One operating layer for both</small></div></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HrItDifference() {
  return (
    <section className="dark-band">
      <GradientBackground variant="dark" overlayOpacity={0.12} />
      <div className="container dark-layout">
        <Reveal>
          <div className="dark-copy">
            <div className="eyebrow inverse">The Vettri difference</div>
            <h2 className="section-title inverse-title">
              HR knows your people.<br />IT knows their devices.<br /><span className="blue-text">Vettri connects both.</span>
            </h2>
            <p className="body-copy inverse-copy">
              The moments that matter rarely belong to one department. Give every team the context to act together.
            </p>
            <div className="signal-map">
              <div className="signal-row"><div className="signal-line" /><div className="signal-label">Employee experience<span>one clear journey from join to grow</span></div></div>
              <div className="signal-row"><div className="signal-line" /><div className="signal-label">HR operations<span>attendance, leave, payroll and documents</span></div></div>
              <div className="signal-row"><div className="signal-line" /><div className="signal-label">Workplace technology<span>devices, software and remote support</span></div></div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <NetworkDiagram />
        </Reveal>
      </div>
    </section>
  );
}

export function Lifecycle() {
  return (
    <section className="journey-section">
      <div className="container">
        <Reveal>
          <div className="eyebrow">A connected journey</div>
          <h2 className="section-title">One platform for the entire employee lifecycle.</h2>
          <p className="body-copy">Follow a stage to see how Vettri keeps people, operations and workplace technology moving together.</p>
        </Reveal>
        <LifecycleInteractive />
      </div>
    </section>
  );
}

export function IntelligenceSection() {
  return (
    <section className="intelligence-section">
      <div className="container intelligence-grid">
        <Reveal>
          <div className="eyebrow">Connected intelligence</div>
          <h2 className="section-title">The right context, at the right moment.</h2>
          <p className="body-copy">Vettri turns connected records into useful next steps, so your teams can spend less time looking for the answer and more time acting on it.</p>
          <div className="intelligence-links">
            <span><Sparkles size={15} /> Suggested next steps</span>
            <span><PlugZap size={15} /> Workflows across systems</span>
            <span><ShieldCheck size={15} /> Controls you can explain</span>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="intelligence-panel">
            <div className="intelligence-panel-top"><span>Vettri signal</span><span className="status">Ready to act</span></div>
            <div className="intelligence-signal"><div className="signal-avatar">P</div><div><b>Priya&apos;s first day is tomorrow</b><small>Device, software and access are ready to review.</small></div><ArrowRight size={16} /></div>
            <div className="intelligence-checks"><span>Employee record</span><b>Complete</b><span>Device assignment</span><b>Ready</b><span>Manager approval</span><b>1 action</b></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function EmployeeExperience() {
  return (
    <section className="capability white-section">
      <div className="container cap-grid">
        <Reveal>
          <div className="eyebrow">Employee experience</div>
          <h2 className="section-title">An employee experience people actually enjoy.</h2>
          <p className="body-copy">
            Make the everyday essentials easy to find: profile, attendance, leave, documents, assets, payslips and notifications.
          </p>
          <ul className="feature-tick">
            <li><ArrowRight size={14} color="var(--blue)" /> One profile for the whole employee journey</li>
            <li><ArrowRight size={14} color="var(--blue)" /> Self-service attendance, leave and documents</li>
            <li><ArrowRight size={14} color="var(--blue)" /> Assets and payslips, always in context</li>
          </ul>
        </Reveal>
        <Reveal delay={0.12}><ProductPreview variant="employee" /></Reveal>
      </div>
    </section>
  );
}

export function WorkplaceTechnology() {
  return (
    <section className="technology-section">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Workplace operations</div>
          <h2 className="section-title">Your workplace technology, connected.</h2>
          <p className="body-copy">Move from employee context to device context to operational support in one clear chain.</p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="flow-line">
            {["Employee", "Assigned device", "Vettri Agent", "Software", "Deployment", "Monitoring", "Support"].map((item, index) => (
              <div className="flow-node" key={item}>
                <span>{index + 1}</span>
                <b>{item}</b>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SoftwareAndSupport() {
  return (
    <section className="capability white-section">
      <div className="container split-stack">
        <div className="cap-grid reverse">
          <Reveal delay={0.1}><ProductPreview variant="software" /></Reveal>
          <Reveal>
            <div className="split-heading">
              <div className="eyebrow">Software management</div>
              <h2 className="section-title">From catalog to verified deployment.</h2>
              <p className="body-copy">
                A clear operational path for selecting applications, assigning devices, deploying, verifying and monitoring.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="support-band">
            <div>
              <div className="eyebrow inverse">Remote support</div>
              <h2 className="section-title inverse-title">Support with context, not guesswork.</h2>
              <p className="body-copy inverse-copy">
                Device → Vettri Agent → remote support → resolution. Keep the operational story visible without overpromising automation.
              </p>
            </div>
            <Headphones size={44} color="#74a7ff" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AutomationSecurity() {
  return (
    <section className="automation-section">
      <div className="container automation-grid">
        <Reveal>
          <div className="eyebrow">Automation</div>
          <h2 className="section-title">Let routine work run itself.</h2>
          <p className="body-copy">
            A new employee becomes a connected workplace journey: employee created, device assigned, software deployed, workplace ready.
          </p>
          <div className="workflow">
            <span>New employee</span><ArrowRight size={14} /><span>Employee created</span><ArrowRight size={14} /><span>Device assigned</span><ArrowRight size={14} /><span>Software deployed</span>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="security-panel">
            <LockKeyhole size={22} color="var(--blue)" />
            <h3>Enterprise control, clearly presented.</h3>
            <p>Multi-tenant architecture, role-based access, auditability, secure authentication, operational controls and device governance.</p>
            <div className="security-tags"><span>Role-based access</span><span>Auditability</span><span>Device governance</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PricingPreview() {
  return (
    <section className="pricing-section">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Pricing</div>
          <h2 className="section-title">Start with the workplace you have. Grow into the one you want.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="pricing-grid">
            {[["Starter", "For growing teams"], ["Growth", "For scaling organizations"], ["Enterprise", "For complex organizations"]].map(([name, text]) => (
              <div className="price-line" key={name}>
                <div><h3>{name}</h3><p>{text}</p></div>
                <Link href="/pricing">See pricing <ArrowRight size={15} /></Link>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <Reveal>
          <div className="eyebrow inverse">Make work feel connected</div>
          <h2 className="section-title inverse-title">Build a better workplace with Vettri.</h2>
          <p className="body-copy inverse-copy">One platform for your people, operations and workplace technology.</p>
          <a className="btn btn-primary" href={`${APP_URL}/signup`}>Start free <ArrowRight size={16} /></a>
        </Reveal>
      </div>
    </section>
  );
}
