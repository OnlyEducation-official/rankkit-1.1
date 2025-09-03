// components/YouTubeCarousel.tsx

'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { v4 as uuidv4 } from 'uuid';
import BackgroundYouTube from './BackgroundYouTube';
// uuid

type Props = {
  shorts: { id: string; links: string }[]; // must be YouTube EMBED urls
};

export default function YouTubeCarousel({ shorts }: Props) {
  const options = {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    gap: '32px',
    pagination: false,
    arrows: true,
    autoplay: true, // set to true if you want auto-play
    pauseOnHover: true,
    drag: 'free',
    rewind: false,
    breakpoints: {
      1200: { perPage: 3, gap: '12px' },
      900: { perPage: 2, gap: '12px' },
      600: { perPage: 1, gap: '10px' },
    },
  };

  return (
    <Splide aria-label="YouTube Videos" options={options}>
      {shorts.map((src) => (
        <SplideSlide
          key={uuidv4()}
          style={{ width: '100%', aspectRatio: '9 / 16', borderRadius: '15px' }}
        >
          <BackgroundYouTube videoId={src.links} />
        </SplideSlide>
      ))}
    </Splide>
  );
}
