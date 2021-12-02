import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  IconLink,
  SocialContainer,
  SocialIcons,
  SocialWrapper,
} from './styles';

const items = [
  {
    id: 1,
    name: 'GitHub',
    icon: <FaGithub />,
    link: '//github.com/GaboMendez',
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    link: '//linkedin.com/in/gabrielmndz',
  },
  {
    id: 3,
    name: 'Facebook',
    icon: <FaFacebook />,
    link: '//facebook.com/GaboMndzz',
  },
  {
    id: 4,
    name: 'Twitter',
    icon: <FaTwitter />,
    link: '//twitter.com/Gabo_Mendz',
  },
];

const SocialMedia = ({ style }) => {
  return (
    <>
      <SocialContainer style={style}>
        <SocialWrapper>
          <SocialIcons>
            {items.map((item) => (
              <IconLink
                key={item.id}
                href={item.link}
                title={item.name}
                target='_blank'
              >
                {item.icon}
              </IconLink>
            ))}
          </SocialIcons>
        </SocialWrapper>
      </SocialContainer>
    </>
  );
};

export default SocialMedia;
