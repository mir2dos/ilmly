"use client";

import { useTranslations } from "next-intl";
import {
  Book,
  Headphones,
  PencilRuler,
  Play,
  SquareCheckBig,
} from "lucide-react";

import { Link } from "@/i18n/navigation";

import {
  Section,
  SectionContent,
  SectionWrapper,
} from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Feature1() {
  const t = useTranslations("HomePage.SingleFeature");

  const tests = [
    <Headphones key="headphones" className="h-12 w-12 md:h-20 md:w-20" />,
    <Book key="book" className="h-12 w-12 md:h-20 md:w-20" />,
    <PencilRuler key="pencil" className="h-12 w-12 md:h-20 md:w-20" />,
    <SquareCheckBig key="check" className="h-12 w-12 md:h-20 md:w-20" />,
  ];

  return (
    <Section>
      <SectionWrapper className="wrapper-sm">
        <SectionContent className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <ul className="mx-auto grid w-fit grid-cols-2 items-center gap-4 md:mt-20 md:gap-10">
              {tests.map((test, idx) => (
                // staircase grid layout
                <li key={idx} className={`${idx % 2 !== 0 ? "-mt-20" : ""}`}>
                  <Card className="p-4 md:p-8">{test}</Card>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 text-center md:space-y-6 md:text-left">
            <h2 className="mx-auto max-w-[15ch] text-4xl font-bold md:mx-0 md:text-5xl">
              {t("0.title")}
            </h2>
            <p className="mx-auto max-w-[50ch] md:mx-0">{t("0.desc")}</p>
            <Button size="lg" asChild>
              <Link href="/tests">{t("0.cta")}</Link>
            </Button>
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}

export function Feature2() {
  const t = useTranslations("HomePage.SingleFeature");

  return (
    <Section className="pt-4">
      <SectionWrapper className="wrapper-sm">
        <SectionContent className="grid items-center gap-8 px-8 md:grid-cols-2">
          <div className="space-y-4 text-center md:space-y-6 md:text-left">
            <h2 className="mx-auto max-w-[15ch] text-4xl font-bold md:mx-0 md:text-5xl">
              {t("1.title")}
            </h2>
            <p className="mx-auto max-w-[50ch] md:mx-0">{t("1.desc")}</p>
            <Button size="lg" asChild>
              <Link href="/tests">{t("1.cta")}</Link>
            </Button>
          </div>
          <div className="md:p-8">
            <AspectRatio ratio={16 / 9}>
              <Card className="grid h-full place-content-center">
                <Play size={70} />
              </Card>
            </AspectRatio>
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
