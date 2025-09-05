"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export default function Header() {
  const t = useTranslations("HomePage.Header");

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.tests"), href: "/tests" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.contact"), href: "/contact" },
    { name: t("nav.cta"), href: "/start", isButton: true },
  ];

  return (
    <header className="bg-muted text-muted-foreground">
      <div className="wrapper-lg flex items-center justify-between py-6">
        <Logo variant="8" />
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 space-x-1">
            {navItems.map((item) => (
              <li key={item.name} className="font-semibold">
                {item.isButton ? (
                  <Button variant="accent" className="text-base" asChild>
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                ) : (
                  <Link href={item.href}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
