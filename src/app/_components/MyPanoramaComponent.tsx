/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
// Panorama.tsx

'use client';

import { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';

type Props = {
  src: string | null;
  caption?: string;
  navbar?: Array<'zoom' | 'move' | 'autorotate' | 'fullscreen' | 'caption'>;
  lockZoom?: boolean;
};

export default function Panorama({
  src,
  caption,
  navbar = ['move', 'fullscreen', 'caption'],
  lockZoom = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const viewer = new Viewer({
      container: ref.current,
      panorama: src,
      caption,
      minFov: 3,
      maxFov: 9,
      navbar: lockZoom ? navbar : [...new Set(['zoom', ...navbar])],
      mousewheelCtrlKey: true,
      touchmoveTwoFingers: false,
      ...(lockZoom
        ? {
            minFov: 80,
            maxFov: 80,
            mousewheel: false,
          }
        : {}),
      plugins: [[AutorotatePlugin, { autostartDelay: 1500, autorotateSpeed: '0.5rpm' }]],
    });

    // Store viewer reference
    viewerRef.current = viewer;

    // Handle mouse leave - force stop any drag operation
    const handleMouseLeave = () => {
      const container = ref.current;
      if (!container) return;

      // Dispatch a synthetic mouseup event to the viewer's container
      // This tells the photo-sphere-viewer library that the mouse was released
      const mouseUpEvent = new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: true,
        view: window,
        button: 0, // Left mouse button
      });

      container.dispatchEvent(mouseUpEvent);

      // Also dispatch to the canvas element if it exists
      const canvas = container.querySelector('canvas');
      if (canvas) {
        canvas.dispatchEvent(mouseUpEvent);
      }
    };

    // Add mouseleave listener to the container
    const container = ref.current;
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseleave', handleMouseLeave);
      viewer.destroy();
      viewerRef.current = null;
    };
  }, [src, caption, navbar, lockZoom]);

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '50px',
      }}
    />
  );
}
