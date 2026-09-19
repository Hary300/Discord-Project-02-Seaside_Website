// 1. Interfaces
interface AudioTrack {
  id: string;
  iframeSrc?: string;
}

interface VideoSample {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

interface AudioVideoSamplesData {
  sectionTitle: string;
  audioPlaylist: AudioTrack[];
  videoSamples: VideoSample[];
}

export const trackUrls = [
  'https://soundcloud.com/yoil-628717682/do-you-hear-me',
  'https://soundcloud.com/sayit-2/proud-of-that',
  'https://soundcloud.com/yoil-628717682/youre-still-mine-yoil',
  'https://soundcloud.com/brett-daly-703325095/lose-you-again',
  'https://soundcloud.com/user-705847697/theres-more-to-life',
];

export const samplesData: AudioVideoSamplesData = {
  sectionTitle: 'SEASIDE AUDIO + VIDEO SAMPLES',
  audioPlaylist: [
    {
      id: 'track-1',

      iframeSrc:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2392445976&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 'track-2',
      iframeSrc:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2320480850&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 'track-3',
      iframeSrc:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2301400784&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 'track-4',
      iframeSrc:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2176835787&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 'track-5',
      iframeSrc:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2378583092&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
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
