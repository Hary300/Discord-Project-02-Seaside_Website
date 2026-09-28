import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { FiMenu } from 'react-icons/fi';
import { headerData } from '@/data/headerData';
import { cn } from 'cn';

// interface MobileNavProps {
//   isScroll: boolean;
// }

const MobileNav = () => {
  const navLinks = headerData.navigation;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='fit' className='md:hidden'>
          <FiMenu
            className={cn(
              ' stroke-3 size-6 text-white'
              // isScroll ? 'text-dark-blue' : 'text-white'
            )}
          />
        </Button>
      </SheetTrigger>
      <SheetContent onCloseAutoFocus={(event) => event.preventDefault()}>
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
