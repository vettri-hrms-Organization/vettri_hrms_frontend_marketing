import PageShell from "@/components/PageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Resources",
	description: "Practical guidance and product thinking for connected people and workplace operations.",
	alternates: { canonical: "/resources" },
	robots: { index: false, follow: true },
};

export default function ResourcesPage(){return <PageShell gradient="soft" eyebrow="Resources" title="A clearer way to think about connected work." intro="Practical guidance and product thinking for teams connecting people operations with workplace technology." sections={[{title:"Guides",body:"Practical guidance for connecting people operations and workplace technology.",items:["People operations foundations","Attendance, leave and payroll context","Workplace technology coordination"]},{title:"Product updates",body:"A concise view of how Vettri evolves across people, operations and workplace technology.",items:["Platform improvements","Workflow and control updates","Connected workplace patterns"]},{title:"Workplace insights",body:"Ideas for teams building more thoughtful, connected workplaces.",items:["Shared context for HR and IT","Clearer operational decisions","A more useful employee experience"]}]}/>}
