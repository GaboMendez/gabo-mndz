import React from 'react';
import SocialMedia from '../social-media';
import {
  ButtonScroll,
  ButtonWrapper,
  CircleAvatar,
  Description,
  HeroBg,
  HeroContainer,
  HeroContent,
  Title,
  VideoBg,
} from './styles';

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

      <CircleAvatar />
      <HeroContent>
        <div style={{ padding: '80px 0 0 0' }}>
          <SocialMedia style={{ paddingTop: '50px', paddingBottom: '20px' }} />
          <Title>Gabriel Mendez</Title>
          <Description>Software Engineer</Description>
          <ButtonWrapper>
            <ButtonScroll
              type='submit'
              value='About Me'
              to='about'
              spy={true}
              smooth={true}
              offset={-60}
              duration={800}
            />
          </ButtonWrapper>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
