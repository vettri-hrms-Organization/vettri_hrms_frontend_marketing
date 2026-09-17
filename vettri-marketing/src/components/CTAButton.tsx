import Link from "next/link";
import type { ReactNode } from "react";

export function CTAButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) return <Link className={`btn ${className}`.trim()} href={href}>{children}</Link>;
  return <a className={`btn ${className}`.trim()} href={href}>{children}</a>;
}
