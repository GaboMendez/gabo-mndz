import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 860px;
  width: 100%;
  padding: 0 40px;
  justify-content: center;
  align-items: center;
  background: rgba(68, 68, 68, 0.1);
`;

export const Title = styled.h1`
  color: #000;
  font-size: 2.4rem;
  margin-bottom: 24px;
  align-self: center;
  position: relative;
  width: fit-content;

  ::before {
    display: block;
    position: absolute;
    content: unset;
    width: 100%;
    height: 4px;
    bottom: 0;
  }

  ::after {
    display: block;
    content: '';
    width: 60%;
    background-color: #009ddc;
    height: 4px;
    bottom: 0;
    margin: 0 auto;
    margin-top: -4px;
  }

  @media screen and (max-width: 1068px) {
    font-size: 2.1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.9rem;
  }

  @media screen and (max-width: 568px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.9rem;
  }
`;
