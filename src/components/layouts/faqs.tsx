"use client";

import { useTranslations } from "next-intl";

import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
  SectionWrapper,
} from "@/components/layouts/section";

import type { FaqItemType } from "@/lib/types";
import FaqItem from "../ui/faq-item";

export default function FAQs() {
  const t = useTranslations("HomePage.FAQsSection");
  const faqs = t.raw("faqs") as Array<FaqItemType>;

  return (
    <Section id="faqs" className="md:py-36">
      <SectionWrapper className="wrapper grid gap-4 md:grid-cols-[2fr_3fr]">
        <SectionHeader>
          <SectionTitle className="text-start">
            {t("sectionTitle")}
          </SectionTitle>
          <SectionSubtitle className="max-w-[45ch] text-start">
            {t("sectionDesc")}
          </SectionSubtitle>
        </SectionHeader>
        <SectionContent>
          <ul className="grid gap-4">
            {faqs.map((faq, index) => (
              <FaqItem key={faq.question} item={faq} index={index} />
            ))}
          </ul>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
