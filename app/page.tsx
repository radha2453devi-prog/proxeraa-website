import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Positioning from "@/components/Positioning";
import Services from "@/components/Services";
import FeatureShowcase from "@/components/FeatureShowcase";
import Breakout from "@/components/Breakout";
import HowWeWork from "@/components/HowWeWork";
import AutomationDemo from "@/components/AutomationDemo";
import ROICalculator from "@/components/ROICalculator";
import GrowthSection from "@/components/GrowthSection";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import WhyProxeraa from "@/components/WhyProxeraa";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import LeadMagnet from "@/components/LeadMagnet";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Positioning />
        <Services />
        <FeatureShowcase />
        <Breakout />
        <HowWeWork />
        <AutomationDemo />
        <ROICalculator />
        <GrowthSection />
        <CaseStudies />
        <TechStack />
        <WhyProxeraa />
        <Industries />
        <Testimonials />
        <ComparisonTable />
        <FAQ />
        <CTA />
        <LeadMagnet />
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
