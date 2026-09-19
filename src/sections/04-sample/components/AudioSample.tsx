import { trackUrls } from '@/data/04-sampleData';
import { fetchTrackMetadata } from '@/lib/fetchTrackMetadata';
import type { Track } from '@/types/Track';
import { useEffect, useRef, useState } from 'react';
import { SoundCloudPlayIcon } from './soundCloudPlayIcon';

interface SCWidget {
  bind: (eventName: string, callback: () => void) => void;
  unbind: (eventName: string) => void;
  load: (url: string, options?: Record<string, unknown>) => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  seekTo: (milliseconds: number) => void;
  setVolume: (volume: number) => void;
}

interface SoundCloudSDK {
  Widget: {
    (element: HTMLIFrameElement | null): SCWidget;
    Events: {
      READY: string;
      PLAY: string;
      PAUSE: string;
      FINISH: string;
      SEEK: string;
    };
  };
}

declare global {
  interface Window {
    SC?: SoundCloudSDK;
  }
}

const AudioSample = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<SCWidget | null>(null);

  const [activeTrack, setActiveTrack] = useState<Track | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!iframeRef.current || !window.SC) return;

    const widget = window.SC.Widget(iframeRef.current);
    widgetRef.current = widget;

    widget.bind(window.SC.Widget.Events.READY, () => {
      widget.bind(window.SC?.Widget.Events.PLAY ?? 'play', () => {
        setIsPlaying(true);
      });

      widget.bind(window.SC?.Widget.Events.PAUSE ?? 'pause', () => {
        setIsPlaying(false);
      });
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      const tracks = await Promise.all(
        trackUrls.map((url) => fetchTrackMetadata(url))
      );
      setTracks(tracks);
      setActiveTrack(tracks[0]);
    };
    getData();
  }, []);

  const handleSelectTrack = (track: Track) => {
    const widget = widgetRef.current;
    if (!widget) return;

    if (activeTrack?.title === track.title) {
      widget.toggle();
    } else {
      setActiveTrack(track);
      widget.load(track.url, {
        auto_play: true,
        callback: () => {
          widget.play();
        },
      });
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <iframe
        ref={iframeRef}
        scrolling='no'
        frameBorder='no'
        allow='autoplay; encrypted-media'
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(activeTrack?.url ?? '')}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
        className='shadow-[0_0_10px_rgba(0,0,0,0.2)] flex w-full h-auto'
      ></iframe>
      <div className='flex flex-col gap-4'>
        {tracks.map((track) => {
          const isThisTrackActive = track.title === activeTrack?.title;
          const isThisTrackPlaying = isThisTrackActive && isPlaying;
          return (
            <div
              key={track.title}
              className='grid grid-cols-[auto_auto_1fr] gap-4 p-4 shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-[#F5F5F5] items-center hover:underline cursor-pointer active:translate-y-px'
              onClick={() => handleSelectTrack(track)}
            >
              <SoundCloudPlayIcon isPlaying={isThisTrackPlaying} />
              <div className='w-20'>
                <img src={track.thumbnail} alt='thumbnail image' />
              </div>
              <p>
                {track.artist} - {track.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AudioSample;
