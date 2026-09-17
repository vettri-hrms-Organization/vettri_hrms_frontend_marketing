import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { APP_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Create your Vettri account",
  description: "Start your 14-day Vettri free trial. No credit card required.",
};

export default function SignupPage() {
  redirect(`${APP_URL}/signup`);
}
