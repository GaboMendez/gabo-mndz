import { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: red;
`;

const About = () => {
  const [name, setName] = useState('Gabriel');

  const handleClick = () => {
    setName('Josue...');
  };

  return (
    <div style={{ margin: 25 }}>
      <Title>Hey i'm ABOUT! and this is {name}</Title>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default About;
