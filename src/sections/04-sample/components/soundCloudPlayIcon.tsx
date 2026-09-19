export const SoundCloudPlayIcon = ({
  isPlaying = false,
}: {
  isPlaying: boolean;
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 43 43'
    className='shrink-0 size-8 lg:size-12'
  >
    <defs>
      <linearGradient
        id='playButton__gradient18'
        x1='0%'
        y1='0%'
        x2='0%'
        y2='100%'
        spreadMethod='pad'
      >
        <stop offset='0%' stopColor='#ff5500' stopOpacity='1' />
        <stop offset='100%' stopColor='#ff2200' stopOpacity='1' />
      </linearGradient>
    </defs>
    <circle
      fill='url(#playButton__gradient18)'
      stroke='#cc4400'
      cx='21.5'
      cy='21.5'
      r='21'
    />
    <circle
      className='playButton__overlay'
      fill='#000'
      fillOpacity='0.08'
      stroke='#cc4400'
      cx='21.5'
      cy='21.5'
      r='21'
    />
    {!isPlaying ? (
      <path
        className='playButton__play'
        fill='#fff'
        d='M31,21.5L17,33l2.5-11.5L17,10L31,21.5z'
      />
    ) : (
      <g fill='#fff' className='playButton__pause'>
        <rect x='15' y='12' width='4' height='19' rx='1' />
        <rect x='24' y='12' width='4' height='19' rx='1' />
      </g>
    )}
  </svg>
);
