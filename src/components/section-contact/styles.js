import styled, { keyframes } from 'styled-components';

const fly_1 = keyframes`
  0% {
   transform: translateY(0.1em);
  }
 
  100% {
   transform: translateY(-0.1em);
  }
 `;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 720px;
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
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  border-radius: 0.625rem;
  padding: 0 2.25rem 2.25rem;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export const FullnameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SubmitButton = styled.button`
  font-size: 18px;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  align-self: flex-start;
  border: none;
  border-radius: 8px;
  transition: all 0.2s;
  box-shadow: 0 0 40px 40px #0082c3 inset, 0 0 0 0 #0082c3;
  color: white;

  span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    .svg-wrapper {
      animation: ${fly_1} 0.6s ease-in-out infinite alternate;
    }

    span {
      transform: translateX(5em);
    }

    svg {
      transform: translateX(1.2em) rotate(45deg) scale(1.1);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;
