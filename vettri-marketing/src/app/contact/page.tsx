import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { GradientBackground } from "@/components/ui/gradient-background";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Vettri HRMS",
  description: "Talk to the Vettri HRMS team about employee management, attendance, leave, payroll and connected workplace operations.",
  path: "/contact",
});

export default function ContactPage(){return <><Navbar/><main id="main-content" className="contact-page contact-page-dark"><GradientBackground variant="blue" overlayOpacity={0.16} /><div className="container contact-grid"><div><div className="eyebrow">Contact Vettri</div><h1 className="display">Let&apos;s connect the workplace.</h1><p className="body-copy">Tell us what your people and operations teams are trying to make simpler. We&apos;ll start there.</p><ul className="contact-topics"><li>People operations</li><li>Workplace technology</li><li>Connected HR and IT workflows</li></ul></div><div className="contact-panel"><span className="eyebrow">Start a conversation</span><h2>Talk to our team</h2><p>Tell us what you want to connect across people, operations and workplace technology.</p><p>Vettri Customer Support<br /><a href="mailto:customersupport@vettrihrms.in">customersupport@vettrihrms.in</a></p><a className="btn btn-primary" href="mailto:customersupport@vettrihrms.in">Email the team</a><small>We&apos;ll start with your current priorities and operating context.</small></div></div></main><Footer/></>}
