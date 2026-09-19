import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { samplesData } from '@/data/04-sampleData';
import { useEffect, useState } from 'react';
import DotIndicator from './DotIndicator';

const VideoSample = () => {
  const videos = samplesData.videoSamples;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    const handleCount = () => {
      setCount(api.scrollSnapList().length);
    };
    const handleCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };
    handleCount();
    handleCurrent();

    api.on('select', handleCurrent);
    return () => {
      api.off('select', handleCurrent);
    };
  }, [api]);

  return (
    <Carousel setApi={setApi} className='w-full '>
      <div className='p-10 shadow-subtle flex flex-col gap-8'>
        <CarouselContent>
          {videos.map((video) => {
            return (
              <CarouselItem key={video.id}>
                <iframe
                  width='100%'
                  height='600'
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                ></iframe>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious size='icon-lg' />
        <CarouselNext size='icon-lg' />
        <DotIndicator api={api} count={count} current={current} />
      </div>
    </Carousel>
  );
};

export default VideoSample;
