"use client";

import { AboutUsSection } from "@/components/Sections/AboutUsSection";
import { BasicServicesSection } from "@/components/Sections/BasicServicesSection";
import CategoriesSection from "@/components/Sections/CategoriesSection";
// import CategoryFlex from "@/components/Sections/CategoryFlex"
import { ContactSection } from "@/components/Sections/ContactSection";
import { FeaturedProducts } from "@/components/Sections/FeaturedProduct";
import HeroSection from "@/components/Sections/HeroSection";
// import { HeroSection } from "@/components/Sections/HeroSection"
import { NewsletterSection } from "@/components/Sections/NewsletterSection";

import { StatsSection } from "@/components/Sections/StatsSection";
import { TestimonialsSection } from "@/components/Sections/TestimonialSection";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* <CategoryFlex/> */}
      {/* <HeroSection /> */}
      <HeroSection />
      <CategoriesSection />
      <BasicServicesSection />
      <FeaturedProducts />
      <AboutUsSection />

      <StatsSection />
      <TestimonialsSection />
      {/* <BlogSection /> */}
      <NewsletterSection />
      <ContactSection />
    </div>
  );
}
