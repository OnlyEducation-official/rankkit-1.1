/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
// Panorama.tsx

'use client';

import { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';

type Props = {
  src: string;
  caption?: string;
  height?: number | string;
  rounded?: number;
  navbar?: Array<'zoom' | 'move' | 'autorotate' | 'fullscreen' | 'caption'>;
  lockZoom?: boolean;
};

export default function Panorama({
  src,
  caption,
  height = 500,
  rounded = 12,
  navbar = ['move', 'fullscreen', 'caption'],
  lockZoom = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const viewer = new Viewer({
      container: ref.current,
      panorama: src,
      caption,
      navbar: lockZoom ? navbar : [...new Set(['zoom', ...navbar])],
      mousewheelCtrlKey: true,
      touchmoveTwoFingers: false,
      ...(lockZoom
        ? {
            minFov: 60,
            maxFov: 60,
            mousewheel: false,
          }
        : {}),
      plugins: [[AutorotatePlugin, { autostartDelay: 1500, autorotateSpeed: '0.5rpm' }]],
    });

    return () => viewer.destroy();
  }, [src, caption, navbar, lockZoom]);

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height,
        borderRadius: rounded,
      }}
    />
  );
}
