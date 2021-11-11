import React from 'react';
import Icon1 from '../../public/command.png';
import {
  ContentWrapper,
  IconCard,
  SkillsCard,
  SkillsContainer,
  Title,
  TitleCard,
} from './styles';
import TechSection from './TechSection';

const SkillsSection = () => {
  return (
    <>
      <SkillsContainer id='skills'>
        <Title>I'VE BEEN PRODUCTIVE WITH</Title>
        <ContentWrapper>
          <SkillsCard className='shadow-bg'>
            <IconCard src={Icon1} />
            <TitleCard>ORACLE</TitleCard>
          </SkillsCard>
          <SkillsCard className='shadow-bg'>
            <IconCard src={Icon1} />
            <TitleCard>JavaScript</TitleCard>
          </SkillsCard>
          <SkillsCard className='shadow-bg'>
            <IconCard src={Icon1} />
            <TitleCard>React</TitleCard>
          </SkillsCard>
          <SkillsCard className='shadow-bg'>
            <IconCard src={Icon1} />
            <TitleCard>React</TitleCard>
          </SkillsCard>
        </ContentWrapper>

        <TechSection />
      </SkillsContainer>
    </>
  );
};

export default SkillsSection;
