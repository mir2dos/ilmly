import Image from "next/image";

import type { TestimonialType } from "@/types";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TestimonialItemProps {
  item: TestimonialType;
  idx: number;
}

export default function TestimonialItem({ item, idx }: TestimonialItemProps) {
  const rotateDegree = idx % 2 === 0 ? "rotate-2" : "-rotate-2";

  return (
    <li className={`${rotateDegree}`}>
      <Card>
        <CardContent className="">{item.quote}</CardContent>
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
    </li>
  );
}
