import Header from "@/components/blocks/header";
import Features from "@/components/blocks/features";
import Pricing from "@/components/blocks/pricing";
import Faq from "@/components/blocks/faq";
import Hero from "@/components/blocks/hero";
import Footer from "@/components/blocks/footer";
import Contact from "@/components/blocks/contact";
import Clients from "@/components/blocks/clients";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Features />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
