"use client";

import { Blocks, SquareCheckBig, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";
import FeatureItem from "../ui/feature-item";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "./section";

export default function Features() {
  const t = useTranslations("HomePage.FeaturesSection");

  const features = [
    {
      icon: <Blocks size={30} />,
      title: t("features.0.title"),
      desc: t("features.0.desc"),
    },
    {
      icon: <SquareCheckBig size={30} />,
      title: t("features.1.title"),
      desc: t("features.1.desc"),
    },
    {
      icon: <Wallet size={30} />,
      title: t("features.2.title"),
      desc: t("features.2.desc"),
    },
  ];

  return (
    <Section>
      <SectionWrapper className="wrapper-sm space-y-16 py-16">
        <SectionTitle>Our features</SectionTitle>
        <SectionContent>
          <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <FeatureItem key={item.title} item={item} />
            ))}
          </ul>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
