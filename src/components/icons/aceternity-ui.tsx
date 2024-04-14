import React from 'react';

import { IconProps } from '@/types';

export const AceternityUIIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 64.000000 64.000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M105 626 c-37 -17 -80 -62 -94 -99 -14 -37 -14 -377 0 -414 14 -38
57 -83 96 -99 46 -20 380 -20 426 0 39 16 82 61 96 99 17 44 14 380 -3 420
-16 39 -61 82 -99 96 -43 16 -384 14 -422 -3z m178 -141 c177 -51 247 -96 247
-159 0 -59 -79 -113 -253 -175 -97 -34 -131 -31 -125 12 2 17 23 29 100 58
104 39 199 89 202 104 2 16 -105 64 -200 90 -102 29 -121 42 -105 74 15 27 30
26 134 -4z"
      />
    </g>
  </svg>
);
