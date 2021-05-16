import HeroSection from '../components/hero-section';
import InfoSection from '../components/info-section';
import { aboutObj, discoverObj } from '../components/info-section/data';

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection {...aboutObj} />
      <InfoSection {...discoverObj} />
    </>
  );
}
