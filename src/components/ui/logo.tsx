"use client";

import { Link } from "@/i18n/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "./skeleton";

interface LogoProps {
  variant?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  size?: "sm" | "md";
}

export default function Logo({ variant = "4", size = "md" }: LogoProps) {
  return (
    <Link href="/" className="block">
      <Image
        src={`/logo/logo-${variant}.svg`}
        alt="logo"
        width={size == "sm" ? "60" : "80"}
        height={size == "sm" ? "30" : "40"}
      />
    </Link>
  );
}

/**
 * Automatically adapt the logo based on the theme.
 */
export function ThemeAdaptiveLogo(props: LogoProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Skeleton className="h-8 w-24" />;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const logoVariant = currentTheme === "dark" ? "8" : "4";

  return <Logo variant={logoVariant} {...props} />;
}
