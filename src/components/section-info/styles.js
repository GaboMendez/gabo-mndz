import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column01 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column02 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 480px;
  padding-top: 0;

  @media screen and (min-width: 780px) {
    margin-bottom: -50px;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: #fff;
  margin-bottom: 0px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 0px;
    margin-top: 40px;
  }
`;

export const SubTitle = styled.p`
  margin-bottom: 24px;
  font-size: 19px;
  line-height: 28px;
  margin-right: 6px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 70%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
