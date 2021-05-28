import React from 'react';
import SocialMedia from '../social-media';
import {
  Description,
  HeroBg,
  HeroContainer,
  HeroContent,
  CircleAvatar,
  Title,
  VideoBg,
  ButtonWrapper,
  ButtonScroll,
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
        <div style={{ padding: '60px 0 0 0' }}>
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
              offset={50}
              duration={800}
            />
          </ButtonWrapper>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
