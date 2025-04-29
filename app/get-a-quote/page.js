"use client"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/webpages/Footer";
import GetAQuoteHeroSection from "@/webpages/Quote/GetQuote";
import GetAQuoteSection from "@/webpages/Quote/GetAQuoteSection";
import AwardsSection from "@/components/ui/AwardSection";
import Testimonials from "@/components/ui/Testimonial";
import ServicesCTASection from "@/webpages/Services/ServicesCTASection";
export default function Sercices() {
  return (
    <div className="">
        <Navbar />
        <GetAQuoteHeroSection/>
        <AwardsSection/>
        <GetAQuoteSection/>
        <ServicesCTASection/>
        <Testimonials/>
      <Footer/>
    </div>
  );
}
