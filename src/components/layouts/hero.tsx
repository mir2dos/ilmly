"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

import {
  Section,
  SectionContent,
  SectionWrapper,
} from "@/components/layouts/section";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useTranslations("HomePage.HeroSection");

  return (
    <Section className="hero text-muted-foreground">
      <SectionWrapper className="wrapper-lg">
        <SectionContent className="grid items-center gap-8 pb-32 lg:grid-cols-2">
          <div className="space-y-8">
            <h1
              className="text-7xl leading-[1.1] font-bold"
              dangerouslySetInnerHTML={{ __html: t.raw("title") }}
            ></h1>
            <p className="text-tertiary-foreground max-w-[60ch]">{t("desc")}</p>
            <div className="flex gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link href="/new">{t("ctaPrimary")}</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="#pricing">{t("ctaSecondary")}</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              className="border-border rounded-xl border-4 shadow-2xl"
              src="/assets/images/dashboard.png"
              alt="Dashboard view"
              width={900}
              height={500}
            />
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
