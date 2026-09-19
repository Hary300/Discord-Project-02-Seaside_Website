interface VideoSample {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

interface AudioVideoSamplesData {
  sectionTitle: string;
  trackUrls: string[];
  videoSamples: VideoSample[];
}

export const samplesData: AudioVideoSamplesData = {
  sectionTitle: 'SEASIDE AUDIO + VIDEO SAMPLES',
  trackUrls: [
    'https://soundcloud.com/yoil-628717682/do-you-hear-me',
    'https://soundcloud.com/sayit-2/proud-of-that',
    'https://soundcloud.com/yoil-628717682/youre-still-mine-yoil',
    'https://soundcloud.com/brett-daly-703325095/lose-you-again',
    'https://soundcloud.com/yoil-628717682/please-stay',
  ],
  videoSamples: [
    {
      id: 'video-1',
      title: 'Live Concert Performance',
      thumbnail: '/images/samples/video-thumb-1.jpg',
      videoUrl: 'https://www.youtube.com/watch?example1',
    },
    {
      id: 'video-2',
      title: 'Event Highlights',
      thumbnail: '/images/samples/video-thumb-2.jpg',
      videoUrl: 'https://www.youtube.com/watch?example2',
    },
  ],
};
