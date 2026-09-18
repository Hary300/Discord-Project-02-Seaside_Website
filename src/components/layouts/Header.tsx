import { headerData } from '@/data/headerData';
import MobileNav from '../shared/MobileNav';

const Header = () => {
  const logo = headerData.logo;
  const navLinks = headerData.navigation;
  return (
    <header className='flex justify-between items-center max-w-360 mx-auto px-4 sm:px-10 lg:px-15 xl:px-30 h-20 sm:h-30 md:h-37.5 bg-linear-to-r from-light-orange to-dark-orange'>
      <div className='flex flex-col items-center gap-1'>
        <span className='text-xl sm:text-2xl lg:text-3xl font-copperplate font-light'>
          <span className='text-[25px] sm:text-[30px] lg:text-[36px]'>
            {logo.name[0]}
          </span>
          {logo.name.slice(1)}
        </span>
        <span className='text-sm sm:text-lg lg:text-xl tracking-widest'>
          {logo.subtitle}
        </span>
      </div>

      <nav className='flex items-center'>
        <ul className='hidden md:flex gap-8 text-xl lg:text-2xl'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className='text-white border-transparent border-b hover:border-white'
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
