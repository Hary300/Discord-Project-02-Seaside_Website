import { cn } from 'cn';
import { type ReactNode } from 'react';

type SectionId =
  | 'home'
  | 'audio'
  | 'video'
  | 'consulting'
  | 'contact'
  | (string & {});

interface SectionWrapperProps {
  sectionId: SectionId;
  children: ReactNode;
  className?: string;
}
const SectionWrapper = ({
  sectionId,
  children,
  className,
}: SectionWrapperProps) => {
  return (
    <section
      id={sectionId}
      className={cn(
        'px-4 sm:px-10 lg:px-15 xl:px-30 py-4 sm:py-10 ',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
