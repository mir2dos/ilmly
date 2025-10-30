"use client";

import { useTranslations } from "next-intl";

import type { FeatureItemType } from "@/lib/types";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "@/components/layouts/section";
import ProblemItem from "../ui/problem-item";

export default function Problems() {
  const t = useTranslations("HomePage.ProblemsSection");
  const problems = t.raw("problems") as Array<FeatureItemType>;

  return (
    <Section>
      <SectionWrapper className="wrapper">
        <SectionTitle>{t("sectionTitle")}</SectionTitle>
        <SectionContent>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((item) => (
              <ProblemItem key={item.title} item={item} />
            ))}
          </ul>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
