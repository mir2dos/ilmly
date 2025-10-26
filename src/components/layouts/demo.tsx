"use client";

import { useTranslations } from "next-intl";

import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
  SectionWrapper,
} from "@/components/layouts/section";
import { Card } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function Demo() {
  const t = useTranslations("HomePage.DemoSection");

  return (
    <Section id="demo" className="md:py-20">
      <SectionWrapper className="wrapper-sm">
        <SectionHeader>
          <SectionTitle>{t("sectionTitle")}</SectionTitle>
        </SectionHeader>
        <SectionContent className="grid justify-items-center gap-10">
          <AspectRatio ratio={16 / 9}>
            <Card className="h-full w-full overflow-hidden p-0">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/xNUx-rMGvvw?si=CXkdsYgEd-WUh_HU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Card>
          </AspectRatio>
          <Button variant="accent" size="lg" asChild>
            <Link href="/new">
              {t("cta")}
              <ArrowRightIcon />
            </Link>
          </Button>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
