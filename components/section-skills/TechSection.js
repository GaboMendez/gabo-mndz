import React from 'react';
import Slider from 'react-slick';
import { TechContainer } from './styles';

export const technologies = [{ id: 1, name: '' }];

const TechSection = () => {
  var settings = {
    dots: true,
  };

  return (
    <>
      <h3 style={{ color: 'white' }}> Am Technologies </h3>
      <TechContainer>
        <Slider {...settings}>
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
