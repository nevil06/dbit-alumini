import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MemoriesMarquee from "@/components/sections/MemoriesMarquee";
import ImpactStats from "@/components/sections/ImpactStats";
import DistinguishedAlumni from "@/components/sections/DistinguishedAlumni";
import Newsroom from "@/components/sections/Newsroom";
import AlumniAssist from "@/components/sections/AlumniAssist";
import ContributeSection from "@/components/sections/ContributeSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MemoriesMarquee />
        <ImpactStats />
        <DistinguishedAlumni />
        <AlumniAssist />
        <Newsroom />
        <ContributeSection />
      </main>
      <Footer />
    </>
  );
}
