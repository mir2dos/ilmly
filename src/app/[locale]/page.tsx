import CTA from "@/components/layouts/cta";
import Features from "@/components/layouts/features";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Hero from "@/components/layouts/hero";
import Pricing from "@/components/layouts/pricing";
import { Feature1, Feature2 } from "@/components/layouts/single-feature";
import Testimonials from "@/components/layouts/testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Feature1 />
      <Features />
      <Feature2 />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
