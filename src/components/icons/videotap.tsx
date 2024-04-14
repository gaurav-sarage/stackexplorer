import React from 'react';

import { IconProps } from '@/types';

export const VideoTapIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0.00 0.00 32.00 32.00"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#f54139"
      d="
  M 8.38 0.00
  L 11.51 0.00
  L 11.49 11.26
  Q 11.48 12.72 10.02 12.89
  Q 9.40 12.96 8.82 12.49
  A 1.20 1.18 19.6 0 1 8.37 11.56
  L 8.38 0.00
  Z"
    />
    <path
      fill="#efad0b"
      d="
  M 14.47 0.00
  L 17.56 0.00
  L 17.55 25.22
  Q 17.55 26.73 16.04 26.79
  Q 15.71 26.80 15.40 26.70
  Q 14.46 26.41 14.46 25.42
  L 14.47 0.00
  Z"
    />
    <path
      fill="#a650f2"
      d="
  M 20.53 0.00
  L 23.70 0.00
  L 23.68 19.23
  A 1.30 1.29 -9.9 0 1 22.83 20.43
  Q 22.22 20.65 21.63 20.50
  Q 20.52 20.20 20.52 19.06
  L 20.53 0.00
  Z"
    />
  </svg>
);
