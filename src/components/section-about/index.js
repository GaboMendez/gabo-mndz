import React from 'react';
import { aboutObj } from '../section-info/data';
import {
  Column01,
  Heading,
  SubTitle,
  TextWrapper,
  TopLine,
} from '../section-info/styles';
import { AboutWrapper, ColumnContent } from './styles';

const AboutSection = () => {
  const { topLine, lightText, headLine, darkText, description } = {
    ...aboutObj,
  };

  return (
    <>
      <AboutWrapper id='about'>
        <ColumnContent>
          <Column01>
            <TextWrapper>
              <TopLine> {topLine} </TopLine>
              <Heading lightText={lightText}> {headLine} </Heading>
              <SubTitle darkText={darkText}> {description} </SubTitle>
            </TextWrapper>
          </Column01>
        </ColumnContent>

        <ColumnContent>
          <h2>Hey!!</h2>
        </ColumnContent>
      </AboutWrapper>
    </>
  );
};

export default AboutSection;
