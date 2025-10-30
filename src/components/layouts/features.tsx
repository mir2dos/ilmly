"use client";

import { useTranslations } from "next-intl";

import type { FeatureItemType } from "@/lib/types";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "@/components/layouts/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import iconMap from "../ui/icon-map";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import useMobile from "@/hooks/useMobile";

export default function Features() {
  const t = useTranslations("HomePage.FeaturesSection");
  const features = t.raw("features") as Array<FeatureItemType>;
  const isMobile = useMobile();

  return (
    <Section id="features" className="md:py-20">
      <SectionWrapper className="wrapper">
        <SectionTitle>{t("sectionTitle")}</SectionTitle>
        <SectionContent>
          {isMobile ? (
            <Tabs
              defaultValue={features[0].title}
              orientation="vertical"
              className="bg-card grid gap-4 overflow-hidden rounded-xl border"
            >
              <TabsList className="grid h-auto w-full justify-stretch gap-4 bg-transparent p-4">
                {features.map((feature) => {
                  const Icon = iconMap[feature.icon as keyof typeof iconMap];

                  return (
                    <TabsTrigger
                      key={feature.title}
                      value={feature.title}
                      className="h-fit w-full flex-0 items-center justify-start gap-4 px-8 py-4 text-start"
                    >
                      <Icon className="scale-150" />
                      <div>
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                        <p>{feature.desc}</p>
                      </div>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              <div className="relative isolate aspect-video rounded-md text-start">
                <div className="absolute top-1/4 left-16 -z-10 h-full w-full bg-[rgba(92,120,213,0.3)] shadow-[0_-20px_100px_10px_rgba(92,120,213,0.3)] blur-3xl"></div>

                {features.map((feature) => (
                  <TabsContent
                    key={feature.title}
                    value={feature.title}
                    className="relative h-full overflow-hidden"
                  >
                    <div className="absolute top-6 left-10 w-full">
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={feature.image}
                          alt="dashboard view"
                          fill
                          className="h-full w-full rounded-2xl object-cover"
                        />
                      </AspectRatio>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          ) : (
            <Tabs
              defaultValue={features[0].title}
              orientation="vertical"
              className="bg-card grid w-full grid-cols-[1fr_4fr] gap-4 overflow-hidden rounded-xl border"
            >
              <TabsList className="m-10 grid h-auto items-start justify-start gap-4 bg-transparent">
                {features.map((feature) => {
                  const Icon = iconMap[feature.icon as keyof typeof iconMap];

                  return (
                    <TabsTrigger
                      key={feature.title}
                      value={feature.title}
                      className="h-fit w-full items-center justify-start gap-8 px-8 py-4 text-start"
                    >
                      <Icon className="scale-200" />
                      <div>
                        <h3 className="text-2xl font-bold">{feature.title}</h3>
                        <p>{feature.desc}</p>
                      </div>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              <div className="relative isolate rounded-md text-start">
                <div className="absolute top-1/4 left-16 -z-10 h-full w-full bg-[rgba(92,120,213,0.3)] shadow-[0_-20px_100px_10px_rgba(92,120,213,0.3)] blur-3xl"></div>

                {features.map((feature) => (
                  <TabsContent
                    key={feature.title}
                    value={feature.title}
                    className="relative h-full overflow-hidden"
                  >
                    <div className="absolute top-14 left-10 w-full">
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={feature.image}
                          alt="dashboard view"
                          fill
                          className="h-full w-full rounded-2xl object-cover"
                        />
                      </AspectRatio>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          )}
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
