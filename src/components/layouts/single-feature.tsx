import {
  Book,
  Headphones,
  PencilRuler,
  Play,
  SquareCheckBig,
} from "lucide-react";
import { Section, SectionContent, SectionWrapper } from "./section";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";
import { AspectRatio } from "../ui/aspect-ratio";

export function Feature1() {
  const tests = [
    <Headphones key="headphones" size={75} />,
    <Book key="book" size={75} />,
    <PencilRuler key="pencil" size={75} />,
    <SquareCheckBig key="check" size={75} />,
  ];

  return (
    <Section>
      <SectionWrapper className="wrapper-sm pt-4">
        <SectionContent className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <ul className="mx-auto mt-20 grid w-fit grid-cols-2 items-center gap-10">
              {tests.map((test, idx) => (
                // staircase grid layout
                <li key={idx} className={`${idx % 2 !== 0 ? "-mt-20" : ""}`}>
                  <Card className="p-8">{test}</Card>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="max-w-[15ch] text-5xl font-bold">
              Create tests in just seconds
            </h2>
            <p className="max-w-[50ch]">
              Easily create, customize and publish your IELTS tests online.
              Plus, you can share it with others, too. Not only it’s free, but
              also we provide exclusive options in our Pro plan.
            </p>
            <Button size="lg" asChild>
              <Link href="/tests">See examples</Link>
            </Button>
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}

export function Feature2() {
  return (
    <Section>
      <SectionWrapper className="wrapper-sm pt-4">
        <SectionContent className="grid items-center gap-8 px-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="max-w-[12ch] text-5xl font-bold">
              Publish it in just 1 click
            </h2>
            <p className="max-w-[50ch]">
              You can decide whether you want your tests to be public, private
              and behind the paywall. Once you’ve decided, click on Publish and
              watch the magic unfold.
            </p>
            <Button size="lg" asChild>
              <Link href="/tests">Watch demo</Link>
            </Button>
          </div>
          <div className="p-8">
            <AspectRatio ratio={16 / 9}>
              <Card className="grid h-full place-content-center p-2">
                <Play size={70} />
              </Card>
            </AspectRatio>
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
