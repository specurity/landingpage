import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import MissionFeatures from "@/components/MissionFeatures";
import AIFeatures from "@/components/AIFeatures";
import Leadership from "@/components/Leadership";
import Team from "@/components/Team";
import Hiring from "@/components/Hiring";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#07080A] text-white">
      <Navigation />
      <main>
        <Hero />
        <Partners />
        <MissionFeatures />
        <AIFeatures />
        <Leadership />
        <Team />
        <Hiring />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
