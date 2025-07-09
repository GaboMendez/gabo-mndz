import styled from 'styled-components';

export const ScrollWrapper = styled.div`
  position: fixed;
  right: 2px;
  bottom: 2px;
  font-size: 3.5rem;
  z-index: 1;
  cursor: pointer;
  color: #009ddc;
  transition: transform 250ms;

  @media (hover: hover) {
    &:hover {
      color: #0286b9;
      transition: 0.2s ease-in-out;
      transform: translateY(-4px);
    }
  }

  @media screen and (max-width: 1068px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
