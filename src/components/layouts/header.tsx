"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Header() {
  const t = useTranslations("HomePage.Header");

  const navigationLinks = [
    { href: "/", label: t("nav.home") },
    {
      href: "/",
      label: t("nav.about"),
    },
    {
      href: "/",
      label: t("nav.tests"),
    },
    {
      href: "#pricing",
      label: t("nav.pricing"),
    },
    {
      href: "/",
      label: t("nav.contact"),
    },
  ];

  return (
    <header className="bg-background-dark text-foreground-dark">
      <div className="wrapper-lg grid h-18 grid-cols-[1fr_auto] items-center gap-4">
        {/* Mobile view */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="bg-background-dark text-foreground-dark border-border-dark w-64 p-1 md:hidden"
            >
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem
                      key={index}
                      className="hover:bg-secondary-dark w-full rounded-sm"
                    >
                      <NavigationMenuLink href={link.href} className="py-1.5">
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Desktop view */}
          <div className="flex w-full items-center justify-between gap-4">
            <Logo variant="8" size="md" />
            {/* Navigation menu on desktop */}
            <NavigationMenu viewport={false} className="max-md:hidden">
              <NavigationMenuList className="gap-6">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="text-foreground-dark hover:text-secondary-foreground-dark py-1.5 font-semibold"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="accent" className="text-base" asChild>
            <Link href="/new">{t("nav.cta")}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
