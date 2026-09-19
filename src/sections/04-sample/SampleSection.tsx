import SectionWrapper from '@/components/layouts/SectionWrapper';
import VideoSample from './components/VideoSample';
import AudioSample from './components/AudioSample';
import { samplesData } from '@/data/04-sampleData';
import BlackGradient from '@/components/shared/BlackGradient';

const SampleSection = () => {
  const title = samplesData.sectionTitle;
  return (
    <div className='relative py-10 flex flex-col gap-8 justify-center items-center'>
      <h2 className='text-4xl font-copperplate text-center'>{title}</h2>
      <SectionWrapper sectionId='audio' className='w-full'>
        <AudioSample />
      </SectionWrapper>

      <SectionWrapper sectionId='video' className='w-full'>
        <VideoSample />
      </SectionWrapper>
      <BlackGradient gradientDirection='toTop' />
    </div>
  );
};

export default SampleSection;
