import React from 'react';
import {
  Column01,
  Column02,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  SubTitle,
  TextWrapper,
  TopLine,
} from './styles';

const InfoSection = ({
  id,
  lightBg,
  lightText,
  topLine,
  headLine,
  description,
  imgStart,
  img,
  alt,
  darkText,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column01>
              <TextWrapper>
                <TopLine> {topLine} </TopLine>
                <Heading lightText={lightText}> {headLine} </Heading>
                <SubTitle darkText={darkText}> {description} </SubTitle>
              </TextWrapper>
            </Column01>
            <Column02>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column02>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
