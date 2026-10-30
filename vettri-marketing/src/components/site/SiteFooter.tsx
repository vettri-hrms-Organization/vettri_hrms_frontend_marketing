import Link from "next/link";
import { APP_URL } from "@/lib/config";

export const SUPPORT_EMAIL = "customersupport@vettrihrms.in";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="v-footer">
      <div className="v-container">
        <div className="v-footer__grid">
          <div>
            <Link href="/" className="v-logo" aria-label="Vettri HRMS home">
              <span className="v-logo__mark" aria-hidden="true" />
              Vettri HRMS
            </Link>
            <p>One platform for people, time, pay and workplace devices. Built in India for growing teams.</p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><Link href="/#features">HR &amp; IT management</Link></li>
              <li><Link href="/#tour">Product tour</Link></li>
              <li><Link href="/#ai">Ask Vettri AI</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/contact">Contact &amp; demo</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/dpa">Data Processing Agreement</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get started</h4>
            <ul>
              <li><a href={`${APP_URL}/signup`}>Start free trial</a></li>
              <li><a href={`${APP_URL}/login`}>Sign in</a></li>
              <li><a href={`mailto:${SUPPORT_EMAIL}`}>customersupport@<wbr />vettrihrms.in</a></li>
            </ul>
          </div>
        </div>
        <div className="v-footer__bottom">
          <span>© {year} Vettri HRMS. All rights reserved.</span>
          <span>Made in India</span>
        </div>
      </div>
    </footer>
  );
}
