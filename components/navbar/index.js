import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import NavbarItem from './NavbarItem';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavbarMenu,
  NavLogo,
} from './styles';

export const items = [
  { id: 1, path: 'home', title: 'Home' },
  { id: 2, path: 'about', title: 'About' },
  { id: 3, path: 'skills', title: 'Skills' },
  { id: 4, path: 'contact', title: 'Contact' },
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
