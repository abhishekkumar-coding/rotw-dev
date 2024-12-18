import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import OurApproach from "./components/OurApproach";
import TravelTips from "./components/TravelTips";
import Carousel from "./components/Carousel";
import WhatWeDo from "./components/WhatWeDo";
import BentoGrid from "./components/BentoGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />
      <WhatWeDo />
      <OurApproach />
      <BentoGrid />
      <TravelTips />
      <Footer />
    </>
  );
}
