/* Draft — to be reviewed by legal counsel before publication. */
import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import LegalPage, { Placeholder } from "@/components/site/LegalPage";
import { SUPPORT_EMAIL } from "@/components/site/SiteFooter";

export const metadata: Metadata = createPageMetadata({
  title: "Refund & Cancellation Policy",
  description: "How cancellations, refunds and the trial verification charge work for Vettri HRMS subscriptions.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      lead="Simple rules for trials, cancellations and refunds on Vettri HRMS subscriptions."
      version="2026-10-01"
      effectiveDate="1 October 2026"
    >
      <h2 id="trial">1. Free trial and verification charge</h2>
      <p>When you start a free trial we may collect a small verification charge (for example ₹1) through Razorpay to confirm your payment method. <Placeholder>[State whether this charge is refunded automatically, and within how many days.]</Placeholder> You will not be charged the subscription fee during the trial.</p>

      <h2 id="cancel">2. Cancelling a subscription</h2>
      <ul>
        <li>You can cancel at any time from your workspace billing settings or by writing to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</li>
        <li>Monthly plans: cancellation takes effect at the end of the current month. We do not refund partial months.</li>
        <li>Quarterly and annual plans: cancellation takes effect at the end of the paid term. If you cancel within <Placeholder>[14]</Placeholder> days of the first payment of an annual plan, we refund the unused portion on a pro-rata basis.</li>
      </ul>

      <h2 id="refunds">3. When we refund</h2>
      <ul>
        <li>Duplicate or mistaken charges are refunded in full.</li>
        <li>If we terminate the service for reasons other than your breach, or you terminate because we materially breached the <Link href="/terms">Terms</Link>, we refund prepaid fees for the unused period.</li>
        <li>If you object to a new sub-processor and terminate under the <Link href="/dpa">DPA</Link>, we refund prepaid fees for the unused period.</li>
        <li>Reductions in employee count take effect from the next billing cycle and are not refunded for the current cycle.</li>
      </ul>

      <h2 id="process">4. How refunds are paid</h2>
      <p>Approved refunds go back to the original payment method through Razorpay, usually within 5&ndash;7 working days of approval (bank timelines may vary). GST is refunded or adjusted through a credit note as required by law.</p>

      <h2 id="data">5. Your data after cancellation</h2>
      <p>Export your data before your subscription ends. Account deletion follows the 30-day process described in the Terms.</p>

      <h2 id="contact">6. Contact</h2>
      <p>Billing questions: <a href={`mailto:${SUPPORT_EMAIL}?subject=Billing%20question`}>{SUPPORT_EMAIL}</a>.</p>
    </LegalPage>
  );
}
