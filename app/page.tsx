import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import HeroSection from "@/components/HeroSection";
import ResentWork from "@/components/ResentWork";
import { FloatingNav } from "@/components/ui/FloattingNavBar";
import WorkExperience from "@/components/WorkExperience";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <HeroSection />
        <Grid />
        <ResentWork />
        <Clients />
        <WorkExperience />
      </div>
    </main>
  );
}
