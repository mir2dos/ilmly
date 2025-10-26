import { CircleCheckIcon, CrownIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Button } from "./button";
import { Link } from "@/i18n/navigation";
import type { PricingItemType } from "@/lib/types";

interface PricingItemProps {
  item: PricingItemType;
}

export default function PricingItem({ item }: PricingItemProps) {
  return (
    <li>
      <Card>
        <CardHeader className="space-y-4 pt-4 text-center">
          <h3 className="inline-flex items-center justify-center gap-2 text-2xl font-semibold">
            {item.popular ? <CrownIcon /> : null}
            {item.type}
          </h3>
          <p className="text-3xl font-bold md:text-6xl">{item.price}</p>
        </CardHeader>
        <CardContent>
          <ul className="text-secondary-foreground mx-auto w-fit space-y-4">
            {item.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <CircleCheckIcon size={16}></CircleCheckIcon>
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
