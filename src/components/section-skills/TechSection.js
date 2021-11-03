import React from 'react';
import Slider from 'react-slick';
import { TechContainer } from './styles';

const technologies = [
  { id: 1, name: 'JAVASCRIPT', img: require('../../public/js.png') },
  { id: 2, name: 'REACT', img: require('../../public/js.png') },
  { id: 3, name: 'TYPESCRIPT', img: require('../../public/js.png') },
  { id: 4, name: 'ANT DESIGN', img: require('../../public/js.png') },
  { id: 5, name: 'XAMARIN', img: require('../../public/js.png') },
  { id: 6, name: 'KOTLIN', img: require('../../public/js.png') },
  { id: 7, name: 'ORACLE', img: require('../../public/js.png') },
  { id: 8, name: 'JAVA', img: require('../../public/js.png') },
];

const TechSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    className: 'center',
    centerPadding: '60px',
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
      <h1 style={{ color: 'white', alignSelf: 'center' }}>TECHNOLOGIES</h1>
      <TechContainer className='shadow-bg'>
        <Slider
          swipeToSlide={true}
          cssEase={'linear'}
          autoplaySpeed={3000}
          autoplay
          focusOnSelect
          {...settings}
        >
          {technologies.map((item) => {
            return (
              <div>
                <img src={item.img} />
              </div>
            );
          })}
        </Slider>
      </TechContainer>
    </>
  );
};

export default TechSection;
