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
import { ArrowRightIcon } from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";

export default function Hero() {
  const t = useTranslations("HomePage.HeroSection");

  return (
    <Section id="hero" className="md:py-16">
      <SectionWrapper className="wrapper">
        <SectionContent className="grid place-items-center gap-4 text-center">
          <h1
            className="max-w-[25ch] text-4xl leading-[1.1] font-bold md:text-6xl"
            dangerouslySetInnerHTML={{ __html: t.raw("title") }}
          ></h1>
          <p className="text-secondary-foreground-dark">{t("desc")}</p>
          <Button variant="accent" size="lg" asChild>
            <Link href="/new">
              {t("ctaPrimary")} <ArrowRightIcon />
            </Link>
          </Button>
          <div className="mx-auto my-12 w-full max-w-5xl">
            <AspectRatio
              ratio={16 / 10}
              className="border-border overflow-hidden rounded-xl border-4 shadow-[0_-20px_100px_10px_rgba(92,120,213,0.3)]"
            >
              <Image
                src="/assets/images/dashboard.png"
                alt="Dashboard view"
                fill
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
