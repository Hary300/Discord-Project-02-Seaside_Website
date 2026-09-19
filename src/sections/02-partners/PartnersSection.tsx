import SectionWrapper from '@/components/layouts/SectionWrapper';
import PartnersMarquee from '@/components/shadcn-space/marquee/PartnersMarquee';

const PartnersSection = () => {
  return (
    <SectionWrapper
      sectionId='partner'
      className='px-0 sm:px-0 lg:px-0 xl:px-0 py-6'
    >
      <PartnersMarquee />
    </SectionWrapper>
  );
};

export default PartnersSection;
