import styled from 'styled-components';

export const SkillsContainer = styled.div`
  height: 760px;
  padding: 12px 74px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #010606;

  @media screen and (max-width: 1150px) {
    height: 1000px;
    padding: 0 68px;
  }

  @media screen and (max-width: 1068px) {
    height: 920px;
    padding: 0 64px;
  }

  @media screen and (max-width: 768px) {
    height: 900px;
    padding: 0 54px;
  }

  @media screen and (max-width: 568px) {
    height: 1120px;
  }

  @media screen and (max-width: 480px) {
    height: 1220px;
    padding: 0 44px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.4rem;
  margin-bottom: 24px;
  align-self: ${(props) => (props.alignCenter ? 'center' : 'flex-start')};
  position: relative;
  width: fit-content;

  ::before {
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    background-color: #353535;
    height: 4px;
    bottom: 0;
  }

  ::after {
    display: block;
    position: absolute;
    content: '';
    width: ${(props) => (props.alignCenter ? '55%' : '40%')};
    background-color: #009ddc;
    height: 4px;
    bottom: 0;
    left: ${(props) => props.alignCenter && 0};
    right: ${(props) => props.alignCenter && 0};
    margin: ${(props) => props.alignCenter && '0 auto'};
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

export const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 56px;
  padding-bottom: 60px;

  svg {
    align-self: center;
  }

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding: 0;
  }
`;

export const SkillsCard = styled.div`
  background: #fff;
  display: flex;
  height: 100%;
  min-height: 176px;
  max-height: 240px;
  min-width: 220px;
  row-gap: 12px;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  border-radius: 10px;
  padding: 16px 20px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  .skill-cover {
    display: contents;
    transform: all translate(0);
  }

  .skill-desc {
    display: none;
    transform: all scale(1);
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;

    .skill-desc {
      display: block;
    }

    .skill-cover {
      display: none !important;
    }
  }

  @media screen and (max-width: 1150px) {
    width: 130px;
  }
`;

export const IconCard = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const TitleCard = styled.h2`
  margin: 0;
  color: #010606;
  font-size: 1.6rem;
  align-self: center;
  position: sticky;
  width: fit-content;
  text-transform: uppercase;

  ::before {
    background-color: #009ddc;
    position: absolute;
    content: '';
    width: 55%;
    height: 4px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
  }

  @media screen and (max-width: 1068px) {
    font-size: 1.4rem;
  }
`;

export const TechContainer = styled.div`
  border-radius: 12px;
  background: #fff;
  padding: 30px 0;
  width: 100%;

  // Slick images centered and same dimensions
  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    height: inherit !important;

    div {
      height: 100%;
      display: flex;
    }

    img {
      width: 180px !important;
      margin: auto !important;
      opacity: 0.8;
      transition: opacity 150ms linear 100ms;
      transform: 150ms ease-in-out 100ms;

      &:hover {
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        opacity: 1;
      }
    }
  }
`;
