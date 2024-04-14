import React from 'react';

import { IconProps } from '@/types';

export const LogoIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded border-neutral-200"
  >
    <rect
      id="r4"
      width="512"
      height="512"
      x="0"
      y="0"
      rx="80"
      fill="#f5f5f5"
      stroke="#000000"
      strokeWidth="0"
      strokeOpacity="100%"
      paintOrder="stroke"
    />
    <defs>
      <linearGradient
        id="linearGradient-iconWithBackground"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(0)"
        // style="transformOrigin: center center;"
      >
        <stop stopColor="#0365b0" />
        <stop offset="1" stopColor="#0f1d61" />
      </linearGradient>
      <radialGradient
        id="glare"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(256) rotate(90) scale(512)"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <clipPath id="clip">
        <use xlinkHref="#r4" />
      </clipPath>
    </defs>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      x="69.5"
      y="69.5"
      className="iconify iconify--flatColor-icons"
      width="373"
      height="373"
      viewBox="0 0 48 48"
      //   style="color: rgb(53, 233, 140);"
    >
      <g fill="#616161">
        <path d="m29.175 31.99l2.828-2.827l12.019 12.019l-2.828 2.827z" />
        <circle cx="20" cy="20" r="16" />
      </g>
      <path
        fill="#37474F"
        d="m32.45 35.34l2.827-2.828l8.696 8.696l-2.828 2.828z"
      />
      <circle cx="20" cy="20" r="13" fill="#64B5F6" />
      <path
        fill="#BBDEFB"
        d="M26.9 14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2 1.2-6.9 3.2c-.4.4-.3 1.1.1 1.4c.4.4 1.1.3 1.4-.1C16 13.9 17.9 13 20 13s4 .9 5.4 2.5c.2.2.5.4.8.4c.2 0 .5-.1.6-.2c.4-.4.4-1.1.1-1.5"
      />
    </svg>
  </svg>
);
