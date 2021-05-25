import styled from 'styled-components';

export const ScrollWrapper = styled.div`
  position: fixed;
  right: 10px;
  bottom: 20px;
  font-size: 3.5rem;
  z-index: 1;
  cursor: pointer;
  //color: #f2994a; // good orange
  color: #b38867;
  transition: transform 250ms;
  &:hover {
    //color: #0ED2F7; // good orange
    color: #ddbc95;
    transition: 0.2s ease-in-out;
    transform: translateY(-5px);
  }
`;
