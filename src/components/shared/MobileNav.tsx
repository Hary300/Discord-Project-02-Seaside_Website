import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { FiMenu } from 'react-icons/fi';
import { headerData } from '@/data/headerData';

const MobileNav = () => {
  const navLinks = headerData.navigation;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='fit' className='md:hidden'>
          <FiMenu className='text-white stroke-3 size-6' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className='flex flex-col gap-4 p-4'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <SheetClose asChild>
                <a href={link.href}>{link.label}</a>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
