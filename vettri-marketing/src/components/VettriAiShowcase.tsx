import { ArrowRight, CalendarDays, Check, CircleHelp, MessageCircle, Sparkles, UserRound } from "lucide-react";
import { APP_URL } from "@/lib/config";

const benefits = [
  {
    icon: MessageCircle,
    title: "Chat naturally",
    description: "Describe a supported HR need in everyday language and get a practical response.",
  },
  {
    icon: CalendarDays,
    title: "Prepare leave requests",
    description: "Get help preparing full-day requests for active leave types, including casual or sick leave when your organization offers them.",
  },
  {
    icon: Check,
    title: "Check your leave details",
    description: "Ask about your own leave balance and recent requests when your account has the required access.",
  },
  {
    icon: CircleHelp,
    title: "Find the right place",
    description: "Get navigation help for supported areas such as leave, attendance, payslips and devices.",
  },
];

export function VettriAiShowcase() {
  return (
    <section className="fig-section vettri-ai-section" aria-labelledby="vettri-ai-title">
      <div className="fig-container">
        <div className="vettri-ai-layout">
          <div className="vettri-ai-copy">
            <span className="fig-badge fig-badge-cyan"><i />AI HR assistant</span>
            <h2 id="vettri-ai-title">Meet Your New HR Assistant — <em>Vettri AI</em></h2>
            <p>
              Manage supported HR tasks through a natural conversation. Ask for leave
              guidance, check your own leave information when permitted, and get help
              preparing full-day leave requests for active types such as casual or sick
              leave—without switching screens.
            </p>
            <div className="vettri-ai-actions">
              <a className="fig-button" href={`${APP_URL}/signup`}>
                Start Free Trial <ArrowRight size={15} />
              </a>
              <a className="fig-button fig-button-ghost" href={`${APP_URL}/login`}>
                Sign in
              </a>
            </div>
            <p className="vettri-ai-access-note">
              Available actions and personal information depend on your organization&apos;s
              setup and your account permissions.
            </p>
          </div>

          <div className="vettri-ai-demo" aria-label="Illustrative Vettri AI conversation">
            <div className="vettri-ai-demo-header">
              <div className="vettri-ai-demo-brand">
                <span><Sparkles size={17} /></span>
                <div><strong>Ask Vettri</strong><small>AI workplace assistant</small></div>
              </div>
              <span className="vettri-ai-example-label">Illustrative example</span>
            </div>

            <div className="vettri-ai-messages">
              <div className="vettri-ai-message vettri-ai-message-user">
                <span className="vettri-ai-message-avatar"><UserRound size={15} /></span>
                <div><small>EMPLOYEE</small><p>I need casual leave on 15 October.</p></div>
              </div>
              <div className="vettri-ai-message">
                <span className="vettri-ai-message-avatar vettri-ai-avatar-ai"><Sparkles size={15} /></span>
                <div>
                  <small>VETTRI AI</small>
                  <p>I can prepare a full-day casual leave request. Review the details before you decide whether to submit.</p>
                </div>
              </div>

              <div className="vettri-ai-request-card">
                <div className="vettri-ai-request-title">
                  <span><CalendarDays size={15} /> Leave request · Casual Leave</span>
                  <span className="vettri-ai-review-state">Ready to review</span>
                </div>
                <div className="vettri-ai-request-details">
                  <span><small>DATE</small><strong>15 October 2026</strong></span>
                  <span><small>DURATION</small><strong>1 full day</strong></span>
                </div>
                <span className="vettri-ai-confirm-label">Awaiting employee confirmation</span>
                <div className="vettri-ai-demo-button">Confirm &amp; submit</div>
              </div>

              <div className="vettri-ai-message vettri-ai-message-user">
                <span className="vettri-ai-message-avatar"><UserRound size={15} /></span>
                <div><small>EMPLOYEE</small><p>Yes, submit it.</p></div>
              </div>
              <div className="vettri-ai-message vettri-ai-message-result">
                <span className="vettri-ai-message-avatar vettri-ai-avatar-ai"><Sparkles size={15} /></span>
                <div>
                  <small>VETTRI AI · AFTER CONFIRMATION</small>
                  <p>Your request has been submitted and is pending approval.</p>
                </div>
              </div>
            </div>
            <p className="vettri-ai-demo-footnote">
              Fictional example. Leave types and request details are checked against your
              organization&apos;s active setup. Submission does not mean approval.
            </p>
          </div>
        </div>

        <div className="vettri-ai-benefits" aria-label="Vettri AI capabilities">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className="vettri-ai-benefit" key={title}>
              <span className="vettri-ai-benefit-icon"><Icon size={17} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
