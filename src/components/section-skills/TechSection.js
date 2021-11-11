import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import Slider from 'react-slick';
import { TechContainer, Title } from './styles';

const technologies = [
  {
    id: 1,
    name: 'JAVASCRIPT',
    img: require('../../public/technologies/js.png'),
    link: 'https://www.programiz.com/javascript',
  },
  {
    id: 2,
    name: 'REACT',
    img: require('../../public/technologies/react.png'),
    link: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: 3,
    name: 'TYPESCRIPT',
    img: require('../../public/technologies/ts.png'),
    link: 'https://www.typescriptlang.org/docs/',
  },
  {
    id: 4,
    name: 'XAMARIN',
    img: require('../../public/technologies/xamarin.png'),
    link: 'https://docs.microsoft.com/en-us/xamarin/',
  },
  {
    id: 5,
    name: 'JENKINS',
    img: require('../../public/technologies/jenkins.png'),
    link: 'https://www.jenkins.io/doc/',
  },
  {
    id: 6,
    name: 'OPENSHIFT',
    img: require('../../public/technologies/openshift.png'),
    link: 'https://docs.openshift.com/container-platform/4.7/welcome/index.html',
  },
  {
    id: 7,
    name: 'SPRING',
    img: require('../../public/technologies/spring.png'),
    link: 'https://spring.io/projects',
  },
  {
    id: 8,
    name: 'JAVA',
    img: require('../../public/technologies/java.png'),
    link: 'https://www.tutorialspoint.com/java/index.htm',
  },
  {
    id: 9,
    name: 'ORACLE',
    img: require('../../public/technologies/oracle.png'),
    link: 'https://www.techonthenet.com/oracle/index.php',
  },
];

const TechSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Title style={{ alignSelf: 'flex-start' }}>TECHNOLOGIES I WORK ON</Title>
      <TechContainer className='shadow-bg'>
        <Slider
          swipeToSlide={true}
          cssEase={'linear'}
          autoplaySpeed={3000}
          autoplay
          {...settings}
        >
          {technologies.map((item, idx) => {
            return (
              <Tooltip
                key={idx}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 200 }}
                title={item.name}
                PopperProps={{
                  popperOptions: {
                    modifiers: {
                      offset: {
                        enabled: true,
                        offset: '0px, -16px',
                      },
                    },
                  },
                }}
              >
                <img
                  key={idx}
                  src={item.img}
                  onClick={() => window.open(item.link, '_blank')}
                />
              </Tooltip>
            );
          })}
        </Slider>
      </TechContainer>
    </>
  );
};

export default TechSection;
