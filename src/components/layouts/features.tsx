"use client";

import { useTranslations } from "next-intl";

import type { FeatureItemType } from "@/lib/types";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "@/components/layouts/section";
import FeatureItem from "@/components/ui/feature-item";

export default function Features() {
  const t = useTranslations("HomePage.FeaturesSection");
  const features = t.raw("features") as Array<FeatureItemType>;

  return (
    <Section>
      <SectionWrapper className="wrapper">
        <SectionTitle>{t("sectionTitle")}</SectionTitle>
        <SectionContent>
          <ul className="grid gap-4 md:grid-cols-4">
            {features.map((item) => (
              <FeatureItem key={item.title} item={item} />
            ))}
          </ul>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
