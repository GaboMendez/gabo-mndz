import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { ScrollWrapper } from './styles';

const Scroll = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 350) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <ScrollWrapper onClick={scrollToTop}>
      <IoIosArrowDropupCircle style={{ display: show ? 'inline' : 'none' }} />
    </ScrollWrapper>
  );
};

export default Scroll;
