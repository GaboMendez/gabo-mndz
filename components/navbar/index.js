import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavbarMenu,
  MobileIcon,
} from './styles';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import NavbarItem from './NavbarItem';

const Navbar = ({ handleToggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Link href='/' passHref>
              <a>gabo-dev</a>
            </Link>
          </NavLogo>
          <MobileIcon onClick={handleToggle}>
            <FaBars />
          </MobileIcon>
          <NavbarMenu>
            <NavbarItem path={'/'} title={'Home'} />
            <NavbarItem path={'/about'} title={'About'} />
            <NavbarItem path={'/discover'} title={'Discover'} />
            <NavbarItem path={'/services'} title={'Services'} />
          </NavbarMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
