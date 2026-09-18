import SectionWrapper from '@/components/layouts/SectionWrapper';
import BlackGradient from '@/components/shared/BlackGradient';
import { heroData } from '@/data/01-heroData';

const HeroSection = () => {
  const heroTitle = heroData.title;
  return (
    <SectionWrapper
      sectionId='home'
      className='relative py-4 sm:py-10 bg-gradient-primary'
    >
      <h1 className='flex flex-col text-[clamp(1.125rem,-0.0536rem+5.8929vw,4.8125rem)] text-right font-copperplate'>
        {heroTitle.line1} <span>{heroTitle.line2}</span>
      </h1>
      <BlackGradient gradientDirection='toTop' />
      <BlackGradient gradientDirection='toBottom' />
    </SectionWrapper>
  );
};

export default HeroSection;
