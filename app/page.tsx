
import InfoSection from "@/containers/info-section";
import SkillSection from "@/containers/skill-section";
// import AboutSection from "@/containers/about-section";
import ExperienceSection from "@/containers/exp-section";
// import ProjectSection from "@/containers/project-section";
import ContactSection from "@/containers/contact-section";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <InfoSection/>
      {/* <AboutSection/> */}
      <SkillSection/>
      <ExperienceSection/>
      {/* <ProjectSection/> */}
      <ContactSection/>
    </main>
  );
}
