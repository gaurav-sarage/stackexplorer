import React from 'react';

import { IconProps } from '@/types';

export const NetMauiIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 24 23"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9645 10.9645H-0.00146484V-0.00146484H10.9645V10.9645Z"
      fill="#F25022"
    />
    <path
      d="M23.072 10.9645H12.106V-0.00146484H23.072V10.9645Z"
      fill="#7FBA00"
    />
    <path
      d="M10.9645 23.072H-0.00146484V12.106H10.9645V23.072Z"
      fill="#00A4EF"
    />
    <path d="M23.072 23.072H12.106V12.106H23.072V23.072Z" fill="#FFB900" />
  </svg>
);
