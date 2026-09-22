"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronLeft, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { APP_URL } from "@/lib/config";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", employees: "" });
  const [error, setError] = useState("");

  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.company || !form.employees) {
      setError("Please complete the fields above to continue.");
      return;
    }
    window.location.href = `${APP_URL}/signup?plan=VETTRI_HRMS`;
  };

  return (
    <main className="signup-v15">
      <section className="signup-v15-brand">
        <div className="signup-v15-brand-glow signup-v15-brand-glow-a" />
        <div className="signup-v15-brand-glow signup-v15-brand-glow-b" />
        <div className="signup-v15-brand-top">
          <Link href="/" aria-label="Back to Vettri home" className="signup-v15-logo">
            <img src="/brand/vettri-favicon.png" alt="Vettri HRMS" />
          </Link>
          <span className="signup-v15-secure"><LockKeyhole size={13} /> Secure setup</span>
        </div>

        <div className="signup-v15-brand-content">
          <span className="signup-v15-eyebrow"><Sparkles size={13} /> GET STARTED WITH VETTRI</span>
          <h1>Build a workplace<br /><em>that feels connected.</em></h1>
          <p>Start with Vettri HRMS and bring people, workplace operations and technology into one clear experience.</p>

          <div className="signup-v15-benefits">
            {[
              "Employee, attendance, leave & payroll",
              "Assets, devices, software & support",
              "One connected view for your team",
            ].map((item) => (
              <div key={item}><span><Check size={13} /></span>{item}</div>
            ))}
          </div>
        </div>

        <div className="signup-v15-brand-foot">
          <span>Vettri HRMS</span>
          <span>People · Workplace · Technology</span>
        </div>
      </section>

      <section className="signup-v15-main">
        <div className="signup-v15-form-wrap">
          <div className="signup-v15-progress" aria-label="Signup progress">
            <div className="signup-v15-progress-item active"><b>1</b><span>Your details</span></div>
            <div className="signup-v15-progress-line" />
            <div className="signup-v15-progress-item"><b>2</b><span>Account setup</span></div>
          </div>

          <div className="signup-v15-heading">
            <span className="signup-v15-mobile-eyebrow">VETTRI HRMS</span>
            <h2>Let&apos;s get your workplace started.</h2>
            <p>A few details first. We&apos;ll take you to secure account setup next.</p>
          </div>

          <form className="signup-v15-card" onSubmit={submit} noValidate>
            <div className="signup-v15-card-top">
              <div><span>STARTER SETUP</span><strong>Vettri HRMS</strong></div>
              <div className="signup-v15-plan-price"><b>₹199</b><small>/ employee / month</small></div>
            </div>

            <div className="signup-v15-fields">
              <label>Full name<input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" autoComplete="name" /></label>
              <label>Work email<input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" type="email" autoComplete="email" /></label>
              <label>Company name<input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Your company" autoComplete="organization" /></label>
              <label>Team size<select value={form.employees} onChange={(e) => update("employees", e.target.value)}><option value="">Select team size</option><option>1–10</option><option>11–25</option><option>26–50</option><option>51–100</option><option>101–250</option><option>250+</option></select></label>
            </div>

            {error && <p className="signup-v15-error" role="alert">{error}</p>}

            <button className="signup-v15-submit" type="submit">Continue to secure setup <ArrowRight size={17} /></button>
            <p className="signup-v15-note"><ShieldCheck size={14} /> Your details are used only to start your Vettri account setup.</p>
          </form>

          <div className="signup-v15-footer-row">
            <Link href="/pricing"><ChevronLeft size={14} /> Back to pricing</Link>
            <span>Already have an account? <a href={`${APP_URL}/login`}>Log in</a></span>
          </div>
        </div>
      </section>
    </main>
  );
}
