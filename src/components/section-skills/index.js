import React from 'react';
import {
  FaDesktop,
  FaMobileAlt,
  FaDatabase,
  FaCodeBranch,
} from 'react-icons/fa';
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
    icon: <FaDesktop size={80} color={'#010606'} />,
    description:
      'React, Next, HTML5, CSS / SASS, JavaScript / ES6, TypeScript, SPA',
  },
  {
    title: 'Mobile Development',
    icon: <FaMobileAlt size={80} color={'#010606'} />,
    description: 'Xamarin (MVVM, Prism), Kotlin (MVVM, MVP), Android SDK',
  },
  {
    title: 'Back End Development',
    icon: <FaDatabase size={80} color={'#010606'} />,
    description:
      'Oracle / SQL Server, Java, Spring Boot-Cloud, C#, Rest API, OOP / Design Patterns',
  },
  {
    title: 'DevOps',
    icon: <FaCodeBranch size={90} color={'#010606'} />,
    description: 'Git / Github / Gitlab, Jenkins, CI / CD, Openshift, Docker',
  },
];

const SkillsSection = () => {
  return (
    <>
      <SkillsContainer id='skills'>
        <Title>I'VE BEEN PRODUCTIVE WITH</Title>
        <ContentWrapper>
          {skills.map((item, idx) => {
            return (
              <SkillsCard key={idx} className='skill-wrapper'>
                <div className='skill-cover'>
                  {item.icon}
                  <TitleCard>{item.title}</TitleCard>
                </div>
                <div className='skill-desc'>
                  <h4>{item.description}</h4>
                </div>
              </SkillsCard>
            );
          })}
        </ContentWrapper>

        <TechSection />
      </SkillsContainer>
    </>
  );
};

export default SkillsSection;
