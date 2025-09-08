import { useTranslations } from "next-intl";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

import { INSTAGRAM_URL, TELEGRAM_URL } from "@/data/meta";

import {
  Section,
  SectionContent,
  SectionWrapper,
} from "@/components/layouts/section";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const t = useTranslations("HomePage.SocialSection");

  const socialLinks = [
    {
      label: t("instagram"),
      url: INSTAGRAM_URL,
      icon: "/assets/icons/instagram.svg",
    },
    {
      label: t("telegram"),
      url: TELEGRAM_URL,
      icon: "/assets/icons/telegram.svg",
    },
  ];

  return (
    <Section>
      <SectionWrapper className="wrapper-xs">
        <SectionContent className="bg-background-dark text-foreground-dark grid items-center gap-4 rounded-2xl px-12 py-8 md:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">{t("title")}</h2>
            <p className="text-secondary-foreground-dark">{t("desc")}</p>
          </div>
          <div className="grid gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.url}
                variant="tertiary"
                size="xl"
                className="w-fit gap-3"
                asChild
              >
                <Link href={link.url} target="_blank">
                  <Image src={link.icon} alt="" width={24} height={24} />
                  <span className="text-lg font-bold">{link.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </SectionContent>
      </SectionWrapper>
    </Section>
  );
}
