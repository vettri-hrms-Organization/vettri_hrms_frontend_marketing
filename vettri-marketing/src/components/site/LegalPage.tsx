import type { ReactNode } from "react";
import { ScrollText } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

type LegalPageProps = {
  title: string;
  lead: string;
  version: string;
  effectiveDate: string;
  toc?: { id: string; label: string }[];
  children: ReactNode;
};

export const DRAFT_NOTE = "Draft — to be reviewed by legal counsel before publication";

/** Shared shell for long legal documents: light hero, draft banner, readable prose column. */
export default function LegalPage({ title, lead, version, effectiveDate, toc, children }: LegalPageProps) {
  return (
    <div className="v-site">
      <div hidden dangerouslySetInnerHTML={{ __html: `<!-- ${DRAFT_NOTE} -->` }} />
      <SiteHeader />
      <main id="main-content">
        <section className="v-page-hero">
          <div className="v-container v-container--narrow">
            <p className="v-legal-draft" role="note">{DRAFT_NOTE}</p>
            <p className="v-eyebrow"><ScrollText size={14} aria-hidden="true" /> Legal</p>
            <h1 className="v-h1">{title}</h1>
            <p className="v-lead">{lead}</p>
            <p className="v-legal-meta">Version {version} · Effective {effectiveDate}</p>
          </div>
        </section>
        <section className="v-section">
          <div className="v-container v-container--narrow">
            <article className="v-legal">
              {toc && toc.length > 0 && (
                <nav className="v-legal-toc" aria-label="On this page">
                  <p>On this page</p>
                  <ol>
                    {toc.map((item) => (
                      <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
                    ))}
                  </ol>
                </nav>
              )}
              {children}
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

/** Highlights text that must be filled in before publication. */
export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="v-legal-placeholder">{children}</span>;
}
