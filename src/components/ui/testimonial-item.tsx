import Image from "next/image";
import { Card, CardContent, CardFooter } from "./card";

type TestimonialItemType = {
  author: {
    name: string;
    avatar: string;
    position: string;
    company: string;
  };
  quote: string;
};

interface TestimonialItemProps {
  item: TestimonialItemType;
}

export default function TestimonialItem({ item }: TestimonialItemProps) {
  return (
    <li className="rotate-2">
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
