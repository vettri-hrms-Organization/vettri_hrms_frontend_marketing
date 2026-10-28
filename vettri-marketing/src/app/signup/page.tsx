import { redirect } from "next/navigation";
import { APP_URL } from "@/lib/config";

// Signup happens in the Vettri app, which runs the real account, organisation
// and workspace setup. This route only forwards visitors there (keeping any
// ?plan= query) instead of collecting details it would throw away.
export default async function SignupPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const plan = typeof params.plan === "string" ? params.plan : null;
  redirect(`${APP_URL}/signup${plan ? `?plan=${encodeURIComponent(plan)}` : ""}`);
}
