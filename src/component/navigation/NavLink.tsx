'use client'
import { useAocssContext } from '@/context/AocssContext';
import Link from 'next/link';
import { useRouter,usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const {handleSidebarClose} = useAocssContext()
    const router = useRouter();
  const pathname = usePathname()
  const isActive = pathname === href;
  const handleClick = () => {
    router.push(href); // Navigate to the specified href
    handleSidebarClose();    // Close the sidebar
  };

  return (
    <Link 
    onClick={handleClick} 
    href={href}
    className={isActive ? 'active' : ''}
    >
      {children}
    </Link>
  );
};

export default NavLink;
