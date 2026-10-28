import type { Metadata } from "next";
import { CalendarCheck2, LifeBuoy, Mail, Rocket } from "lucide-react";
import { APP_URL } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter, { SUPPORT_EMAIL } from "@/components/site/SiteFooter";
import ContactForm from "@/components/site/ContactForm";

export const metadata: Metadata = createPageMetadata({
  title: "Contact and demo",
  description: "Book a Vettri HRMS demo, ask about pricing or get help. Talk to the team that builds Vettri.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="v-site">
      <SiteHeader />
      <main id="main-content">
        <section className="v-page-hero">
          <div className="v-container">
            <p className="v-eyebrow">Contact</p>
            <h1 className="v-h1">Let&apos;s talk about <span className="v-accent">your team.</span></h1>
            <p className="v-lead">Book a walkthrough, ask about pricing or migrating your data, or get help with your workspace. You&apos;ll hear from the people who build Vettri.</p>
          </div>
        </section>

        <section className="v-section v-section--canvas">
          <div className="v-container v-contact">
            <div className="v-contact__info">
              <div className="v-contact__item">
                <span className="v-icon"><CalendarCheck2 size={20} aria-hidden="true" /></span>
                <div><b>Book a demo</b><span>We&apos;ll walk you through Vettri using your own use cases, such as attendance rules, leave policy or payroll structure.</span></div>
              </div>
              <div className="v-contact__item">
                <span className="v-icon"><Mail size={20} aria-hidden="true" /></span>
                <div><b>Email us</b><a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></div>
              </div>
              <div className="v-contact__item">
                <span className="v-icon"><LifeBuoy size={20} aria-hidden="true" /></span>
                <div><b>Already a customer?</b><span>Use Support inside your Vettri workspace to raise a request and track its status.</span></div>
              </div>
              <div className="v-contact__item">
                <span className="v-icon"><Rocket size={20} aria-hidden="true" /></span>
                <div><b>Prefer to explore on your own?</b><a href={`${APP_URL}/signup`}>Start a free trial, no payment needed</a></div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
