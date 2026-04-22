import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrainSection from "@/components/TrainSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import CoachSection from "@/components/CoachSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrainSection />
      <HowItWorks />
      <Features />
      <Categories />
      <CoachSection />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
