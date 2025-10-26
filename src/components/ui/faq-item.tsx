import type { FaqItemType } from "@/lib/types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItemProps {
  item: FaqItemType;
  index: number;
}

export default function FaqItem({ item, index }: FeatureItemProps) {
  return (
    <Accordion
      className="bg-card border-border rounded-lg border px-6"
      type="single"
      collapsible
    >
      <AccordionItem value={`faq-${index}`}>
        <AccordionTrigger className="items-center text-xl font-bold">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="">{item.answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
