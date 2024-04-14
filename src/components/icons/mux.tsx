import React from 'react';

import { IconProps } from '@/types';

export const MuxIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-2xl"
  >
    <path
      fill="#FA50B5"
      fillRule="evenodd"
      d="M16 0H0v16h16V0Zm-4.56 2.439A1.5 1.5 0 0 1 14 3.499V12.5a1.5 1.5 0 0 1-3 0V7.12L9.06 9.06a1.5 1.5 0 0 1-2.12 0L5 7.12v5.38a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 2.56-1.061L8 5.879l3.44-3.44Zm.316 10.061a.744.744 0 1 0 1.488 0 .744.744 0 0 0-1.488 0Z"
      clipRule="evenodd"
    />
  </svg>
);
