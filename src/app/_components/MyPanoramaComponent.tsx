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

  useEffect(() => {
    if (!ref.current) return;

    const viewer = new Viewer({
      container: ref.current,
      panorama: src,
      caption,
      navbar: lockZoom ? navbar : [...new Set(['zoom', ...navbar])],
      mousewheelCtrlKey: true,
      touchmoveTwoFingers: false,
      ...(lockZoom ? { minFov: 80, maxFov: 80, mousewheel: false } : {}),
      plugins: [[AutorotatePlugin, { autostartDelay: 1500, autorotateSpeed: '0.5rpm' }]],
    });

    const el = ref.current;

    // 1) Pointer capture: keeps drag events even if pointer goes outside iframe
    const onPointerDown = (e: PointerEvent) => {
      if (el && 'setPointerCapture' in el) {
        el.setPointerCapture(e.pointerId);
      }
    };

    // 2) Force release drag if mouseup happens outside iframe
    const forceRelease = () => {
      if (!el) return;

      // Send synthetic "mouseup" so the viewer stops dragging
      el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
      el.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
      el.dispatchEvent(new PointerEvent('pointerup', { bubbles: true }));
      el.dispatchEvent(new PointerEvent('pointercancel', { bubbles: true }));
    };

    el.addEventListener('pointerdown', onPointerDown);

    window.addEventListener('blur', forceRelease); // user clicked outside iframe
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) forceRelease();
    });
    document.addEventListener('mouseleave', forceRelease);
    window.addEventListener('pointercancel', forceRelease);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('blur', forceRelease);
      window.removeEventListener('pointercancel', forceRelease);
      document.removeEventListener('mouseleave', forceRelease);

      viewer.destroy();
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
