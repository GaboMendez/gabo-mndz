import Link from 'next/link';
import React from 'react';
import SidebarItem from './SidebarItem';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarMenu,
  SidebarWrapper,
} from './styles';

const Sidebar = ({ isOpen, handleToggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={handleToggle}>
        <Icon onClick={handleToggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarItem path={'/'} title={'Home'} />
            <SidebarItem path={'/about'} title={'About'} />
            <SidebarItem path={'/discover'} title={'Discover'} />
            <SidebarItem path={'/services'} title={'Services'} />
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
