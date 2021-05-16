import { useState } from 'react';
import styled from 'styled-components';
import InfoSection from '../../components/info-section';
import { discoverObj } from '../../components/info-section/data';

const Title = styled.h2`
  color: red;
`;

const About = () => {
  const [name, setName] = useState('Gabriel');

  const handleClick = () => {
    setName('Josue...');
  };

  return <InfoSection {...discoverObj} />;
};

export default About;
