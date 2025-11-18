import MouseFollower from "./components/mouse-follower";
import { AboutMe } from "./modules/aboutme";
import { ExperienceSection } from "./modules/experience";
import Footer from "./modules/footer";
import { HeroSection } from "./modules/hero";
import { TopNav } from "./modules/nav";
import { ProjectSection } from "./modules/projects";
import { SkillSection } from "./modules/skills";

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#101922]">
      <MouseFollower />

      <div className="fixed top-0 w-screen z-50">
        <TopNav />
      </div>

      <div className="h-16" />

      <div className="relative z-10">
        <HeroSection />
        <AboutMe />
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
        <Footer />
      </div>
    </div>
  );
}
