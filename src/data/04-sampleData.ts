interface VideoSample {
  id: string;
  videoId: string;
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
      videoId: 'iV5hMjq4P98',
    },
    {
      id: 'video-2',
      videoId: 'msClqkY-d5s',
    },
    {
      id: 'video-3',
      videoId: 'soS73IgwhxU',
    },
    {
      id: 'video-4',
      videoId: 'ZRZucFnCHDo',
    },
  ],
};
