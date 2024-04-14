import React from 'react';

import { IconProps } from '@/types';

export const PlanetScaleIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <rect width="256" height="256" fill="#242938" rx="60" />
      <path
        fill="#fff"
        d="M38 128.002C38 78.295 78.295 38 128.002 38c36.547 0 68.007 21.784 82.103 53.076L91.075 210.105a89.894 89.894 0 0 1-14.51-8.238l73.866-73.865h-22.429l-63.641 63.641C48.074 175.356 38 152.855 38 128.002m180 .029l-89.971 89.971c49.682-.016 89.954-40.288 89.971-89.971"
      />
    </g>
  </svg>
);
