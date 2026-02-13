import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import AIFeatures from "@/components/AIFeatures";
import Hiring from "@/components/Hiring";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#07080A] text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Partners />
        <AIFeatures />
        <Hiring />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
