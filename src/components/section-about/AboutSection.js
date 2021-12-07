import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { Chrono } from 'react-chrono';
import { aboutObj } from '../section-info/data';
import { Heading, SubTitle, TextWrapper } from '../section-info/styles';
import JobSection from './JobSection';
import { AboutWrapper, ColumnContent, Title } from './styles';

const items = [
  {
    title: 'October 2020',
    cardTitle: 'Software Engineering',
    cardSubtitle: `Technological Institute of Santo Domingo`,
    cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people`,
  },
  {
    title: 'July 2016',
    cardTitle: 'Technical High School',
    cardSubtitle: `Salesian Technical Institute ITESA`,
    cardDetailedText: `After Japan’s occupation of French Indo-China in July 1941, US President Franklin D Roosevelt`,
  },
  {
    title: 'Certificates',
    cardTitle: 'Pearl Harbor',
    cardDetailedText: `After Japan’s occupation of French Indo-China in July 1941, US President Franklin D Roosevelt, `,
  },
];

const AboutSection = () => {
  const isDesktop = useMediaQuery('(min-width:1224px)');
  const isTablet = useMediaQuery('(min-width:780px)');

  const { topLine, lightText, headLine, darkText, description } = {
    ...aboutObj,
  };

  return (
    <>
      <AboutWrapper id='about'>
        <ColumnContent>
          <Title alignCenter={isDesktop}>EDUCATION</Title>
          <Chrono
            items={items}
            hideControls={!isDesktop}
            mode={isDesktop ? 'VERTICAL_ALTERNATING' : 'VERTICAL'}
            useReadMore={false}
            scrollable={false}
            cardHeight={isTablet ? 200 : 'auto'}
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
