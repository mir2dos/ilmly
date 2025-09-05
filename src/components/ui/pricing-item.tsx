import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Button } from "./button";
import { Link } from "@/i18n/navigation";
import Ribbon from "./ribbon";

type TIER_TYPE = {
  type: string;
  price: number | string;
  features: string[];
  cta: string;
  popular?: boolean;
};

interface PricingItemProps {
  item: TIER_TYPE;
}

export default function PricingItem({ item }: PricingItemProps) {
  const popularClassNames = item.popular ? "border-accent border-2" : "";

  return (
    <li>
      <Card
        className={`bg-tertiary text-muted-foreground border-border-dark text-center ${popularClassNames} relative overflow-hidden`}
      >
        {item.popular ? <Ribbon>Most popular</Ribbon> : null}
        <CardHeader className="space-y-4 pt-4">
          <h3 className="text-2xl font-semibold">{item.type}</h3>
          <p className="text-5xl font-bold">{item.price}</p>
        </CardHeader>
        <CardContent>
          <ul className="text-tertiary-foreground space-y-4">
            {item.features.map((feature) => (
              <li
                key={feature}
                className="mx-auto flex w-fit items-center gap-2"
              >
                <Check size={16}></Check>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pb-4">
          <Button variant="accent" className="mx-auto w-fit" asChild>
            <Link href="/start">{item.cta}</Link>
          </Button>
        </CardFooter>
      </Card>
    </li>
  );
}
