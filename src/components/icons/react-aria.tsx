import React from 'react';

import { IconProps } from '@/types';

export const ReactAriaIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 30 26"
    fill="#E1251B"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="19,0 30,0 30,26"></polygon>
    <polygon points="11.1,0 0,0 0,26"></polygon>
    <polygon points="15,9.6 22.1,26 17.5,26 15.4,20.8 10.2,20.8"></polygon>
  </svg>
);
