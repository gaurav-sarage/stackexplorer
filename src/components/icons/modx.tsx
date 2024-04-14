import React from 'react';

import { IconProps } from '@/types';

export const MODXIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 34 35"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.0999 3.2998H16.5L14.2 6.8998L26.2 14.2998L33.0999 3.2998Z"
      fill="#00B5DE"
    />
    <path
      d="M14.2 6.9L3.09998 0V16.6L6.99998 18.8L26.2 14.3L14.2 6.9Z"
      fill="#00DECC"
    />
    <path d="M29.8 17.7L26.2 15.5L18.8 27.4L29.8 34.3V17.7Z" fill="#FF5529" />
    <path
      d="M26.2 15.5L6.9 20.1L0 30.9H16.6L18.8 27.4L26.2 15.5Z"
      fill="#FF9640"
    />
  </svg>
);
