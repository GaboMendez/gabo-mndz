import React from 'react';
import { aboutObj } from '../section-info/data';
import {
  Heading,
  SubTitle,
  TextWrapper,
  TopLine,
} from '../section-info/styles';
import JobSection from './JobSection';
import { AboutWrapper, ColumnContent, Title } from './styles';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: '25 July 1940',
    cardTitle: 'The Battle of Britain',
    cardSubtitle: `RAF Spitfire pilots scramble`,
    cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
      The following month, RAF Fighter Command airfields and aircraft factories came under attack.`,
  },
  {
    title: '7 December 1941',
    cardTitle: 'Pearl Harbor',
    cardSubtitle: `The destroyer USS Shaw explodes`,
    cardDetailedText: `After Japan’s occupation of French Indo-China in July 1941, US President Franklin D Roosevelt, followed by Britain and the Netherlands, ordered the freezing of Japanese assets.`,
  },
  {
    title: '7 December 1941',
    cardTitle: 'Pearl Harbor',
    cardSubtitle: `The destroyer USS Shaw explodes`,
    cardDetailedText: `After Japan’s occupation of French Indo-China in July 1941, US President Franklin D Roosevelt, followed by Britain and the Netherlands, ordered the freezing of Japanese assets.`,
  },
];

const AboutSection = () => {
  const { topLine, lightText, headLine, darkText, description } = {
    ...aboutObj,
  };

  return (
    <>
      <AboutWrapper id='about'>
        <ColumnContent>
          <Title alignCenter>EDUCATION</Title>
          <Chrono
            items={items}
            mode='VERTICAL_ALTERNATING'
            theme={{
              primary: '#000000',
              secondary: '#b6b6b6',
              cardBgColor: '#efefef',
              cardForeColor: '#1e1e1e',
              titleColor: '#000',
            }}
          >
            <div className='chrono-icons'>
              <img src='profile.svg' alt='image1' />
              <img src='profile.svg' alt='image2' />
              <img src='profile.svg' alt='image3' />
            </div>
          </Chrono>
        </ColumnContent>

        <ColumnContent>
          <TextWrapper>
            <Title> {topLine} </Title>
            <Heading lightText={lightText}> {headLine} </Heading>
            <SubTitle darkText={darkText}> {description} </SubTitle>
          </TextWrapper>
          <JobSection />
        </ColumnContent>
      </AboutWrapper>
    </>
  );
};

export default AboutSection;
