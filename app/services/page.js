"use client"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/webpages/Footer";
import ServicesHeroSection from "@/webpages/Services/HeroSection";
import OurServices from "@/webpages/Services/OurServices";
import WhatWeShip from "@/webpages/Services/WhatWeShip";
import ServicesCTASection from "@/webpages/Services/ServicesCTASection";
import GetAQuoteSection from "@/webpages/Quote/GetAQuoteSection";
import CallToActionBanner from "@/components/ui/CallToActionBanner";
import ContactPageSection from "@/webpages/Contact/ContactUs";

export default function Sercices() {
  return (
    <div className="">
        <Navbar />
        <ServicesHeroSection/>
        <OurServices/>
        <GetAQuoteSection/>
        <WhatWeShip/>
        <CallToActionBanner/>
        <ContactPageSection/>
      <Footer/>
    </div>
  );
}
