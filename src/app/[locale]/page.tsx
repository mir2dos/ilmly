// import { Button } from "@/components/ui/button";
// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/navigation";
import Header from "@/components/mvpblocks/header";
import Features from "@/components/mvpblocks/features";
import Pricing from "@/components/mvpblocks/pricing";
import Faq from "@/components/mvpblocks/faq";
import Hero from "@/components/mvpblocks/hero";
import Footer from "@/components/mvpblocks/footer";

export default function HomePage() {
  // const t = useTranslations("HomePage");
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Footer />
      {/* <h1>{t("hero.title")}</h1>
      <Link href="/about">{t("hero.about")}</Link>
      <Button variant="default">Hello world</Button> */}
    </>
  );
}
