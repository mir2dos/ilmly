"use client";

import { useTranslations } from "next-intl";

import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "@/components/layouts/section";

import PricingItem from "@/components/ui/pricing-item";
import type { PricingItemType } from "@/lib/types";

export default function Pricing() {
  const t = useTranslations("HomePage.PricingSection");
  const tiers = t.raw("tiers") as Array<PricingItemType>;

  return (
    <Section id="pricing">
      <SectionWrapper className="wrapper-sm">
        <SectionTitle>{t("sectionTitle")}</SectionTitle>
        <SectionContent>
          <ul className="grid gap-4 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {tiers.map((tier) => (
              <PricingItem key={tier.type} item={tier} />
            ))}
          </ul>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
