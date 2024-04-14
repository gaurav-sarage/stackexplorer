import React from 'react';

import { IconProps } from '@/types';

export const PaddleIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 150 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path className="d" d="M0,0H150V150H0V0Z" fill="none" />
    <rect
      className="b"
      x="13.81"
      y="14.19"
      width="123.98"
      height="123.98"
      fill="#ffdd35"
    />
    <path
      className="c"
      d="M37.28,65.7v-3.41c4.2,0,8.23-1.66,11.21-4.61,2.97-2.94,4.64-6.95,4.65-11.13h3.17c0,4.19,1.66,8.2,4.64,11.15,2.98,2.97,7.02,4.63,11.22,4.62v3.41c-4.2,0-8.23,1.66-11.21,4.61-2.97,2.94-4.64,6.95-4.65,11.13h-3.17c0-4.19-1.66-8.2-4.64-11.15-2.99-2.96-7.02-4.62-11.22-4.62Z"
    />
    <path
      className="c"
      fill="#040f11"
      d="M53.14,40.64h27.27c13.32,0,22.84,9.45,22.84,23.3s-9.51,23.3-22.84,23.3h-27.28v39.68h11.41v-29.6h15.86c19.16,0,34.26-14.99,34.26-33.38s-15.1-33.38-34.26-33.38h-27.27v10.08Z"
    />
  </svg>
);
