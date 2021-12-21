import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 860px;
  width: 100%;
  padding: 60px 40px 0;
  justify-content: flex-start;
  align-items: center;
  background: rgba(68, 68, 68, 0.1);
`;

export const Title = styled.h1`
  color: #000;
  font-size: 2.4rem;
  margin-bottom: 24px;
  align-self: flex-start;
  position: relative;
  width: fit-content;

  ::before {
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    background-color: #fff;
    height: 4px;
    bottom: 0;
  }

  ::after {
    display: block;
    position: absolute;
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

export const CardWrapper = styled.div`
  border-radius: 0.625rem;
  padding: 0 2.25rem 2.25rem;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;
