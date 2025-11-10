import { AboutMe } from "./modules/aboutme";
import { ExperienceSection } from "./modules/experience";
import Footer from "./modules/footer";
import { HeroSection } from "./modules/hero";
import { TopNav } from "./modules/nav";
import { ProjectSection } from "./modules/projects";
import { SkillSection } from "./modules/skills";

export default function App() {
  return (
    <div className=" w-full min-h-screen bg-[#101922]">
      <div className=" fixed top-0 w-full">
        <TopNav />
      </div>
      <div className=" h-16" />
      <HeroSection />
      <AboutMe />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
