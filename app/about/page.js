"use client"
import Navbar from "@/components/Navbar/Navbar";
import AboutUsSection from "@/webpages/About/AboutUs";
import Footer from "@/webpages/Footer";
import AwardsSection from "@/components/ui/AwardSection";
import AboutHeroSection from "@/webpages/About/HeroSection";
import ServicesCTASection from "@/webpages/Services/ServicesCTASection";
export default function About() {
  return (
    <div className="">
        <Navbar />
        <AboutHeroSection/>
        <AboutUsSection/>
        <ServicesCTASection/>
        <AwardsSection/>

      <Footer/>
    </div>
  );
}
