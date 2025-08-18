import Header from "@/components/layouts/header";
import Features from "@/components/layouts/features";
import Pricing from "@/components/layouts/pricing";
import Faq from "@/components/layouts/faq";
import Hero from "@/components/layouts/hero";
import Footer from "@/components/layouts/footer";
import Contact from "@/components/layouts/contact";
import Clients from "@/components/layouts/clients";

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
