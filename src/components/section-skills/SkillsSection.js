import React from 'react';
import {
  FaCodeBranch,
  FaDatabase,
  FaDesktop,
  FaMobileAlt,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import {
  ContentWrapper,
  SkillsCard,
  SkillsContainer,
  Title,
  TitleCard,
} from './styles';
import TechSection from './TechSection';

const skills = [
  {
    title: 'Front End Development',
    icon: <FaDesktop size={50} color={'#010606'} />,
    description:
      'React, Next, Angular, TypeScript, JavaScript, Styled Components / CSS / SASS, Bootstrap, Material UI',
  },
  {
    title: 'Mobile Development',
    icon: <FaMobileAlt size={50} color={'#010606'} />,
    description: 'React Native (JS, TS), Kotlin (Android Native), Swift (iOS Native), Android SDK, iOS SDK',
  },
  {
    title: 'Back End Development',
    icon: <FaDatabase size={50} color={'#010606'} />,
    description:
      'Oracle / SQL / PostgreSQL, Node, Spring Boot, Java, C#, Rest API, Design Patterns, Microservices',
  },
  {
    title: 'DevOps',
    icon: <FaCodeBranch size={70} color={'#010606'} />,
    description: 'Git / Github / Gitlab, Jenkins, Azure DevOps, CI / CD, Openshift, Docker',
  },
];

const SkillsSection = () => {
  return (
    <>
      <SkillsContainer id='skills'>
        <Title alignCenter>I'VE BEEN PRODUCTIVE WITH</Title>
        <ContentWrapper>
          {skills.map((item, idx) => {
            return (
              <Tilt key={idx} tiltReverse={true} transitionSpeed={10000}>
                <SkillsCard key={idx}>
                  <div className='skill-cover'>
                    {item.icon}
                    <TitleCard>{item.title}</TitleCard>
                  </div>
                  <div className='skill-desc wow zoomIn animated'>
                    <h4>{item.description}</h4>
                  </div>
                </SkillsCard>
              </Tilt>
            );
          })}
        </ContentWrapper>

        <TechSection />
      </SkillsContainer>
    </>
  );
};

export default SkillsSection;
