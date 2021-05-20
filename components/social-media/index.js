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
            <IconLink href='//link' target='_blank' aria-label='GitHub'>
              <FaGithub />
            </IconLink>
            <IconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </IconLink>
            <IconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </IconLink>
            <IconLink href='/' target='_blank' aria-label='Linkedin'>
              <FaLinkedin />
            </IconLink>
          </SocialIcons>
        </SocialWrapper>
      </SocialContainer>
    </>
  );
};

export default SocialMedia;
