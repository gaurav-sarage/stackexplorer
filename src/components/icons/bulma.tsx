import React from 'react';

import { IconProps } from '@/types';

export const BulmaIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#00D1B2"
      d="M0 256L23.273 93.091L116.364 0l116.363 116.364l-69.818 69.818L256 279.273l-139.636 93.091z"
    />
  </svg>
);
