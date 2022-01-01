import AboutSection from '../components/section-about';
import ContactSection from '../components/section-contact';
import HeroSection from '../components/section-hero';
import SkillsSection from '../components/section-skills';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      {/* <InfoSection {...discoverObj} /> */}
    </>
  );
}
