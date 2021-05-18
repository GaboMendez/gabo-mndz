import React from 'react';
import SidebarItem from './SidebarItem';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarMenu,
  SidebarWrapper,
} from './styles';

export const items = [
  { id: 1, path: 'home', title: 'Home' },
  { id: 2, path: 'about', title: 'About' },
  { id: 3, path: 'discover', title: 'Discover' },
  { id: 4, path: 'skills', title: 'Skills' },
];

const Sidebar = ({ isOpen, handleToggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={handleToggle}>
        <Icon onClick={handleToggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarItem
                key={item.id}
                path={item.path}
                title={item.title}
                isOpen={isOpen}
                handleToggle={handleToggle}
              />
            ))}
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
