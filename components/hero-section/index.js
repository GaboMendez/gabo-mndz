import React from 'react';
import { Description, HeroBg, HeroContainer, HeroContent, Title, VideoBg } from './styles';

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
      <HeroContent>
        <Title>Gabriel Mendez</Title>
        <Description>Software Engineer</Description>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
