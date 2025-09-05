import { useTranslations } from "next-intl";
import PricingItem from "../ui/pricing-item";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "./section";

type TIER_TYPE = {
  type: string;
  price: number | string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export default function Pricing() {
  const t = useTranslations("HomePage.PricingSection");
  const tiers = t.raw("tiers") as Array<TIER_TYPE>;

  return (
    <Section className="pricing text-muted-foreground">
      <SectionWrapper className="wrapper-sm pt-48 pb-64">
        <SectionTitle>Pricing</SectionTitle>
        <SectionContent>
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((item) => (
              <PricingItem key={item.type} item={item} />
            ))}
          </ul>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
