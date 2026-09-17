import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { GradientBackground } from "@/components/ui/gradient-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Vettri",
	description: "Connect with Vettri about people operations and workplace technology.",
	alternates: { canonical: "/contact" },
	robots: { index: false, follow: true },
};

export default function ContactPage(){return <><Navbar/><main id="main-content" className="contact-page contact-page-dark"><GradientBackground variant="blue" overlayOpacity={0.16} /><div className="container contact-grid"><div><div className="eyebrow">Contact Vettri</div><h1 className="display">Let&apos;s connect the workplace.</h1><p className="body-copy">Tell us what your people and operations teams are trying to make simpler. We&apos;ll start there.</p><ul className="contact-topics"><li>People operations</li><li>Workplace technology</li><li>Connected HR and IT workflows</li></ul></div><div className="contact-panel"><span className="eyebrow">Start a conversation</span><h2>Talk to our team</h2><p>Tell us what you want to connect across people, operations and workplace technology.</p><a className="btn btn-primary" href="mailto:hello@vettri.example">Email the team</a><small>We&apos;ll start with your current priorities and operating context.</small></div></div></main><Footer/></>}
