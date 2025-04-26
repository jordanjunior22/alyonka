"use client"
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/webpages/Home/HeroSection";

export default function Home() {
  return (
    <div className="p-8">
      <Navbar />
      <HeroSection/>
    </div>
  );
}
