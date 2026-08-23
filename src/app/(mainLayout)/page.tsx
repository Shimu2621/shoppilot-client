"use client";

import { AboutUsSection } from "@/components/Sections/AboutUsSection";
import { BasicServicesSection } from "@/components/Sections/BasicServicesSection";
import CategoriesSection from "@/components/Sections/CategoriesSection";
import { ContactUsSection } from "@/components/Sections/ContactUsSection";
import { FeaturedProducts } from "@/components/Sections/FeaturedProduct";
import HeroSection from "@/components/Sections/HeroSection";
import { NewsletterSection } from "@/components/Sections/NewsletterSection";
import { SpecialOfferSection } from "@/components/Sections/SpecialOfferSection";
import { TestimonialSection } from "@/components/Sections/TestimonialSection";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <CategoriesSection />
      <BasicServicesSection />
      <FeaturedProducts />
      <SpecialOfferSection />
      <AboutUsSection />
      <NewsletterSection />
      <TestimonialSection />
      <ContactUsSection />
    </div>
  );
}
