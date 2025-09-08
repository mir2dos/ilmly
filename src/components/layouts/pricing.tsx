"use client";

import { useTranslations } from "next-intl";

import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "@/components/layouts/section";

import PricingItem from "@/components/ui/pricing-item";

type TIER_TYPE = {
  type: string;
  price: number | string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export default function Pricing() {
  const t = useTranslations("HomePage.PricingSection");
  const tiers = t.raw("tiers") as Array<TIER_TYPE>;

  return (
    <Section
      id="pricing"
      className="pricing text-foreground-dark pt-32 pb-48 md:pt-48 md:pb-64"
    >
      <SectionWrapper className="wrapper-sm">
        <SectionTitle className="mix-blend-difference">
          {t("sectionTitle")}
        </SectionTitle>
        <SectionContent>
          <ul className="grid gap-4 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {tiers.map((item) => (
              <PricingItem key={item.type} item={item} />
            ))}
          </ul>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
