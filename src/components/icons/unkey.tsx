import React from 'react';

import { IconProps } from '@/types';

export const UnkeyIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 276 276"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_101_3_root)">
      <path
        d="M160.206 70H197V156.749C197 167.064 194.529 175.99 189.588 183.528C184.691 191.021 177.853 196.818 169.074 200.917C160.294 204.972 150.103 207 138.5 207C126.809 207 116.574 204.972 107.794 200.917C99.0147 196.818 92.1765 191.021 87.2794 183.528C82.4265 175.99 80 167.064 80 156.749V70H116.794V153.575C116.794 157.763 117.721 161.51 119.574 164.816C121.426 168.078 123.985 170.634 127.25 172.486C130.559 174.337 134.309 175.263 138.5 175.263C142.735 175.263 146.485 174.337 149.75 172.486C153.015 170.634 155.574 168.078 157.426 164.816C159.279 161.51 160.206 157.763 160.206 153.575V70Z"
        fill="url(#paint0_linear_101_3_root)"
        shapeRendering="crispEdges"
      ></path>
      <path
        d="M160.206 69.5H159.706V70V153.575C159.706 157.686 158.797 161.346 156.991 164.57C155.183 167.753 152.689 170.244 149.503 172.051C146.323 173.854 142.66 174.763 138.5 174.763C134.386 174.763 130.722 173.855 127.496 172.05C124.311 170.244 121.817 167.753 120.009 164.57C118.203 161.346 117.294 157.686 117.294 153.575V70V69.5H116.794H80H79.5V70V156.749C79.5 167.145 81.9466 176.168 86.859 183.798L86.8609 183.801C91.813 191.379 98.726 197.235 107.583 201.37L107.584 201.371C116.442 205.462 126.751 207.5 138.5 207.5C150.161 207.5 160.426 205.462 169.283 201.371L169.285 201.37C178.141 197.235 185.054 191.379 190.006 183.802C195.008 176.171 197.5 167.147 197.5 156.749V70V69.5H197H160.206Z"
        stroke="url(#paint1_linear_101_3_root)"
        shapeRendering="crispEdges"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_d_101_3_root"
        x="75"
        y="69"
        width="127"
        height="147"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        ></feColorMatrix>
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_101_3"
        ></feBlend>
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_101_3"
          result="shape"
        ></feBlend>
      </filter>
      <linearGradient
        id="paint0_linear_101_3_root"
        x1="80"
        y1="70"
        x2="176.419"
        y2="207.057"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.161458"></stop>
        <stop offset="1" stopColor="#B6B6B6" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_101_3_root"
        x1="47.5"
        y1="168.5"
        x2="212.999"
        y2="167.862"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.194498"></stop>
        <stop offset="0.411458" stopColor="white" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);
