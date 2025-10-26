"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
  SectionWrapper,
} from "@/components/layouts/section";

import { Button } from "@/components/ui/button";

export default function CTA() {
  const t = useTranslations("HomePage.CTA");

  return (
    <Section className="md:py-28">
      <SectionWrapper className="wrapper-xs">
        <SectionHeader>
          <SectionTitle>{t("title")}</SectionTitle>
          <SectionSubtitle>{t("subtitle")}</SectionSubtitle>
        </SectionHeader>
        <SectionContent>
          <div className="mx-auto flex w-fit gap-4">
            <Button variant="accent" asChild>
              <Link href="admin.ilmlyai.uz" target="_blank">
                {t("cta_primary")}
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/contact">{t("cta_secondary")}</Link>
            </Button>
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
