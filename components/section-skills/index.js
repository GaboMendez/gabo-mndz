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

const SkillsSection = () => {
  return (
    <>
      <SkillsContainer id='skills'>
        <Title>Skills</Title>
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
      </SkillsContainer>
    </>
  );
};

export default SkillsSection;
