import React from 'react';

import { IconProps } from '@/types';

export const VitestIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#FCC72B"
      d="m96.058 40.82l-30.6 44.244a2.635 2.635 0 0 1-4.339-.007a2.607 2.607 0 0 1-.451-1.601l1.225-24.428l-19.772-4.192a2.628 2.628 0 0 1-1.891-1.59a2.603 2.603 0 0 1 .278-2.451l30.6-44.244a2.632 2.632 0 0 1 3.009-.998a2.621 2.621 0 0 1 1.33 1.005c.322.47.48 1.032.451 1.601l-1.224 24.428l19.77 4.192c.423.09.817.282 1.147.56a2.605 2.605 0 0 1 .467 3.48Z"
    />
    <path
      fill="#729B1B"
      d="M64.013 122.185a6.19 6.19 0 0 1-4.382-1.815L30.717 91.458a6.195 6.195 0 0 1 4.384-10.565a6.198 6.198 0 0 1 4.378 1.803l24.534 24.53l53.446-53.444a6.195 6.195 0 0 1 8.762 8.762L68.393 120.37a6.175 6.175 0 0 1-4.38 1.815"
    />
    <path
      fill="#729B1B"
      fillOpacity=".5"
      d="M63.988 122.185c.814 0 1.62-.159 2.371-.47a6.191 6.191 0 0 0 2.01-1.345l28.914-28.912a6.193 6.193 0 0 0-.012-8.75a6.197 6.197 0 0 0-8.75-.012l-24.533 24.53L10.54 53.782a6.196 6.196 0 0 0-8.762 8.762l57.828 57.826a6.176 6.176 0 0 0 4.38 1.815Z"
    />
  </svg>
);
