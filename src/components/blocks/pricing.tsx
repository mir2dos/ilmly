"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NumberFlow from "@number-flow/react";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeader from "../SectionHeader";

const PAYMENT_FREQUENCIES: ("monthly" | "yearly")[] = ["monthly", "yearly"];

type TIER_TYPE = {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number | string;
    yearly: number | string;
  };
  features: string[];
  cta: string;
  popular?: boolean;
  highlighted?: boolean;
};

const Tab = ({
  text,
  selected,
  setSelected,
  discount = false,
}: {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  discount?: boolean;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "text-foreground relative w-fit px-4 py-2 text-sm font-semibold capitalize transition-colors",
        discount && "flex items-center justify-center gap-2.5",
      )}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="bg-background absolute inset-0 z-0 rounded-full shadow-sm"
        ></motion.span>
      )}
      {discount && (
        <Badge
          className={cn(
            "relative z-10 bg-gray-100 text-xs whitespace-nowrap text-black shadow-none hover:bg-gray-100",
            selected
              ? "bg-[#F3F4F6] hover:bg-[#F3F4F6]"
              : "bg-gray-300 hover:bg-gray-300",
          )}
        >
          Save 35%
        </Badge>
      )}
    </button>
  );
};

const PricingCard = ({
  tier,
  paymentFrequency,
}: {
  tier: TIER_TYPE[][0];
  paymentFrequency: keyof typeof tier.price;
}) => {
  const price = tier.price[paymentFrequency];
  const isHighlighted = tier.highlighted;
  const isPopular = tier.popular;

  return (
    <div
      className={cn(
        "relative flex flex-col gap-8 overflow-hidden rounded-2xl border p-6 shadow",
        isHighlighted
          ? "bg-foreground text-background"
          : "bg-background text-foreground",
        isPopular &&
          "bg-gradient-to-br from-white to-blue-50 outline outline-blue-300",
      )}
    >
      <h3 className="flex items-center gap-3 text-xl font-medium capitalize">
        {tier.name}
        {isPopular && (
          <Badge className="mt-1 bg-blue-900 px-1 py-0 text-white">
            🔥 Most Popular
          </Badge>
        )}
      </h3>

      <div className="relative h-12">
        {typeof price === "number" ? (
          <>
            <NumberFlow
              format={{
                style: "currency",
                currency: "USD",
                trailingZeroDisplay: "stripIfInteger",
              }}
              value={price}
              className="text-4xl font-medium"
            />
            <p className="-mt-2 text-xs font-medium">Per month</p>
          </>
        ) : (
          <h1 className="text-4xl font-medium">{price}</h1>
        )}
      </div>

      <div className="flex-1 space-y-2">
        <h4 className="text-sm font-medium">{tier.description}</h4>
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                isHighlighted ? "text-background" : "text-foreground/60",
              )}
            >
              <BadgeCheck strokeWidth={1} size={16} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button
        className={cn(
          "h-fit w-full rounded-lg",
          isHighlighted && "bg-accent text-foreground hover:bg-accent/95",
        )}
      >
        {tier.cta}
      </Button>
    </div>
  );
};

export default function Pricing() {
  const t = useTranslations("HomePage.PricingSection");
  const [selectedPaymentFreq, setSelectedPaymentFreq] = useState<
    "monthly" | "yearly"
  >(PAYMENT_FREQUENCIES[0]);

  const TIERS = t.raw("tiers") as Array<TIER_TYPE>;

  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <div className="space-y-7 text-center">
        <SectionHeader
          badge={t("sectionBadge")}
          title={t("sectionTitle")}
          subtitle={t("sectionDesc")}
        />
        <div className="mx-auto flex w-fit rounded-full bg-[#F3F4F6] p-1 dark:bg-[#222]">
          {PAYMENT_FREQUENCIES.map((freq) => (
            <Tab
              key={freq}
              text={freq}
              selected={selectedPaymentFreq === freq}
              setSelected={(text) =>
                setSelectedPaymentFreq(text as "monthly" | "yearly")
              }
              discount={freq === "yearly"}
            />
          ))}
        </div>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {TIERS.map((tier, i) => (
          <PricingCard
            key={i}
            tier={tier}
            paymentFrequency={selectedPaymentFreq}
          />
        ))}
      </div>
    </section>
  );
}
