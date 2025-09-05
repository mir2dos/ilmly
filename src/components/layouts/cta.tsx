import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import { Section, SectionContent, SectionWrapper } from "./section";
import Image from "next/image";

export default function CTA() {
  return (
    <Section>
      <SectionWrapper className="wrapper-xs">
        <SectionContent className="bg-muted text-muted-foreground grid items-center rounded-2xl px-12 py-8 md:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Want to stay updated?</h2>
            <p className="text-tertiary-foreground">
              Follow us on Telegram & Instagram.
            </p>
          </div>
          <div className="grid gap-4">
            <Button variant="secondary" size="xl" className="gap-3" asChild>
              <Link href="instagram.com">
                <Image
                  src="/assets/icons/instagram.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <span className="text-muted-foreground text-lg font-bold">
                  Follow the news
                </span>
              </Link>
            </Button>
            <Button variant="secondary" size="xl" className="gap-3" asChild>
              <Link href="telegram.com">
                <Image
                  src="/assets/icons/telegram.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <span className="text-muted-foreground text-lg font-bold">
                  Join our channel
                </span>
              </Link>
            </Button>
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
