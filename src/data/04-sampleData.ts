// 1. Interfaces
interface AudioTrack {
  id: string;
  title: string;
  subtitle?: string;
  thumbnail: string;
  duration?: string;
  audioUrl?: string;
}

interface VideoSample {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

interface AudioVideoSamplesData {
  sectionTitle: string;
  activeAudio: AudioTrack;
  audioPlaylist: AudioTrack[];
  videoSamples: VideoSample[];
}

// 2. Object Data
export const samplesData: AudioVideoSamplesData = {
  sectionTitle: 'SEASIDE AUDIO + VIDEO SAMPLES',

  activeAudio: {
    id: 'active-1',
    title: '417 Hz Audio: Seaside Howls',
    subtitle: 'Concert Promo: Morgan Wallen',
    thumbnail: '/images/samples/active-audio-thumb.jpg',
    duration: '3:34',
    audioUrl: '/audio/seaside-howls.mp3',
  },

  audioPlaylist: [
    {
      id: 'audio-1',
      title: 'Seaside Sunday Happy Hour Live Audio (3.3.24)',
      thumbnail: '/images/samples/playlist-1.jpg',
    },
    {
      id: 'audio-2',
      title: 'Seaside Saturday 2.24.24 Live Audio',
      thumbnail: '/images/samples/playlist-2.jpg',
    },
    {
      id: 'audio-3',
      title: 'SEASIDE AUDIO VISION PLAYLIST ONE',
      thumbnail: '/images/samples/playlist-3.jpg',
    },
    {
      id: 'audio-4',
      title: 'Michael Hughes - Seaside Audio Vision - 05 Hollywood Baby Chorus',
      thumbnail: '/images/samples/playlist-4.jpg',
    },
    {
      id: 'audio-5',
      title: 'Seaside feat. Junglebox (official audio)',
      thumbnail: '/images/samples/playlist-5.jpg',
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
