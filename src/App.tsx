import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { FeaturedWork } from "./components/FeaturedWork";
import { HowWeBuild } from "./components/HowWeBuild";
import { Exploring } from "./components/Exploring";
import { BuildWithUs } from "./components/BuildWithUs";
import { About } from "./components/About";
import { Technology } from "./components/Technology";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#000000] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <FeaturedWork />
        <HowWeBuild />
        <Exploring />
        <BuildWithUs />
        <About />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
