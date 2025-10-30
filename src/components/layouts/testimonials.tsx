"use client";

import { useTranslations } from "next-intl";

import type { TestimonialItemType } from "@/lib/types";

import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "@/components/layouts/section";

import TestimonialItem from "@/components/ui/testimonial-item";

import Marquee from "react-fast-marquee";

export default function Testimonials() {
  const t = useTranslations("HomePage.TestimonialsSection");
  const testimonials = t.raw("testimonials") as Array<TestimonialItemType>;
  const median = Math.floor(testimonials.length / 2);

  return (
    <Section>
      <SectionWrapper className="wrapper-full">
        <SectionTitle>{t("sectionTitle")}</SectionTitle>
        <SectionContent className="space-y-6">
          <Marquee speed={25}>
            {testimonials.slice(0, median).map((item) => (
              <TestimonialItem key={item.author.name} item={item} />
            ))}
          </Marquee>
          <Marquee speed={25} autoFill direction="right">
            {testimonials.slice(median).map((item) => (
              <TestimonialItem key={item.author.name} item={item} />
            ))}
          </Marquee>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
