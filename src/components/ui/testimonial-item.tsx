import Image from "next/image";

import type { TestimonialItemType } from "@/lib/types";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface TestimonialItemProps {
  item: TestimonialItemType;
}

export default function TestimonialItem({ item }: TestimonialItemProps) {
  return (
    <Card className="mx-3 max-w-lg">
      <CardHeader>
        <p className="text-2xl font-bold">“{item.headline}”</p>
      </CardHeader>
      <CardContent>{item.quote}</CardContent>
      <CardFooter className="flex items-center gap-4">
        <Image src={item.author.avatar} alt="" width={60} height={60} />
        <div className="space-y-2">
          <p className="font-bold">{item.author.name}</p>
          <p>
            {item.author.position} @ {item.author.company}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
