import { Marquee } from '@/components/shadcn-space/animations/marquee';
import { partnersData } from '@/data/02-partnersData';

export default function PartnersMarquee() {
  const partners = partnersData;

  return (
    <>
      <Marquee className='[--duration:20s] p-0' pauseOnHover>
        {partners.map((partner, index) => (
          <div key={index} className='flex items-center'>
            <img
              src={partner.logoUrl}
              alt={partner.name}
              className='w-full max-w-12 sm:max-w-20 md:max-w-36 max-h-10 sm:max-h-25 sm:mr-6'
            />
          </div>
        ))}
      </Marquee>
    </>
  );
}
