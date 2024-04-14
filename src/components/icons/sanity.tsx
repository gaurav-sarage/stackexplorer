import React from 'react';

import { IconProps } from '@/types';

export const SanityIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-2xl"
  >
    <path fill="#F03E2F" d="M0 0h128v128H0z" />
    <path
      fill="#FFF"
      d="M39.423 33.163c0 10.998 6.913 17.543 20.754 20.993l14.666 3.341c13.099 2.956 21.075 10.298 21.075 22.258a22.465 22.465 0 0 1-4.884 14.408c0-11.933-6.283-18.38-21.439-22.258l-14.4-3.217c-11.532-2.585-20.432-8.62-20.432-21.612a22.353 22.353 0 0 1 4.66-13.913"
    />
    <path
      fill="#F9B1AB"
      d="M82.022 76.827c6.256 3.932 8.998 9.431 8.998 17.323c-5.177 6.516-14.274 10.173-24.965 10.173c-17.997 0-30.592-8.702-33.391-23.825h17.283c2.225 6.943 8.117 10.16 15.981 10.16c9.6 0 15.982-5.032 16.108-13.859M48.407 49.468a18.225 18.225 0 0 1-6.781-6.935a17.82 17.82 0 0 1-2.203-9.37c4.996-6.462 13.686-10.407 24.28-10.407c18.333 0 28.94 9.513 31.558 22.904H78.635c-1.833-5.28-6.423-9.39-14.792-9.39c-8.942 0-15.044 5.114-15.394 13.198"
    />
  </svg>
);
