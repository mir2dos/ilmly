"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import Logo from "@/components/ui/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import LocaleSwitch from "../ui/locale-switch";
import type { LinkType } from "@/lib/types";
import { Button } from "../ui/button";
import { SettingsIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const t = useTranslations("HomePage.Header");
  const navigationLinks = t.raw("links") as Array<LinkType>;

  return (
    <header className="bg-background-dark text-foreground-dark">
      <div className="wrapper-lg flex items-center justify-between py-6">
        <Logo variant="8" size="md" />
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
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="secondary" size="icon">
                <SettingsIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Change Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LocaleSwitch />
              </DropdownMenuItem>
              <DropdownMenuLabel>Change theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Coming soon...</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="secondary" asChild>
            <Link href="/new">{t("ctaSecondary")}</Link>
          </Button>
          <Button variant="accent" asChild>
            <Link href="/new">{t("ctaPrimary")}</Link>
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
