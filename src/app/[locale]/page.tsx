import CTA from "@/components/layouts/cta";
import Demo from "@/components/layouts/demo";
import FAQs from "@/components/layouts/faqs";
import Features from "@/components/layouts/features";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Hero from "@/components/layouts/hero";
import Pricing from "@/components/layouts/pricing";
import Testimonials from "@/components/layouts/testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Demo />
      <Pricing />
      <FAQs />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
