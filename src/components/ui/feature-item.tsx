import { Card, CardContent } from "./card";

import { ReactNode } from "react";

type FeatureItemType = {
  icon: ReactNode;
  title: string;
  desc: string;
};

interface FeatureItemProps {
  item: FeatureItemType;
}

export default function FeatureItem({ item }: FeatureItemProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-6 text-center">
        <div className="bg-primary text-primary-foreground mx-auto w-fit rounded-full p-5">
          {item.icon}
        </div>
        <h3 className="text-2xl font-bold">{item.title}</h3>
        <p>{item.desc}</p>
      </CardContent>
    </Card>
  );
}
