import styled from 'styled-components';
import { Button } from 'react-scroll';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 100%;
  min-height: 40%;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(24px);

  padding: 1rem 2rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`;

export const CircleAvatar = styled.div`
  position: relative;
  width: 15vw;
  background-position: center center;
  background-size: cover;
  background-color: #f2f1f1;
  border-radius: 100%;
  border: 0.15rem solid #000;
  box-shadow: 0 0 0.5rem 0.3rem rgba(0, 0, 0, 0.2);
  background-image: url('https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg');

  transition: all 0.3s;
  bottom: 160px;
  z-index: 50;

  &:hover {
    transform: scale(1.04);
  }

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
    /* initial ratio of 1:1*/
  }

  @media screen and (max-width: 1350px) {
    width: 20vw;
  }

  @media screen and (max-width: 1250px) {
    width: 21vw;
  }

  @media screen and (max-width: 1100px) {
    width: 25vw;
  }

  @media screen and (max-width: 850px) {
    width: 30vw;
  }

  @media screen and (max-width: 700px) {
    width: 40vw;
  }
`;

export const Title = styled.h1`
  color: #eeeeee;
  font-weight: 400;
  font-size: 46px;
  text-align: center;
  margin: -14px 0 0 0;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  color: #eeeeee;
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonScroll = styled(Button)`
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 550;
  color: hsla(210, 50%, 85%, 1);
  border: none;
  background: none;
  border-radius: 4px;
  border-color: #0082c3;
  color: #fff;
  box-shadow: 0 0 40px 40px #0082c3 inset, 0 0 0 0 #0082c3;
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 0 #0082c3 inset, 0 0 10px 4px #0082c3;
    transform: translate3d(0, -2px, 0);
  }
`;
