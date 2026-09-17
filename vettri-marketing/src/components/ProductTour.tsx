"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Laptop2, ShieldCheck, UsersRound } from "lucide-react";
import { useState } from "react";
import { ProductPreview } from "@/components/ProductPreview";
import { APP_URL } from "@/lib/config";

const tours = [
  { id: "people", label: "People operations", icon: UsersRound, title: "Start with the employee record.", body: "See the people, attendance, documents and lifecycle context Vettri is designed to bring together.", variant: "employee" as const, items: ["Employee profile", "Attendance and leave", "Documents and requests"] },
  { id: "workplace", label: "Workplace technology", icon: Laptop2, title: "Carry the context into the workplace.", body: "Explore the relationship between a person, their assigned device, software and operational support.", variant: "assets" as const, items: ["Assigned assets", "Device context", "Workplace status"] },
  { id: "control", label: "Operating controls", icon: ShieldCheck, title: "Give teams a clearer operating picture.", body: "Understand how Vettri presents the workflows and controls that connect HR and workplace operations.", variant: "hr" as const, items: ["Roles and visibility", "Operational review", "Connected reports"] },
];

export function ProductTour() {
  const [activeId, setActiveId] = useState("people");
  const active = tours.find((tour) => tour.id === activeId) ?? tours[0];
  const Icon = active.icon;

  return (
    <section className="tour-section">
      <div className="container">
        <div className="tour-tabs" role="tablist" aria-label="Product tour areas">
          {tours.map((tour) => {
            const TourIcon = tour.icon;
            return <button className={`tour-tab ${tour.id === active.id ? "active" : ""}`} key={tour.id} type="button" role="tab" aria-selected={tour.id === active.id} onClick={() => setActiveId(tour.id)}><TourIcon size={17} />{tour.label}</button>;
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active.id} className="tour-panel" role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .3, ease: [0.16, 1, 0.3, 1] }}>
            <div className="tour-copy">
              <div className="module-icon" style={{ color: "var(--blue)", background: "var(--soft-blue)" }}><Icon size={22} /></div>
              <div className="eyebrow">Interactive preview</div>
              <h2 className="section-title">{active.title}</h2>
              <p className="body-copy">{active.body}</p>
              <ul className="tour-list">{active.items.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul>
              <a className="btn btn-primary" href={`${APP_URL}/signup`}>Start with Vettri <ArrowRight size={15} /></a>
            </div>
            <div><ProductPreview variant={active.variant} /><p className="preview-disclaimer">Illustrative Vettri product preview. Values shown are sample data, not live customer information.</p></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
