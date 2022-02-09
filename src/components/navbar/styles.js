import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
  z-index: 1600;
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

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1300px;
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItemWrapper = styled.li`
  cursor: pointer;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1.15rem;
  &:hover {
    color: #009ddc;
    transition: 0.2s ease-in-out;
  }
`;

export const NavItem = styled(Link)`
  padding: 34px 0 22px;
  margin-left: 8px;
  margin-right: 8px;

  &.active {
    margin: 0 -10px;
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 19px;
    border-bottom: 3px solid #009ddc;
  }
`;
