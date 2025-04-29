"use client"
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/webpages/Home/HeroSection";
import OurServices from "@/webpages/Services/OurServices";
import AboutUsSection from "@/webpages/About/AboutUs";
import GetAQuoteSection from "@/webpages/Quote/GetAQuoteSection";
import DriveForUsSection from "@/webpages/Quote/DriveForUs";
import ContactPageSection from "@/webpages/Contact/ContactUs";
import Footer from "@/webpages/Footer";
import CallToActionBanner from "@/components/ui/CallToActionBanner";
import Testimonials from "@/components/ui/Testimonial";

export default function Home() {
  return (
    <div className="">
        <Navbar />
      <HeroSection/>
      <OurServices/>
      <AboutUsSection/>
      <GetAQuoteSection/>
      <DriveForUsSection/>
      <CallToActionBanner/>
      <Testimonials/>
      <ContactPageSection/>
      <Footer/>
    </div>
  );
}
