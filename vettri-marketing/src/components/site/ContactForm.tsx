"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SUPPORT_EMAIL } from "./SiteFooter";

const TEAM_SIZES = ["1-25", "26-100", "101-250", "251-1000", "1000+"];
const TOPICS = ["Book a demo", "Pricing question", "Migrating from another tool", "Support", "Something else"];

/**
 * There is no lead-capture API yet, so the form composes an email to the
 * Vettri team in the visitor's own mail app instead of silently discarding
 * what they typed.
 */
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", size: "", topic: TOPICS[0], message: "" });
  const [error, setError] = useState("");
  const update = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.company.trim()) {
      setError("Please add your name, work email and company.");
      return;
    }
    setError("");
    const subject = `${form.topic} - ${form.company}`;
    const body = [
      `Name: ${form.name}`,
      `Work email: ${form.email}`,
      `Company: ${form.company}`,
      form.size ? `Team size: ${form.size}` : null,
      "",
      form.message || "(no message)",
    ].filter((line) => line !== null).join("\n");
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="v-form" onSubmit={submit} noValidate>
      <div className="v-form__grid">
        <div className="v-field">
          <label htmlFor="cf-name">Full name</label>
          <input id="cf-name" autoComplete="name" value={form.name} onChange={update("name")} required />
        </div>
        <div className="v-field">
          <label htmlFor="cf-email">Work email</label>
          <input id="cf-email" type="email" autoComplete="email" value={form.email} onChange={update("email")} required />
        </div>
        <div className="v-field">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" autoComplete="organization" value={form.company} onChange={update("company")} required />
        </div>
        <div className="v-field">
          <label htmlFor="cf-size">Number of employees</label>
          <select id="cf-size" value={form.size} onChange={update("size")}>
            <option value="">Select</option>
            {TEAM_SIZES.map((size) => <option key={size} value={size}>{size}</option>)}
          </select>
        </div>
        <div className="v-field v-field--full">
          <label htmlFor="cf-topic">How can we help?</label>
          <select id="cf-topic" value={form.topic} onChange={update("topic")}>
            {TOPICS.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
          </select>
        </div>
        <div className="v-field v-field--full">
          <label htmlFor="cf-message">Message (optional)</label>
          <textarea id="cf-message" value={form.message} onChange={update("message")} placeholder="Tell us about your team and what you'd like to see." />
        </div>
      </div>
      {error && <p className="v-form__error" role="alert">{error}</p>}
      <button type="submit" className="v-btn v-btn--primary">
        Send to the Vettri team <Send size={16} aria-hidden="true" />
      </button>
      <p className="v-form__fine">Opens your email app with your details filled in, addressed to {SUPPORT_EMAIL}.</p>
    </form>
  );
}
