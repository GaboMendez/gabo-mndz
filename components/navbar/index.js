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

export const items = [
  { id: 1, path: 'home', title: 'Home' },
  { id: 2, path: 'about', title: 'About' },
  { id: 3, path: 'discover', title: 'Discover' },
  { id: 4, path: 'skills', title: 'Skills' },
];

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
            {items.map((item) => (
              <NavbarItem key={item.id} path={item.path} title={item.title} />
            ))}
          </NavbarMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
