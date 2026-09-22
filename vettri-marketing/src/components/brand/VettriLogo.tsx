import Image from "next/image";
import type { ComponentProps } from "react";

export type VettriLogoVariant = "full" | "mark";
export type VettriLogoSize = "sm" | "md" | "lg";

type VettriLogoProps = Omit<ComponentProps<typeof Image>, "alt" | "src" | "width" | "height"> & {
  variant?: VettriLogoVariant;
  size?: VettriLogoSize;
  alt?: string;
};

const dimensions = {
  full: { width: 677, height: 260 },
  mark: { width: 292, height: 260 },
} as const;

const heights = {
  sm: 22,
  md: 30,
  lg: 42,
} as const;

export function VettriLogo({ variant = "full", size = "md", alt = "Vettri HRMS", className, ...props }: VettriLogoProps) {
  const source = variant === "full" ? "/brand/vettri-logo-full-transparent.png" : "/brand/vettri-mark-transparent.png";
  const { width, height } = dimensions[variant];
  const displayHeight = heights[size];

  return (
    <Image
      {...props}
      className={className}
      src={source}
      alt={alt}
      width={width}
      height={height}
      style={{ height: displayHeight, width: "auto", ...props.style }}
    />
  );
}
