import { NavItem, NavItemWrapper } from './styles';

const NavbarItem = ({ path, title }) => {
  return (
    <NavItemWrapper>
      <NavItem
        activeClass='active'
        to={path}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {!!title && title}
      </NavItem>
    </NavItemWrapper>
  );
};

export default NavbarItem;
