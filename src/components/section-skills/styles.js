import styled from 'styled-components';

export const SkillsContainer = styled.div`
  height: 800px;
  padding: 0px 74px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #010606;

  @media screen and (max-width: 1068px) {
    height: 950px;
    padding: 0px 64px;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
    padding: 0px 54px;
  }

  @media screen and (max-width: 480px) {
    height: 1500px;
    padding: 0px 44px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 24px;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 56px;

  @media screen and (max-width: 1068px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SkillsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 240px;
  padding: 0px 30px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const IconCard = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const TitleCard = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const TechContainer = styled.div`
  border-radius: 16px;
  background: #fff;
  padding: 30px 0px;
  width: 100%;

  .slick-slide img {
    width: 160px;
    margin: auto;
  }
`;
