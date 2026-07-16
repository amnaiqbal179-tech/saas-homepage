// src/app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import DashboardSection from "@/components/home/DashboardSection";
import FeatureSection from "@/components/home/FeatureSection";
import ActionSection from "@/components/home/ActionSection";
import CaseStudySection from "@/components/home/CaseStudySection";
import JournalSection from "@/components/home/JournalSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <main className="min-h-screen pt-24">
      <HeroSection />
      <DashboardSection />
      <FeatureSection />
      <ActionSection />
      <CaseStudySection />
      <JournalSection/>
      <TestimonialSection/>
      <CTASection/>
      <Footer/>
    </main>
  );
}