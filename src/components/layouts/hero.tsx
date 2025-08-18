"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PhoneMockup from "@/components/ui/phone-mockup";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage.HeroSection");
  const heroRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={heroRef}
      className="bg-background relative min-h-screen w-full overflow-hidden py-16"
    >
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-2 text-center md:text-left">
            <div className="shadow-chart-3 text-foreground relative mb-4 flex w-fit items-center gap-2 rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium">
              <Sparkles size={18} color="blue" />
              <p
                dangerouslySetInnerHTML={{ __html: t.raw("eyebrowHeadline") }}
              />
            </div>
            <h2
              className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl"
              dangerouslySetInnerHTML={{ __html: t.raw("sectionTitle") }}
            />

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {t("sectionDesc")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button className="relative rounded-full">
                {t("ctaPrimary")}
                <Sparkles className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="border-primary/20 hover:border-primary/30 hover:bg-primary/5 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                {t("ctaSecondary")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <PhoneMockup
            imageUrl="/platform/dashboard.png"
            alt="LU-cy mobile app"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
