import {
  FooterContainer,
  FooterWrapper,
  WebsiteRights,
} from './styles';
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
