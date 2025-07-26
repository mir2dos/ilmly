"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import PhoneMockup from "@/components/ui/phone-mockup";
import { useTheme } from "next-themes";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const t = useTranslations("HomePage.HeroSection");
  const heroRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0, 0.5], [20, 0, -20]);
  const rotateY = useTransform(mouseX, [-0.5, 0, 0.5], [-20, 0, 20]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
      ref={heroRef}
      className="bg-background relative min-h-screen w-full overflow-hidden py-16"
    >
      <motion.div
        className="relative z-10 container mx-auto max-w-7xl"
        style={{ y: contentY }}
      >
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate={controls}
            className="flex flex-col text-center md:text-left"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="shadow-chart-3 text-foreground relative mb-4 flex w-fit items-center gap-2 rounded-full border-1 border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-1.5 text-sm font-medium shadow-sm"
            >
              <Sparkles size={18} color="blue" />
              <p
                dangerouslySetInnerHTML={{ __html: t.raw("eyebrowHeadline") }}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2
                className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl"
                dangerouslySetInnerHTML={{ __html: t.raw("sectionTitle") }}
              />
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-muted-foreground mb-8 text-lg leading-relaxed"
            >
              {t("sectionDesc")}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button className="relative rounded-full">
                  {t("ctaPrimary")}
                  <Sparkles className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="bg-background/50 absolute inset-0 -z-10 rounded-full backdrop-blur-sm"></div>
                <Button
                  variant="outline"
                  className="border-primary/20 hover:border-primary/30 hover:bg-primary/5 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  {t("ctaSecondary")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                },
              },
            }}
            initial="hidden"
            animate={controls}
            ref={mockupRef}
            className="relative mx-auto flex justify-center"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <motion.div
              className="relative z-10"
              style={{
                transformStyle: "preserve-3d",
                rotateX: rotateX,
                rotateY: rotateY,
                scale: 1,
                transition: "scale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <PhoneMockup
                imageUrl="https://blocks.mvp-subha.me/mobile-light.webp"
                alt="LU-cy mobile app"
                glowColor="rgba(62, 84, 229, 0.25)"
                className="max-w-[380px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
