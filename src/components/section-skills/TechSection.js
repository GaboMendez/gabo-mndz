import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { TechContainer, Title } from './styles';

const technologies = [
  {
    id: 1,
    name: 'JAVASCRIPT',
    img: '/tech/js.png',
    link: 'https://www.programiz.com/javascript',
  },
  {
    id: 2,
    name: 'TYPESCRIPT',
    img: '/tech/ts.png',
    link: 'https://www.typescriptlang.org/docs/',
  },
  {
    id: 3,
    name: 'REACT',
    img: '/tech/react.png',
    link: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: 4,
    name: 'ANGULAR',
    img: '/tech/angular.png',
    link: 'https://v15.angular.io/docs',
  },
  {
    id: 5,
    name: 'NODE',
    img: '/tech/node_js.png',
    link: 'https://nodejs.org/en/docs/',
  },
  {
    id: 6,
    name: '.NET',
    img: '/tech/dotnet.png',
    link: 'https://learn.microsoft.com/en-us/dotnet/',
  },
  {
    id: 7,
    name: 'AZURE DEVOPS',
    img: '/tech/azure.png',
    link: 'https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops',
  },
  {
    id: 8,
    name: 'JENKINS',
    img: '/tech/jenkins.png',
    link: 'https://www.jenkins.io/doc/',
  },
  {
    id: 9,
    name: 'OPENSHIFT',
    img: '/tech/openshift.png',
    link: 'https://docs.openshift.com/container-platform/4.7/welcome/index.html',
  },
  {
    id: 10,
    name: 'GIT LAB',
    img: '/tech/gitlab.png',
    link: 'https://docs.gitlab.com/',
  },
  {
    id: 10,
    name: 'SPRING',
    img: '/tech/spring.png',
    link: 'https://spring.io/projects',
  },
  {
    id: 11,
    name: 'JAVA',
    img: '/tech/java.png',
    link: 'https://www.tutorialspoint.com/java/index.htm',
  },
  {
    id: 12,
    name: 'ORACLE',
    img: '/tech/oracle.png',
    link: 'https://www.techonthenet.com/oracle/index.php',
  },
  {
    id: 13,
    name: 'SQL',
    img: '/tech/sql.png',
    link: 'https://learn.microsoft.com/en-us/sql/?view=sql-server-ver17',
  },
];

const TechSection = () => {
  const isDesktop = useMediaQuery('(min-width:1224px)');
  const isMobile = useMediaQuery('(max-width:480px)');
  const [clickable, setClickable] = useState(false);

  const onSliderChange = () => {
    setClickable(true);
  };

  const settings = {
    dots: true,
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
      <Title alignCenter>TECHNOLOGIES I'VE WORKED ON</Title>
      <TechContainer className='shadow-bg'>
        <Slider
          swipeToSlide={true}
          cssEase={'linear'}
          afterChange={onSliderChange}
          beforeChange={() => setClickable(false)}
          autoplaySpeed={3000}
          infinite={!isMobile}
          autoplay
          {...settings}
        >
          {technologies.map((item, idx) => {
            return (
              <Tooltip
                key={idx}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 200 }}
                enterTouchDelay={50}
                title={isMobile ? '' : item.name}
                PopperProps={{
                  popperOptions: {
                    modifiers: {
                      offset: {
                        enabled: true,
                        offset: '0, -16px',
                      },
                    },
                  },
                }}
              >
                <img
                  key={idx}
                  src={item.img}
                  onClick={() =>
                    isDesktop && clickable && window.open(item.link, '_blank')
                  }
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
