"use client";

import { SectionContent, SectionWrapper } from "@/components/layouts/section";

import Logo from "@/components/ui/logo";
import { useTranslations } from "next-intl";
import type { LinkType } from "@/lib/types";
import { Link } from "@/i18n/navigation";
import SocialLinks from "../ui/social-links";

type FooterNavType = {
  title: string;
  links: LinkType[];
};

export default function Footer() {
  const t = useTranslations("HomePage.Footer");
  const navLinks = t.raw("nav") as Array<FooterNavType>;

  return (
    <footer className="border-border border-t py-16">
      <SectionWrapper>
        <SectionContent className="grid gap-4 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-14">
          <div className="space-y-4">
            <Logo variant="8" />
            <p className="max-w-[28ch]">{t("desc")}</p>
            <p>© 2025 Mir2Dos</p>
            <SocialLinks />
          </div>
          {navLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-bold">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => {
                  const openInNewTab = link.url.includes("http");

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.url}
                        target={openInNewTab ? "_blank" : undefined}
                        rel={openInNewTab ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </SectionContent>
      </SectionWrapper>
    </footer>
  );
}
