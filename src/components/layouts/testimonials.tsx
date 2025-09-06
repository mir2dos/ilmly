"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";

import type { TestimonialType } from "@/types";

import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "@/components/layouts/section";
import TestimonialItem from "@/components/ui/testimonial-item";

export default function Testimonials() {
  const t = useTranslations("HomePage.TestimonialsSection");
  const testimonials = t.raw("testimonials") as Array<TestimonialType>;

  return (
    <Section className="relative">
      <div className="absolute -top-30 left-30">
        <Image src="/assets/icons/quote.svg" alt="" width={120} height={120} />
      </div>
      <SectionWrapper className="wrapper-lg">
        <SectionTitle>{t("sectionTitle")}</SectionTitle>
        <SectionContent>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <TestimonialItem key={item.author.name} item={item} idx={idx} />
            ))}
          </ul>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
