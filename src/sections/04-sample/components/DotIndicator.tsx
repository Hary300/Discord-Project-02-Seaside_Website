import type { CarouselApi } from '@/components/ui/carousel';
import { cn } from 'cn';

interface DotIndicatorProps {
  count: number;
  current: number;
  api: CarouselApi;
}
const DotIndicator = ({ api, count, current }: DotIndicatorProps) => {
  return (
    <div className='flex gap-2 justify-center'>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'size-4 rounded-full border border-red-500 cursor-pointer',
            index === current && 'bg-black border-black'
          )}
          onClick={() => api?.scrollTo(index)}
        />
      ))}
    </div>
  );
};

export default DotIndicator;
