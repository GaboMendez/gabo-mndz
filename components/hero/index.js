import React from 'react';
import { HeroBg, HeroContainer, VideoBg } from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={require('../../public/video.mp4')}
          type='video/mp4'
        />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
