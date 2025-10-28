"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { ThemeAdaptiveLogo } from "@/components/ui/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { LinkType } from "@/lib/types";
import { Button } from "../ui/button";
import { PLATFORM_URL } from "@/lib/constants";
import Settings from "../ui/settings";
import useMobile from "@/hooks/useMobile";

export default function Header() {
  const t = useTranslations("HomePage.Header");
  const isMobile = useMobile();

  const navigationLinks = t.raw("links") as Array<LinkType>;

  return (
    <header className="bg-background-dark text-foreground-dark">
      <div className="wrapper-lg flex items-center justify-between py-6">
        <ThemeAdaptiveLogo size="md" />
        {/* TODO: Add responsive version with dropdown */}
        {isMobile ? null : (
          <NavigationMenu>
            <NavigationMenuList>
              {navigationLinks.map((link, index) => {
                const isActive = index === 0;

                return (
                  <NavigationMenuItem
                    key={index}
                    className={`${isActive ? "underline underline-offset-4" : null} rounded-full px-4`}
                  >
                    <NavigationMenuLink
                      href={link.url}
                      className="py-2 text-base font-bold"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        )}
        <div className="flex items-center gap-2">
          <Settings />

          <Button variant="secondary" asChild>
            <Link href={PLATFORM_URL} target="_blank" rel="noopener noreferrer">
              {t("ctaSecondary")}
            </Link>
          </Button>
          <Button variant="accent" asChild>
            <Link href={PLATFORM_URL} target="_blank" rel="noopener noreferrer">
              {t("ctaPrimary")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

/**
 * 
 * <Logo variant="8" size="sm" />
            <NavigationMenu viewport={false} className="max-md:hidden">
              <NavigationMenuList className="gap-6">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink href={link.href} className="">
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
 */
