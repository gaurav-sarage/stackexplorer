import React from 'react';

import { IconProps } from '@/types';

export const PayloadIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 260 260"
    xmlns="http://www.w3.org/2000/svg"
    fill="#0F0F0F"
  >
    <path d="M120.59 8.5824L231.788 75.6142V202.829L148.039 251.418V124.203L36.7866 57.2249L120.59 8.5824Z" />
    <path d="M112.123 244.353V145.073L28.2114 193.769L112.123 244.353Z" />
  </svg>
);
