import Link from 'next/link';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';

export default function Header() {
  return (
    <div className='top-0 w-full border-b'>

        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />

        

    </div>
  );
}
