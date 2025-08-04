/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

'use client';

import { Box, Stack } from '@mui/material';

// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import useFancybox from './useFancybox';

export default function Corosoll() {
  const [fancyboxRef] = useFancybox({
    // Your custom options
  });

  const DUMMY_CARDS = [
    {
      id: 1,
      videoUrl: 'https://backend.realatte.com/uploads/reel8_c39f398558.mp4',
      coverImage:
        'https://realatte.com/_next/image?url=https%3A%2F%2Fbackend.realatte.com%2Fuploads%2Freel8_f3c47323bf.png&w=2048&q=75',
    },
    {
      id: 2,
      videoUrl: 'https://backend.realatte.com/uploads/reel4_cd4ecc07b2.mp4',
      coverImage:
        'https://realatte.com/_next/image?url=https%3A%2F%2Fbackend.realatte.com%2Fuploads%2Freel4_9082f8fe17.png&w=2048&q=75',
    },
    {
      id: 3,
      videoUrl: 'https://backend.realatte.com/uploads/reel5_b8d40ef4dd.mp4',
      coverImage:
        'https://realatte.com/_next/image?url=https%3A%2F%2Fbackend.realatte.com%2Fuploads%2Freel5_99ae013600.png&w=2048&q=75',
    },
  ];

  return (
    <Stack>
      <Box ref={fancyboxRef}>
        {DUMMY_CARDS.map((card) => (
          <Box key={card.id}>
            <a href={card.videoUrl} data-fancybox data-width="640" data-height="360">
              <img
                src="https://lipsum.app/id/61/200x150"
                alt="Video poster"
                width="240"
                height="180"
              />
            </a>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
