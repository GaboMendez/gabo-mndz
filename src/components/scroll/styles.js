import styled from 'styled-components';

export const ScrollWrapper = styled.div`
  position: fixed;
  right: 2px;
  bottom: 2px;
  font-size: 3.5rem;
  z-index: 1;
  cursor: pointer;
  //color: #f2994a; // good orange
  color: #b38867;
  transition: transform 250ms;

  @media (hover: hover) {
    &:hover {
      //color: #0ED2F7; // good orange
      color: #ddbc95;
      transition: 0.2s ease-in-out;
      transform: translateY(-4px);
    }
  }

  @media screen and (max-width: 1068px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
