import {
  FooterContainer,
  FooterWrapper,
  LinkItems,
  LinksContainer,
  LinksWrapper,
  LinkTitle,
  WebsiteRights,
} from './styles';
import Link from 'next/link';
import SocialMedia from '../social-media';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia />
        <WebsiteRights>
          COPYRIGHT © {new Date().getFullYear()} ALL RIGHTS RESERVED.
        </WebsiteRights>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
