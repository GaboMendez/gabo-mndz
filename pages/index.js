import AboutSection from '../components/section-about';
import HeroSection from '../components/section-hero';
import InfoSection from '../components/section-info';
import { aboutObj, discoverObj } from '../components/section-info/data';
import SkillsSection from '../components/section-skills';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <InfoSection {...discoverObj} />
    </>
  );
}
