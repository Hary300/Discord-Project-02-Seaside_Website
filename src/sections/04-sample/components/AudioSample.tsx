import { samplesData } from '@/data/04-sampleData';
import { fetchTrackMetadata } from '@/lib/fetchTrackMetadata';
import type { Track } from '@/types/Track';
import { useEffect, useRef, useState } from 'react';
import { SoundCloudPlayIcon } from './soundCloudPlayIcon';

type SoundCloudSound = {
  title: string;
  waveform_url: string;
  duration: number;
  [key: string]: unknown;
};

interface SCWidget {
  bind: (eventName: string, callback: () => void) => void;
  unbind: (eventName: string) => void;
  load: (url: string, options?: Record<string, unknown>) => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  seekTo: (milliseconds: number) => void;
  setVolume: (volume: number) => void;
  isPaused: (callback: (paused: boolean) => void) => void;
  getCurrentSound(callback: (sound: SoundCloudSound) => void): void;
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
    SC: SoundCloudSDK;
  }
}

const AudioSample = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<SCWidget | null>(null);

  const [activeTrack, setActiveTrack] = useState<Track | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  // const [waveformUrl, setWaveformUrl] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      const fetchedTracks = await Promise.all(
        samplesData.trackUrls.map((url) => fetchTrackMetadata(url))
      );
      setTracks(fetchedTracks);
      if (fetchedTracks.length > 0) {
        setActiveTrack(fetchedTracks[0]);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!iframeRef.current) return;

    const initWidget = () => {
      if (!window.SC || !iframeRef.current) return;

      const SC = window.SC;
      const widget = SC.Widget(iframeRef.current);
      widgetRef.current = widget;

      widget.bind(SC.Widget.Events.READY, () => {
        // const widget = window.SC.Widget(iframeRef.current) as SCWidget;
        // widgetRef.current = widget;

        // widget.getCurrentSound((sound) => {
        //   if (sound.waveform_url) {
        //     const pngWaveformUrl = sound.waveform_url.replace('.json', '.png');
        //     setWaveformUrl(pngWaveformUrl);
        //   }
        // });

        widget.bind(SC.Widget.Events.PLAY, () => setIsPlaying(true));
        widget.bind(SC.Widget.Events.PAUSE, () => setIsPlaying(false));
        widget.bind(SC.Widget.Events.FINISH, () => setIsPlaying(false));
      });
    };

    if (!window.SC) {
      const interval = setInterval(() => {
        if (window.SC) {
          initWidget();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    } else {
      initWidget();
    }
  }, []);

  const handleSelectTrack = (track: Track) => {
    const widget = widgetRef.current;
    if (!widget) return;

    if (activeTrack?.title === track.title) {
      widget.toggle();
      return;
    }

    setActiveTrack(track);

    widget.load(track.url, {
      auto_play: true,
      callback: () => {
        widget.play();
      },
    });
  };

  // const togglePlay = () => {
  //   const widget = widgetRef.current;
  //   if (!widget) return;
  //   widget.toggle();
  // };

  return (
    <div className='flex flex-col gap-4'>
      {/* <div className='flex justify-between'>
        <div className='flex items-center gap-6 p-6 rounded-lg bg-[#F5F5F5] shadow-[0_0_10px_rgba(0,0,0,0.2)]'>
          <img
            src={activeTrack?.thumbnail}
            alt={activeTrack?.title}
            className='size-50 object-cover shadow-lg shrink-0'
          />
          <div>
            <div className='flex gap-3 overflow-hidden'>
              <button
                onClick={togglePlay}
                className='w-12 h-12 bg-[#ff5500] hover:scale-105 active:scale-95 text-white rounded-full flex items-center justify-center transition cursor-pointer'
              >
                <SoundCloudPlayIcon isPlaying={isPlaying} />
              </button>
              <div>
                <h3 className='text-xl font-bold truncate'>
                  {activeTrack?.title}
                </h3>
                <p className='text-stone-400 text-sm'>{activeTrack?.artist}</p>
              </div>
            </div>

            {waveformUrl && (
              <div className='relative w-full h-16 bg-gray-900/50 rounded flex items-center justify-center overflow-hidden p-1'>
                <img
                  src={waveformUrl}
                  alt='SoundCloud Waveform'
                  className='w-full h-full object-fill filter brightness-200 contrast-200'
                  draggable={false}
                />
              </div>
            )}
          </div>
        </div>
      </div> */}

      <iframe
        ref={iframeRef}
        // className='hidden'
        width='100%'
        height='166'
        allow='autoplay'
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          activeTrack?.url ?? ''
        )}&auto_play=false`}
      />

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
