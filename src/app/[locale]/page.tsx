import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <Link href="/about">{t("hero.about")}</Link>
      <Button variant="default">Hello world</Button>
    </div>
  );
}
