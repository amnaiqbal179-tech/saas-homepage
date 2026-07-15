"use client";

import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { HeroSection } from "@/components/sections/HeroSection";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Features } from "@/components/sections/Features";
import { ClaritySection } from "@/components/sections/ClaritySection";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { JournalSection } from "@/components/sections/JournalSection";
import { Testimonial } from "@/components/sections/Testimonial";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#d1e7ff] to-[#fffaf0] text-gray-900">

      <Navbar />

      <HeroSection />

      <DashboardPreview />

      <Features />

      <ClaritySection />

      <CaseStudy />

      <JournalSection />

      <Testimonial />

      <CTASection />

      <Footer />

    </main>
  );
}