import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
`;

export const NavLogo = styled.div`
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  margin-left: 24px;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #009ddc;
    transition: 0.2s ease-in-out;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  &:hover {
    color: #009ddc;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItemWrapper = styled.li`
  height: 80px;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #009ddc;
    transition: 0.2s ease-in-out;
  }
`;

export const NavItem = styled(Link)`
  &.active {
    border-bottom: 3px solid #009ddc;
  }
`;
