import SectionWrapper from '@/components/layouts/SectionWrapper';
import { servicesData } from '@/data/03-servicesData';

const ServiceSection = () => {
  return (
    <SectionWrapper sectionId='consulting'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:w-fit mx-auto'>
        {servicesData.map((item) => (
          <div
            key={item.id}
            className='flex flex-col gap-8 items-center justify-between'
          >
            <div className='flex flex-col gap-3'>
              <p className='text-center text-xl lg:text-2xl font-ubuntu font-bold'>
                {item.title}
              </p>
              <p className='text-center text-sm lg:text-md max-w-50'>
                {item.description}
              </p>
            </div>

            <div className='rounded-full w-full max-w-50 overflow-hidden aspect-square shrink-0 border-2 shadow-[0_0_15px_rgba(0,0,0,0.5)]'>
              <img
                src={item.image}
                alt='image'
                className='size-full object-cover'
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServiceSection;
