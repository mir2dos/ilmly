import {
  Book,
  Headphones,
  PencilRuler,
  Play,
  SquareCheckBig,
} from "lucide-react";
import { useTranslations } from "next-intl";

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
    <Headphones key="headphones" size={75} />,
    <Book key="book" size={75} />,
    <PencilRuler key="pencil" size={75} />,
    <SquareCheckBig key="check" size={75} />,
  ];

  return (
    <Section>
      <SectionWrapper className="wrapper-sm pt-4">
        <SectionContent className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <ul className="mx-auto mt-20 grid w-fit grid-cols-2 items-center gap-10">
              {tests.map((test, idx) => (
                // staircase grid layout
                <li key={idx} className={`${idx % 2 !== 0 ? "-mt-20" : ""}`}>
                  <Card className="p-8">{test}</Card>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="max-w-[15ch] text-5xl font-bold">{t("0.title")}</h2>
            <p className="max-w-[50ch]">{t("0.desc")}</p>
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
    <Section>
      <SectionWrapper className="wrapper-sm pt-4">
        <SectionContent className="grid items-center gap-8 px-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="max-w-[12ch] text-5xl font-bold">{t("1.title")}</h2>
            <p className="max-w-[50ch]">{t("1.desc")}</p>
            <Button size="lg" asChild>
              <Link href="/tests">{t("1.cta")}</Link>
            </Button>
          </div>
          <div className="p-8">
            <AspectRatio ratio={16 / 9}>
              <Card className="grid h-full place-content-center p-2">
                <Play size={70} />
              </Card>
            </AspectRatio>
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
