import { NavItem, NavItemWrapper } from './styles';

const NavbarItem = ({ path, title }) => {
  return (
    <NavItemWrapper>
      <NavItem
        activeClass='active'
        to={path}
        spy={true}
        smooth={true}
        offset={-44}
        duration={800}
      >
        {!!title && title}
      </NavItem>
    </NavItemWrapper>
  );
};

export default NavbarItem;
