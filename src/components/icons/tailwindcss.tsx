import React from 'react';

import { IconProps } from '@/types';

export const TailwindCSSIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <rect width="256" height="256" fill="#242938" rx="60" />
      <path
        fill="url(#skillIconsTailwindcssDark0)"
        fillRule="evenodd"
        d="M83 110c6-24 21.001-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5C102.499 93.5 92 98 83 110m-45 54c6-23.999 21-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5c-12-3.001-22.5 1.499-31.5 13.5"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="skillIconsTailwindcssDark0"
          x1="86.5"
          x2="163.5"
          y1="74"
          y2="185.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32B1C1" />
          <stop offset="1" stopColor="#14C6B7" />
        </linearGradient>
      </defs>
    </g>
  </svg>
);
