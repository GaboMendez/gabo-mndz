import React from 'react';
import Slider from 'react-slick';
import { TechContainer } from './styles';

const technologies = [{ id: 1, name: '' }];

const TechSection = () => {
  return (
    <>
      <h1 style={{ color: 'white', alignSelf: 'center' }}>TECHNOLOGIES</h1>
      <TechContainer className="shadow-bg">
        <Slider
          slidesToShow={3}
          slidesToScroll={1}
          swipeToSlide={true}
          focusOnSelect={true}
          speed={500}
          autoplaySpeed={3000}
          cssEase={'linear'}
          autoplay
          dots
        >
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
          <div>
            <img src='http://placekitten.com/g/400/200' />
          </div>
        </Slider>
      </TechContainer>
    </>
  );
};

export default TechSection;
