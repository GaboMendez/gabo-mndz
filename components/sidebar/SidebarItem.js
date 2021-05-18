//import Link from 'next/link';
import { Link, animateScroll as scroll } from 'react-scroll';

import React from 'react';
import { SidebarItemWrapper } from './styles';

const SidebarItem = ({ path, title, isOpen, handleToggle }) => {
  
  const handleSetActive = () => {
    if (isOpen) {
      handleToggle();
    }
  };

  return (
    <SidebarItemWrapper>
      <Link
        activeClass='active'
        onSetActive={handleSetActive}
        to={path}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {title}
      </Link>
    </SidebarItemWrapper>
  );
};

export default SidebarItem;
