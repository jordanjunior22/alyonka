"use client"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/webpages/Footer";
import ContactHeroSection from "@/webpages/Contact/HeroSection";
import ContactPageSection from "@/webpages/Contact/ContactUs";
export default function Sercices() {
  return (
    <div className="">
        <Navbar />
        <ContactHeroSection/>
        <ContactPageSection/>
      <Footer/>
    </div>
  );
}
