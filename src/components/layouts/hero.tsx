import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Section, SectionContent, SectionWrapper } from "./section";

export default function Hero() {
  return (
    <Section className="hero text-muted-foreground">
      <SectionWrapper className="wrapper-lg">
        <SectionContent className="grid items-center gap-8 pb-32 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-7xl leading-[1.1] font-bold">
              Easiest Way to Create & Share Tests Online
            </h1>
            <p className="text-tertiary-foreground max-w-[60ch]">
              Easily create, customize and publish your IELTS tests online.
              Plus, you can share it with others, too. Not only it’s free, but
              also we provide exclusive options in our Pro plan.
            </p>
            <div className="flex gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link href="/new">Create test</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              className="border-border rounded-xl border-4 shadow-2xl"
              src="/assets/images/dashboard.png"
              alt="Dashboard view"
              width={900}
              height={500}
            />
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
