import SectionWrapper from '@/components/layouts/SectionWrapper';
import PartnersMarquee from '@/components/shadcn-space/marquee/PartnersMarquee';
import BlackGradient from '@/components/shared/BlackGradient';

const PartnersSection = () => {
  return (
    <SectionWrapper
      sectionId='partner'
      className='relative px-0 sm:px-0 lg:px-0 xl:px-0 sm:py-4'
    >
      <PartnersMarquee />
      <BlackGradient gradientDirection='toTop' />
    </SectionWrapper>
  );
};

export default PartnersSection;
