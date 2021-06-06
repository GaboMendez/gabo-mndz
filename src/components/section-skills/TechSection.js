import React from 'react';
import { TechContainer } from './styles';

const technologies = [{ id: 1, name: '' }];

const TechSection = () => {
  var settings = {};

  return (
    <>
      <h3 style={{ color: 'white' }}> Am Technologies </h3>
      <TechContainer>
        <div {...settings}>
          <div>
            <img src='http://placekittOen.com/g/400/200' />
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
        </div>
      </TechContainer>
    </>
  );
};

export default TechSection;
