import type { ProblemItemType } from "@/lib/types";

import { Card, CardContent } from "./card";

import iconMap from "./icon-map";

interface ProblemItemProps {
  item: ProblemItemType;
}

export default function ProblemItem({ item }: ProblemItemProps) {
  const Icon = iconMap[item.icon as keyof typeof iconMap];

  return (
    <Card>
      <CardContent className="space-y-4 py-6 text-center">
        <Icon
          className="text-destructive mx-auto mb-8"
          width={80}
          height={80}
        />
        <h3 className="text-2xl font-bold">{item.title}</h3>
        <p>{item.desc}</p>
      </CardContent>
    </Card>
  );
}
