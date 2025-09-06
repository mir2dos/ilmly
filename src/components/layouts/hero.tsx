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
        <SectionContent className="grid items-center gap-8 pb-32 text-center lg:grid-cols-2 lg:text-left">
          <div className="space-y-4 md:space-y-8">
            <h1
              className="mx-auto max-w-[25ch] text-4xl leading-[1.1] font-bold md:max-w-[15ch] md:text-6xl lg:mx-0 lg:text-7xl"
              dangerouslySetInnerHTML={{ __html: t.raw("title") }}
            ></h1>
            <p className="text-tertiary-foreground mx-auto max-w-[60ch] lg:mx-0">
              {t("desc")}
            </p>
            <div className="mx-auto flex w-fit gap-4 lg:mx-0">
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
              className="border-border mx-auto rounded-xl border-4 shadow-2xl"
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
