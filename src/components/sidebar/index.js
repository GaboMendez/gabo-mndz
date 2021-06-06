import React from 'react';
import SidebarItem from './SidebarItem';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarMenu,
  SidebarWrapper,
} from './styles';

const items = [
  { id: 1, path: 'home', title: 'Home' },
  { id: 2, path: 'about', title: 'About' },
  { id: 3, path: 'skills', title: 'Skills' },
  { id: 4, path: 'contact', title: 'Contact' },
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
