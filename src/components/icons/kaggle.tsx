import React from 'react';

import { IconProps } from '@/types';

export const KaggleIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0.00 0.00 256.00 256.00"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#35b5e2"
      d="
  M 58.62 0.00
  L 86.50 0.00
  Q 89.00 0.98 89.00 4.75
  Q 89.02 80.61 89.00 156.05
  Q 89.00 156.84 89.56 156.27
  Q 121.75 123.27 154.00 90.24
  C 155.63 88.57 157.33 87.28 159.56 87.28
  Q 175.37 87.23 193.86 87.26
  C 197.00 87.26 197.78 91.01 195.76 92.99
  Q 163.38 124.65 127.48 159.90
  A 0.39 0.38 -42.0 0 0 127.45 160.40
  Q 162.58 204.61 198.27 249.53
  Q 199.16 250.65 199.59 252.11
  Q 200.55 255.35 198.27 256.00
  L 162.76 256.00
  Q 160.14 255.00 159.31 253.93
  Q 131.94 218.69 104.57 183.41
  A 0.47 0.46 48.9 0 0 103.88 183.36
  L 89.52 197.28
  A 1.67 1.66 68.2 0 0 89.01 198.48
  Q 89.02 225.01 89.01 251.75
  Q 89.01 255.14 86.37 256.00
  L 58.51 256.00
  Q 56.01 255.05 56.01 252.25
  Q 56.00 128.37 56.01 4.50
  Q 56.01 0.88 58.62 0.00
  Z"
    />
  </svg>
);