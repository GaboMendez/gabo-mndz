import Link from 'next/link';
import React from 'react';
import { SidebarItemWrapper } from './styles';

const SidebarItem = ({ path, title }) => {
  return (
    <SidebarItemWrapper>
      <Link href={path} passHref>
        {title}
      </Link>
    </SidebarItemWrapper>
  );
};

export default SidebarItem;
