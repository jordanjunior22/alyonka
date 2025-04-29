"use client"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/webpages/Footer";
import DriveForUsHeroSection from "@/webpages/Quote/HeroSection";
import HowOurDriversWorkSection from "@/webpages/Quote/HowDriversWork";
import DriveForUsSection from "@/webpages/Quote/DriveForUs";
import DriverTestimonialsSection from "@/webpages/Quote/DriverTestimonials";
import StaffAndServicesCTA from "@/components/ui/Staff";
export default function Sercices() {
  return (
    <div className="">
        <Navbar />
        <DriveForUsHeroSection/>
        <HowOurDriversWorkSection/>
        <DriveForUsSection/>
        <DriverTestimonialsSection/>
        <StaffAndServicesCTA/>
      <Footer/>
    </div>
  );
}
