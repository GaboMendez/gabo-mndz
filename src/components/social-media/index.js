import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  IconLink,
  SocialContainer,
  SocialIcons,
  SocialWrapper,
} from './styles';

const SocialMedia = ({ style }) => {
  return (
    <>
      <SocialContainer style={style}>
        <SocialWrapper>
          <SocialIcons>
            <IconLink href='//github.com/GaboMendez' target='_blank'>
              <FaGithub />
            </IconLink>
            <IconLink href='//linkedin.com/in/gabrielmndz' target='_blank'>
              <FaLinkedin />
            </IconLink>
            <IconLink href='//facebook.com/GaboMndzz' target='_blank'>
              <FaFacebook />
            </IconLink>
            <IconLink href='//twitter.com/Gabo_Mendz' target='_blank'>
              <FaTwitter />
            </IconLink>
          </SocialIcons>
        </SocialWrapper>
      </SocialContainer>
    </>
  );
};

export default SocialMedia;
