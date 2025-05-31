import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { Chrono } from 'react-chrono';
import { FaEye, FaRegHdd } from 'react-icons/fa';
import { aboutObj } from '../section-info/data';
import { Heading, SubTitle, TextWrapper } from '../section-info/styles';
import JobSection from './JobSection';
import {
  AboutWrapper,
  ColumnContent,
  DiplomaWrapper,
  DownloadWrapper,
  EducationWrapper,
  Title,
} from './styles';
const educationItems = [
  {
    id: 0,
    title: '2020 Oct',
    study: 'Software Engineering',
    location: `Technological Institute \nof Santo Domingo INTEC`,
  },
  {
    id: 1,
    title: 'Jul 2016',
    study: 'Technical High School',
    location: `Salesian Technical Institute ITESA`,
  },
  {
    id: 2,
    title: 'Course',
    certifications: [
      {
        title: 'Diseño de interfaz de usuario (UI)',
        url: 'https://drive.google.com/file/d/1iwgJkJfcSiOnCFs9NqqXiT-t34iAhRyf/view',
      },
      {
        title: 'Web development with HTML/CSS/JS',
        url: 'https://drive.google.com/file/d/12GkuxCQF8yK-dwi9G1SVsRpRIj1maNRE/view',
      },
      {
        title: 'Web development with C#',
        url: 'https://drive.google.com/file/d/1bAbKJEsGGmm4uGf4TMl9UAfebO7CTjL8/view',
      },
      {
        title: 'English Immersion Program ',
        url: 'https://drive.google.com/file/d/1ACdZuxp3oKc8HBjvbMysfYzPryGpzWDj/view',
      },
    ],
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
            items={educationItems}
            hideControls={!isDesktop}
            mode={isDesktop ? 'VERTICAL_ALTERNATING' : 'VERTICAL'}
            useReadMore={false}
            scrollable={false}
            cardHeight={isTablet ? 200 : '100px'}
            theme={{
              primary: '#000000',
              secondary: '#b6b6b6',
              cardBgColor: '#efefef',
              cardForeColor: '#1e1e1e',
              titleColor: '#000',
            }}
          >
            {educationItems.map((item, idx) => {
              return (
                <React.Fragment key={idx}>
                  <EducationWrapper>
                    {item.study && <h1>{item.study}</h1>}
                    {item.location && <h2>{item.location}</h2>}
                    {item.certifications?.map((value, idx) => (
                      <DiplomaWrapper key={idx}>
                        <a href={value.url} target='_blank'>
                          {value.title}
                        </a>
                      </DiplomaWrapper>
                    ))}
                  </EducationWrapper>
                </React.Fragment>
              );
            })}
            <div className='chrono-icons'>
              <img src='education/bachelor.png' alt='image1' />
              <img src='education/technical.png' alt='image2' />
              <img src='education/certification.png' alt='image3' />
            </div>
          </Chrono>
        </ColumnContent>

        <ColumnContent>
          <DownloadWrapper
            href='/files/CV_Gabriel_Mendez.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='face-primary'>
              <FaEye size={25} /> Open CV
            </div>

            <div className='face-secondary'>
              <FaRegHdd size={26} /> Size: 88 kb
            </div>
          </DownloadWrapper>
          <TextWrapper>
            <Title> {topLine} </Title>
            <Heading lightText={lightText}> {headLine} </Heading>
          </TextWrapper>
          <SubTitle darkText={darkText}>{description}</SubTitle>
          <JobSection />
        </ColumnContent>
      </AboutWrapper>
    </>
  );
};

export default AboutSection;
