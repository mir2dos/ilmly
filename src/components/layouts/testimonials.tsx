"use client";

import { useTranslations } from "next-intl";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "./section";
import TestimonialItem from "../ui/testimonial-item";
import Image from "next/image";

type TestimonialType = {
  author: {
    name: string;
    avatar: string;
    position: string;
    company: string;
  };
  quote: string;
};

export default function Testimonials() {
  const t = useTranslations("HomePage.TestimonialsSection");
  const testimonials = t.raw("testimonials") as Array<TestimonialType>;

  return (
    <Section className="relative">
      <div className="absolute -top-30 left-30">
        <Image src="/assets/icons/quote.svg" alt="" width={120} height={120} />
      </div>
      <SectionWrapper>
        <SectionTitle>Testimonials</SectionTitle>
        <SectionContent>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialItem key={item.author.name} item={item} />
            ))}
          </ul>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
