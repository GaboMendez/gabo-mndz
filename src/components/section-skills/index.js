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
        <div>
          <Title>SKILLS</Title>
          <ContentWrapper>
            <SkillsCard>
              <IconCard src={Icon1} />
              <TitleCard>ORACLE</TitleCard>
            </SkillsCard>
            <SkillsCard>
              <IconCard src={Icon1} />
              <TitleCard>JavaScript</TitleCard>
            </SkillsCard>
            <SkillsCard>
              <IconCard src={Icon1} />
              <TitleCard>React</TitleCard>
            </SkillsCard>
          </ContentWrapper>
        </div>
        <TechSection></TechSection>
      </SkillsContainer>
    </>
  );
};

export default SkillsSection;
