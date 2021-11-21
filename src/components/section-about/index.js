import React from 'react';
import { aboutObj } from '../section-info/data';
import {
  Heading,
  SubTitle,
  TextWrapper,
  TopLine,
} from '../section-info/styles';
import JobSection from './JobSection';
import { AboutWrapper, ColumnContent } from './styles';

const AboutSection = () => {
  const { topLine, lightText, headLine, darkText, description } = {
    ...aboutObj,
  };

  return (
    <>
      <AboutWrapper id='about'>
        <ColumnContent>
          <TextWrapper>
            <TopLine> {topLine} </TopLine>
            <Heading lightText={lightText}> {headLine} </Heading>
            <SubTitle darkText={darkText}> {description} </SubTitle>
          </TextWrapper>
        </ColumnContent>

        <ColumnContent>
          <JobSection />
        </ColumnContent>
      </AboutWrapper>
    </>
  );
};

export default AboutSection;
