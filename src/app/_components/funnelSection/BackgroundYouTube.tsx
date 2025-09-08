// components/BackgroundYouTube.tsx

'use client';

import { useMemo } from 'react';

type Props = {
  videoUrl: string; // e.g. "FikkQTfbaOs"
};

export default function BackgroundYouTube({ videoUrl }: Props) {
  const urlInstance = new URL(videoUrl);
  urlInstance.search = '';
  const videoId = urlInstance.toString().split('/')[4] ?? '';
  const src = useMemo(() => {
    // Build the embed URL with clean params
    const params = new URLSearchParams({
      controls: '0',
      rel: '0',
      playsinline: '1',
      cc_load_policy: '0',
      enablejsapi: '1',
      modestbranding: '1',
      iv_load_policy: '3',
      autoplay: '1',
      mute: '1',
      loop: '1',
      playlist: videoId,
    });
    return `https://youtube.com/embed/${videoId}?${params.toString()}`;
  }, [videoId]);

  return (
    <iframe
      id="widget2"
      title="Rankkit shorts video"
      src={src}
      width="100%"
      height="100%"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        border: 0,
        borderRadius: '12px',
      }}
    />
  );
}
