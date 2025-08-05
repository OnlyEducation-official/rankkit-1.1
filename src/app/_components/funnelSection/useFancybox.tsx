/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { useState, useEffect } from 'react';

import { type FancyboxOptions, Fancybox } from '@fancyapps/ui/dist/fancybox/';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function useFancybox(options: Partial<FancyboxOptions> = {}) {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (root) {
      Fancybox.bind(root, '[data-fancybox]', options);
      return () => Fancybox.unbind(root);
    }
  }, [root, options]);

  return [setRoot];
}
