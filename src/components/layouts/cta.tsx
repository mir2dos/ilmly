import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import { Section, SectionContent, SectionWrapper } from "./section";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { INSTAGRAM_URL, TELEGRAM_URL } from "@/data/meta";

export default function CTA() {
  const t = useTranslations("HomePage.SocialSection");

  return (
    <Section>
      <SectionWrapper className="wrapper-xs">
        <SectionContent className="bg-muted text-muted-foreground grid items-center gap-4 rounded-2xl px-12 py-8 md:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">{t("title")}</h2>
            <p className="text-tertiary-foreground">{t("desc")}</p>
          </div>
          <div className="grid gap-4">
            <Button
              variant="secondary"
              size="xl"
              className="w-fit gap-3"
              asChild
            >
              <Link href={INSTAGRAM_URL} target="_blank">
                <Image
                  src="/assets/icons/instagram.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <span className="text-muted-foreground text-lg font-bold">
                  {t("instagram")}
                </span>
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="xl"
              className="w-fit gap-3"
              asChild
            >
              <Link href={TELEGRAM_URL} target="_blank">
                <Image
                  src="/assets/icons/telegram.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <span className="text-muted-foreground text-lg font-bold">
                  {t("telegram")}
                </span>
              </Link>
            </Button>
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
