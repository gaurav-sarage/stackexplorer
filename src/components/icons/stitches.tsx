import React from 'react';

import { IconProps } from '@/types';

export const StitchesIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 35 35"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <circle
      cx="17.5"
      cy="17.5"
      r="14.5"
      stroke="currentColor"
      strokeWidth="2"
    ></circle>
    <path d="M12.8184 31.3218L31.8709 20.3218" stroke="currentColor"></path>
    <path d="M3.31836 14.8674L22.3709 3.86743" stroke="currentColor"></path>
    <path
      d="M8.65332 29.1077L25.9738 19.1077"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9.21582 16.0815L26.5363 6.08154"
      stroke="currentColor"
      strokeLinecap="round"
    ></path>
    <path
      d="M13.2334 14.2297L22.5099 21.1077"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.6973 12.2302L25.9736 19.1078"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9.21582 16.0815L19.0459 23.1078"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
