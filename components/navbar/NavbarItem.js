import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavItemWrapper } from './styles';

const NavbarItem = ({ path, title }) => {
  const router = useRouter();

  return (
    <NavItemWrapper className={router.pathname == path ? 'active' : ''}>
      <Link href={path} passHref>
        {title}
      </Link>
    </NavItemWrapper>
  );
};

export default NavbarItem;
