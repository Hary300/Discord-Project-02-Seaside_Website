import { headerData } from '@/data/headerData';
import MobileNav from '../shared/MobileNav';
// import { useEffect, useState } from 'react';
import { cn } from 'cn';

const Header = () => {
  // const [isScroll, setIsScroll] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScroll(window.scrollY > 10);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const logo = headerData.logo;
  const navLinks = headerData.navigation;
  return (
    <header
      className={cn(
        'flex justify-between items-center max-w-360 mx-auto px-4 sm:px-10 lg:px-15 xl:px-30 h-20 sm:h-30 md:h-37.5 z-50 w-full backdrop-blur-2xl bg-gradient-primary'
        // isScroll ? 'backdrop-blur-2xl' : 'bg-gradient-primary'
      )}
    >
      <div className='flex flex-col items-center gap-0.5 sm:gap-1'>
        <span className='text-lg sm:text-2xl lg:text-3xl font-copperplate font-light'>
          <span className='text-[20px] sm:text-[30px] lg:text-[36px]'>
            {logo.name[0]}
          </span>
          {logo.name.slice(1)}
        </span>
        <span className='text-xs sm:text-lg lg:text-xl tracking-widest'>
          {logo.subtitle}
        </span>
      </div>

      <nav className='flex items-center'>
        <ul className='hidden md:flex gap-8 text-xl lg:text-2xl'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={cn(
                ' border-transparent border-b text-white hover:border-white'
                // isScroll
                //   ? 'hover:border-dark-blue'
                //   : 'text-white hover:border-white'
              )}
            >
              <a href={link.href} className=''>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Header;
