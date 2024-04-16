import React from 'react';

import { IconProps } from '@/types';

export const IonicIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#3880FF"
      d="M128.152.001c20.777 0 40.34 4.854 58.692 14.257l2.426 1.214l-2.123 1.668c-5.156 4.095-9.251 9.403-11.83 15.469l-.758 1.668l-1.516-.758c-14.105-6.673-29.119-10.161-44.74-10.161c-57.782 0-104.644 47.014-104.644 104.644s46.71 104.645 104.493 104.645c57.782 0 104.644-47.014 104.644-104.645c0-13.8-2.578-27.298-8.038-40.038L224 86.296l1.668-.758c6.218-2.275 11.678-6.066 16.076-10.92l1.668-2.123l1.062 2.427C252.209 91.756 256 109.652 256 127.699c0 70.521-57.479 128-128 128S0 198.22 0 127.7S57.479-.3 128.152.001m0 69.764c32 0 58.237 26.086 58.388 58.389c0 32.303-26.085 58.389-58.388 58.389c-32.304 0-58.389-26.086-58.389-58.389c0-32.303 26.237-58.389 58.389-58.389m83.564-48.227c14.741 0 26.692 11.95 26.692 26.692c0 14.741-11.95 26.692-26.692 26.692s-26.692-11.95-26.692-26.692s11.95-26.692 26.692-26.692"
    />
  </svg>
);