import React from 'react';

import { IconProps } from '@/types';

export const VercelIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <rect width="256" height="256" fill="#242938" rx="60" />
      <path fill="#fff" d="m128 34l95 164.853H33z" />
    </g>
  </svg>
);
