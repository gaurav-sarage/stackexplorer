import React from 'react';

import { IconProps } from '@/types';

export const WatermelonDBIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0, 0, 400,400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="svgg">
      <path
        id="path0"
        d="M26.391 72.900 C 26.386 73.175,26.030 73.850,25.600 74.400 C 25.170 74.950,24.814 75.681,24.809 76.025 C 24.804 76.369,24.440 77.395,24.000 78.306 C 23.560 79.216,23.200 80.240,23.200 80.581 C 23.200 80.921,23.020 81.200,22.800 81.200 C 22.580 81.200,22.400 81.740,22.400 82.400 C 22.400 83.060,22.240 83.600,22.045 83.600 C 21.849 83.600,21.578 84.185,21.442 84.900 C 21.307 85.615,20.966 86.650,20.685 87.200 C 20.166 88.215,19.901 89.043,18.374 94.400 C 17.904 96.050,17.371 97.760,17.190 98.200 C 17.008 98.640,16.749 99.540,16.612 100.200 C 16.265 101.881,15.782 103.818,15.039 106.520 C 14.687 107.795,14.400 109.270,14.400 109.796 C 14.400 110.322,14.249 110.846,14.065 110.960 C 13.882 111.073,13.699 112.000,13.661 113.018 C 13.622 114.036,13.438 115.169,13.251 115.535 C 13.063 115.901,12.779 117.370,12.618 118.800 C 12.457 120.230,12.243 122.120,12.142 123.000 C 12.041 123.880,11.784 125.263,11.570 126.074 C 11.357 126.885,11.223 127.695,11.273 127.874 C 11.322 128.053,11.213 129.640,11.030 131.400 C 10.847 133.160,10.629 135.320,10.546 136.200 C 10.346 138.333,10.359 161.711,10.563 164.000 C 10.931 168.143,11.619 174.671,11.784 175.600 C 11.882 176.150,12.161 178.130,12.403 180.000 C 12.645 181.870,13.011 184.120,13.216 185.000 C 13.421 185.880,13.653 187.140,13.731 187.800 C 13.809 188.460,13.978 189.270,14.107 189.600 C 14.235 189.930,14.425 190.740,14.528 191.400 C 14.746 192.794,15.844 197.245,16.410 199.028 C 16.625 199.704,16.800 200.638,16.800 201.105 C 16.800 201.571,16.980 202.064,17.200 202.200 C 17.420 202.336,17.600 202.889,17.600 203.429 C 17.600 203.969,17.762 204.723,17.959 205.105 C 18.156 205.487,18.729 207.150,19.231 208.800 C 19.733 210.450,20.292 211.971,20.472 212.180 C 20.652 212.389,20.800 212.963,20.800 213.456 C 20.800 213.949,20.980 214.464,21.200 214.600 C 21.420 214.736,21.600 215.377,21.600 216.024 C 21.600 216.671,21.780 217.200,22.000 217.200 C 22.220 217.200,22.400 217.560,22.400 218.000 C 22.400 218.440,22.580 218.800,22.800 218.800 C 23.020 218.800,23.200 219.155,23.200 219.588 C 23.200 220.021,23.523 220.966,23.919 221.688 C 24.314 222.410,24.891 223.810,25.202 224.800 C 25.512 225.790,25.891 226.690,26.043 226.800 C 26.263 226.960,29.338 233.243,30.544 236.000 C 30.689 236.330,31.134 237.140,31.534 237.800 C 33.229 240.600,34.800 243.690,34.800 244.225 C 34.800 244.541,34.980 244.800,35.200 244.800 C 35.420 244.800,35.600 245.042,35.600 245.338 C 35.600 245.634,35.960 246.202,36.400 246.600 C 36.840 246.998,37.200 247.656,37.200 248.062 C 37.200 248.468,37.358 248.800,37.551 248.800 C 37.745 248.800,38.127 249.340,38.400 250.000 C 38.673 250.660,39.055 251.200,39.249 251.200 C 39.442 251.200,39.600 251.388,39.600 251.618 C 39.600 251.848,40.500 253.370,41.600 255.000 C 42.700 256.630,43.600 258.152,43.600 258.382 C 43.600 258.612,43.750 258.800,43.932 258.800 C 44.115 258.800,44.520 259.295,44.832 259.900 C 45.449 261.096,45.537 261.221,47.007 263.000 C 47.553 263.660,47.999 264.359,48.000 264.553 C 48.000 264.747,48.315 265.197,48.700 265.553 C 49.702 266.480,52.000 269.493,52.000 269.880 C 52.000 270.060,52.360 270.432,52.800 270.707 C 53.240 270.982,53.600 271.474,53.600 271.800 C 53.600 272.126,53.960 272.618,54.400 272.893 C 54.840 273.168,55.200 273.527,55.200 273.691 C 55.200 273.855,56.100 274.894,57.200 276.000 C 58.300 277.106,59.200 278.120,59.200 278.253 C 59.200 278.550,70.533 289.699,74.192 293.000 C 75.655 294.320,77.097 295.625,77.397 295.900 C 77.697 296.175,78.020 296.400,78.115 296.400 C 78.209 296.400,79.257 297.313,80.443 298.429 C 81.630 299.545,83.320 300.969,84.200 301.594 C 85.080 302.218,86.089 303.060,86.443 303.464 C 87.216 304.349,88.726 305.600,89.021 305.600 C 89.138 305.600,89.620 305.960,90.092 306.400 C 90.564 306.840,91.187 307.200,91.475 307.200 C 91.764 307.200,92.000 307.368,92.000 307.573 C 92.000 307.778,92.366 308.062,92.813 308.204 C 93.260 308.346,94.062 308.898,94.595 309.431 C 95.128 309.964,95.842 310.400,96.182 310.400 C 96.522 310.400,96.800 310.580,96.800 310.800 C 96.800 311.020,97.042 311.200,97.338 311.200 C 97.634 311.200,98.202 311.560,98.600 312.000 C 98.998 312.440,99.551 312.800,99.829 312.800 C 100.106 312.800,100.393 312.937,100.467 313.104 C 100.540 313.271,101.635 314.029,102.900 314.788 C 104.165 315.548,105.200 316.311,105.200 316.485 C 105.200 316.658,105.560 316.800,106.000 316.800 C 106.440 316.800,106.800 316.980,106.800 317.200 C 106.800 317.420,107.160 317.600,107.600 317.600 C 108.040 317.600,108.400 317.749,108.400 317.932 C 108.400 318.114,109.300 318.685,110.400 319.200 C 111.500 319.715,112.400 320.248,112.400 320.385 C 112.400 320.857,121.545 325.200,122.539 325.200 C 122.902 325.200,123.200 325.380,123.200 325.600 C 123.200 325.820,123.434 326.000,123.720 326.000 C 124.456 326.000,126.393 326.941,126.397 327.300 C 126.399 327.465,126.850 327.600,127.400 327.600 C 127.950 327.600,128.400 327.780,128.400 328.000 C 128.400 328.220,128.749 328.400,129.176 328.400 C 129.603 328.400,130.064 328.580,130.200 328.800 C 130.336 329.020,130.797 329.200,131.224 329.200 C 131.651 329.200,132.000 329.380,132.000 329.600 C 132.000 329.820,132.450 330.000,133.000 330.000 C 133.550 330.000,134.000 330.180,134.000 330.400 C 134.000 330.620,134.349 330.800,134.776 330.800 C 135.203 330.800,135.664 330.980,135.800 331.200 C 135.936 331.420,136.476 331.600,137.000 331.600 C 137.524 331.600,138.064 331.780,138.200 332.000 C 138.336 332.220,138.887 332.400,139.424 332.400 C 139.961 332.400,140.400 332.580,140.400 332.800 C 140.400 333.020,140.745 333.200,141.168 333.200 C 141.590 333.200,142.445 333.465,143.068 333.789 C 146.169 335.404,153.766 338.101,154.145 337.722 C 154.247 337.619,154.752 337.764,155.266 338.043 C 155.780 338.322,156.470 338.589,156.800 338.635 C 157.130 338.682,158.444 339.008,159.720 339.360 C 160.995 339.712,162.714 340.000,163.540 340.000 C 164.365 340.000,165.214 340.174,165.427 340.387 C 165.639 340.599,166.409 340.818,167.137 340.874 C 167.865 340.929,168.548 341.115,168.654 341.287 C 168.760 341.459,169.726 341.600,170.800 341.600 C 171.874 341.600,172.864 341.780,173.000 342.000 C 173.136 342.220,174.137 342.400,175.224 342.400 C 176.311 342.400,177.200 342.580,177.200 342.800 C 177.200 343.022,178.259 343.200,179.576 343.200 C 180.883 343.200,182.064 343.380,182.200 343.600 C 182.336 343.820,183.866 344.000,185.600 344.000 C 187.334 344.000,188.864 344.180,189.000 344.400 C 189.142 344.630,191.263 344.800,194.000 344.800 C 196.737 344.800,198.858 344.970,199.000 345.200 C 199.337 345.745,223.463 345.745,223.800 345.200 C 223.943 344.969,226.111 344.800,228.944 344.800 C 231.637 344.800,234.011 344.638,234.220 344.441 C 234.429 344.243,235.860 343.974,237.400 343.842 C 242.215 343.432,244.187 343.135,244.580 342.761 C 244.789 342.563,246.184 342.400,247.680 342.400 C 249.176 342.400,250.400 342.237,250.400 342.039 C 250.400 341.840,251.255 341.580,252.300 341.461 C 256.119 341.028,257.204 340.826,257.994 340.403 C 258.437 340.166,258.800 340.049,258.800 340.143 C 258.800 340.238,259.565 340.139,260.500 339.924 C 261.435 339.709,262.470 339.472,262.800 339.397 C 263.130 339.322,264.210 338.958,265.200 338.587 C 266.190 338.217,267.360 337.860,267.800 337.795 C 268.240 337.729,269.110 337.477,269.734 337.235 C 270.357 336.993,271.020 336.889,271.206 337.004 C 271.392 337.119,271.658 337.030,271.796 336.807 C 271.934 336.583,272.399 336.400,272.829 336.400 C 273.618 336.400,273.918 336.281,276.328 335.018 C 277.058 334.635,277.758 334.424,277.883 334.549 C 278.007 334.674,278.608 334.422,279.217 333.988 C 279.825 333.555,280.613 333.200,280.967 333.200 C 281.321 333.200,281.968 333.020,282.405 332.800 C 282.842 332.580,283.558 332.220,283.995 332.000 C 284.432 331.780,285.141 331.600,285.571 331.600 C 286.001 331.600,286.464 331.420,286.600 331.200 C 286.736 330.980,287.197 330.800,287.624 330.800 C 288.051 330.800,288.400 330.620,288.400 330.400 C 288.400 330.180,288.760 330.000,289.200 330.000 C 289.640 330.000,290.000 329.820,290.000 329.600 C 290.000 329.380,290.540 329.200,291.200 329.200 C 291.860 329.200,292.400 329.020,292.400 328.800 C 292.400 328.580,292.760 328.400,293.200 328.400 C 293.640 328.400,294.000 328.220,294.000 328.000 C 294.000 327.780,294.360 327.600,294.800 327.600 C 295.240 327.600,295.600 327.420,295.600 327.200 C 295.600 326.980,295.960 326.800,296.400 326.800 C 296.840 326.800,297.200 326.620,297.200 326.400 C 297.200 326.180,297.560 326.000,298.000 326.000 C 298.440 326.000,298.800 325.820,298.800 325.600 C 298.800 325.380,299.267 325.200,299.838 325.200 C 300.409 325.200,301.354 324.864,301.938 324.452 C 302.522 324.041,303.398 323.581,303.885 323.430 C 304.372 323.279,306.062 322.446,307.640 321.578 C 309.219 320.710,310.756 320.000,311.055 320.000 C 311.355 320.000,311.605 319.865,311.611 319.700 C 311.617 319.535,312.607 318.951,313.811 318.403 C 315.015 317.855,316.000 317.270,316.000 317.103 C 316.000 316.936,316.248 316.800,316.551 316.800 C 316.854 316.800,317.337 316.517,317.624 316.171 C 317.911 315.825,318.789 315.212,319.573 314.809 C 320.358 314.407,321.540 313.610,322.200 313.039 C 322.860 312.468,323.625 312.001,323.900 312.000 C 324.175 312.000,324.400 311.820,324.400 311.600 C 324.400 311.380,324.678 311.200,325.018 311.200 C 325.358 311.200,326.073 310.763,326.607 310.229 C 327.141 309.695,328.123 308.936,328.789 308.543 C 329.455 308.149,330.000 307.686,330.000 307.514 C 330.000 307.341,330.225 307.199,330.500 307.198 C 330.775 307.197,331.575 306.657,332.278 305.998 C 332.981 305.339,333.675 304.800,333.821 304.800 C 334.125 304.800,336.271 303.076,340.761 299.225 C 341.290 298.771,341.831 298.400,341.963 298.400 C 342.095 298.400,343.242 297.410,344.511 296.200 C 345.780 294.990,346.917 294.000,347.036 294.000 C 347.381 294.000,359.600 282.136,359.600 281.801 C 359.600 281.734,360.185 281.062,360.900 280.307 C 361.615 279.552,363.010 277.985,364.000 276.824 C 364.990 275.663,366.385 274.087,367.100 273.322 C 367.815 272.557,368.400 271.800,368.400 271.640 C 368.400 271.481,368.959 270.821,369.641 270.175 C 370.324 269.529,371.518 268.010,372.295 266.800 C 373.071 265.590,373.827 264.510,373.974 264.400 C 374.122 264.290,375.043 263.030,376.021 261.600 C 376.999 260.170,377.902 258.910,378.026 258.800 C 378.462 258.416,380.800 254.853,380.800 254.575 C 380.800 254.420,381.129 254.003,381.530 253.647 C 381.932 253.291,382.516 252.415,382.828 251.700 C 383.140 250.985,383.503 250.400,383.635 250.400 C 383.766 250.400,384.305 249.545,384.832 248.500 C 385.358 247.455,385.907 246.510,386.052 246.400 C 386.350 246.173,391.239 236.488,392.059 234.500 C 392.354 233.785,392.731 233.200,392.898 233.200 C 393.064 233.200,393.200 232.840,393.200 232.400 C 393.200 231.960,393.380 231.600,393.600 231.600 C 393.820 231.600,394.000 231.161,394.000 230.624 C 394.000 230.087,394.180 229.536,394.400 229.400 C 394.620 229.264,394.800 228.803,394.800 228.376 C 394.800 227.949,394.980 227.600,395.200 227.600 C 395.420 227.600,395.600 227.240,395.600 226.800 C 395.600 226.360,395.780 226.000,396.000 226.000 C 396.220 226.000,396.400 225.550,396.400 225.000 C 396.400 224.450,396.580 224.000,396.800 224.000 C 397.020 224.000,397.200 223.728,397.200 223.395 C 397.200 223.062,397.380 222.432,397.600 221.995 C 397.820 221.558,398.164 220.868,398.365 220.462 C 399.152 218.869,399.048 216.219,398.192 216.065 C 397.756 215.987,397.229 215.760,397.020 215.561 C 396.811 215.363,396.316 215.200,395.920 215.200 C 395.524 215.200,395.200 215.020,395.200 214.800 C 395.200 214.580,394.879 214.400,394.487 214.400 C 394.095 214.400,391.350 213.444,388.387 212.276 C 385.424 211.107,382.190 209.900,381.200 209.592 C 380.210 209.285,379.281 208.862,379.136 208.652 C 378.864 208.258,377.600 209.264,377.600 209.874 C 377.600 210.268,375.294 216.166,374.031 219.000 C 348.571 276.155,291.615 316.523,228.400 322.218 C 197.678 324.986,167.758 320.132,138.000 307.555 C 92.040 288.128,52.152 243.143,39.972 197.000 C 37.916 189.213,37.872 189.027,36.682 183.200 C 35.620 178.004,34.765 172.110,34.001 164.732 C 33.478 159.681,33.485 140.378,34.012 135.114 C 35.175 123.501,37.407 111.987,40.472 101.800 C 42.478 95.132,46.230 85.073,48.022 81.559 L 48.756 80.118 45.070 78.659 C 43.043 77.856,41.073 77.200,40.692 77.200 C 40.311 77.200,40.000 77.020,40.000 76.800 C 40.000 76.580,39.550 76.400,39.000 76.400 C 38.450 76.400,38.000 76.220,38.000 76.000 C 38.000 75.780,37.460 75.600,36.800 75.600 C 36.140 75.600,35.600 75.420,35.600 75.200 C 35.600 74.980,35.238 74.800,34.795 74.800 C 34.352 74.800,33.632 74.620,33.195 74.400 C 32.758 74.180,32.042 73.820,31.605 73.600 C 31.168 73.380,30.448 73.200,30.005 73.200 C 29.562 73.200,29.200 73.020,29.200 72.800 C 29.200 72.202,26.402 72.301,26.391 72.900 "
        stroke="none"
        fill="#5c943c"
        fillRule="evenodd"
      ></path>
      <path
        id="path1"
        d="M48.052 81.500 C 44.188 89.079,38.525 106.921,36.467 118.000 C 34.227 130.059,33.600 137.069,33.600 150.046 C 33.600 164.836,34.472 172.992,37.637 187.800 C 37.930 189.175,38.530 191.536,39.972 197.000 C 52.152 243.143,92.040 288.128,138.000 307.555 C 154.685 314.607,168.023 318.464,183.740 320.782 C 262.060 332.330,335.945 294.562,371.118 225.000 C 374.168 218.968,377.600 210.868,377.600 209.703 C 377.600 209.426,377.780 209.200,378.000 209.200 C 378.220 209.200,378.400 209.020,378.400 208.800 C 378.400 208.580,378.051 208.400,377.624 208.400 C 377.197 208.400,376.736 208.220,376.600 208.000 C 376.464 207.780,376.003 207.600,375.576 207.600 C 375.149 207.600,374.800 207.420,374.800 207.200 C 374.800 206.980,374.361 206.800,373.824 206.800 C 373.287 206.800,372.736 206.620,372.600 206.400 C 372.464 206.180,372.001 206.000,371.571 206.000 C 371.141 206.000,370.477 205.843,370.095 205.650 C 367.002 204.092,365.824 203.600,365.186 203.600 C 364.780 203.600,364.336 203.420,364.200 203.200 C 364.064 202.980,363.513 202.800,362.976 202.800 C 362.439 202.800,362.000 202.664,362.000 202.497 C 362.000 202.146,359.151 201.200,358.092 201.200 C 357.552 201.200,356.986 202.177,355.837 205.091 C 342.621 238.597,315.508 267.735,282.000 284.443 C 274.330 288.268,262.746 292.959,257.400 294.406 C 256.740 294.585,255.210 295.003,254.000 295.335 C 245.811 297.586,240.919 298.573,233.000 299.572 C 231.240 299.795,228.180 300.194,226.200 300.460 C 221.332 301.115,200.622 301.112,195.200 300.456 C 185.628 299.298,179.196 298.162,172.272 296.406 C 83.758 273.955,34.520 183.956,64.601 99.600 C 65.189 97.950,65.924 96.015,66.235 95.300 C 66.546 94.585,67.088 93.325,67.441 92.500 C 68.697 89.560,68.994 89.106,69.892 88.765 C 70.391 88.575,70.800 88.315,70.800 88.186 C 70.800 88.058,70.629 88.058,70.421 88.187 C 70.212 88.316,69.098 87.967,67.946 87.411 C 66.793 86.855,65.560 86.400,65.205 86.400 C 64.850 86.400,64.385 86.225,64.171 86.011 C 63.958 85.798,63.427 85.555,62.991 85.472 C 61.403 85.168,58.400 83.880,58.400 83.502 C 58.400 83.336,57.849 83.200,57.176 83.200 C 56.463 83.200,56.056 83.033,56.200 82.800 C 56.336 82.580,56.074 82.400,55.618 82.400 C 55.162 82.400,54.477 82.241,54.095 82.047 C 53.713 81.852,52.860 81.471,52.200 81.200 C 51.540 80.929,50.687 80.548,50.305 80.353 C 49.162 79.772,48.852 79.930,48.052 81.500 M104.800 102.435 C 104.800 102.636,105.190 102.800,105.667 102.800 C 106.143 102.800,106.408 102.675,106.255 102.522 C 105.823 102.089,104.800 102.029,104.800 102.435 M108.800 104.000 C 108.800 104.220,109.171 104.400,109.624 104.400 C 110.077 104.400,110.336 104.220,110.200 104.000 C 110.064 103.780,109.693 103.600,109.376 103.600 C 109.059 103.600,108.800 103.780,108.800 104.000 "
        stroke="none"
        fill="#f7e8b0"
        fillRule="evenodd"
      ></path>
      <path
        id="path2"
        d="M69.778 88.812 C 68.989 89.104,68.699 89.564,67.393 92.600 C 67.015 93.480,66.472 94.740,66.188 95.400 C 65.903 96.060,65.189 97.950,64.601 99.600 C 34.520 183.956,83.758 273.955,172.272 296.406 C 179.196 298.162,185.628 299.298,195.200 300.456 C 200.622 301.112,221.332 301.115,226.200 300.460 C 228.180 300.194,231.240 299.795,233.000 299.572 C 240.919 298.573,245.811 297.586,254.000 295.335 C 255.210 295.003,256.740 294.585,257.400 294.406 C 262.746 292.959,274.330 288.268,282.000 284.443 C 315.487 267.746,342.346 238.907,355.803 205.200 C 356.638 203.110,357.608 201.181,357.960 200.913 C 358.523 200.484,358.492 200.424,357.700 200.413 C 357.205 200.406,356.800 200.220,356.800 200.000 C 356.800 199.780,356.451 199.600,356.024 199.600 C 355.597 199.600,355.136 199.420,355.000 199.200 C 354.864 198.980,354.313 198.800,353.776 198.800 C 353.239 198.800,352.800 198.620,352.800 198.400 C 352.800 198.180,352.485 197.994,352.100 197.988 C 351.715 197.981,350.680 197.532,349.800 196.990 C 348.920 196.448,347.795 196.003,347.300 196.002 C 346.805 196.001,346.400 195.840,346.400 195.643 C 346.400 195.354,345.499 194.969,344.000 194.618 C 343.890 194.593,343.415 194.357,342.945 194.096 C 342.474 193.834,341.529 193.577,340.845 193.525 C 340.160 193.473,339.600 193.332,339.600 193.213 C 339.600 193.093,339.015 192.760,338.300 192.471 C 337.585 192.183,336.687 191.779,336.305 191.574 C 335.923 191.368,335.330 191.200,334.986 191.200 C 334.642 191.200,333.616 190.840,332.706 190.400 C 331.795 189.960,330.814 189.600,330.525 189.600 C 330.236 189.600,330.000 189.420,330.000 189.200 C 330.000 188.980,329.460 188.800,328.800 188.800 C 328.140 188.800,327.600 188.620,327.600 188.400 C 327.600 188.180,327.060 188.000,326.400 188.000 C 325.740 188.000,325.200 187.864,325.200 187.698 C 325.200 187.307,323.088 186.372,322.024 186.292 C 321.571 186.258,321.200 186.088,321.200 185.915 C 321.200 185.742,320.840 185.600,320.400 185.600 C 319.960 185.600,319.600 185.420,319.600 185.200 C 319.600 184.980,319.150 184.800,318.600 184.800 C 318.050 184.800,317.600 184.620,317.600 184.400 C 317.600 184.180,317.060 184.000,316.400 184.000 C 315.740 184.000,315.200 183.820,315.200 183.600 C 315.200 183.380,314.840 183.200,314.400 183.200 C 313.960 183.200,313.600 183.020,313.600 182.800 C 313.600 182.580,313.060 182.400,312.400 182.400 C 311.740 182.400,311.200 182.220,311.200 182.000 C 311.200 181.780,310.851 181.600,310.424 181.600 C 309.997 181.600,309.558 181.456,309.449 181.279 C 309.340 181.103,308.339 180.710,307.225 180.407 C 306.111 180.104,305.200 179.747,305.200 179.615 C 305.200 179.483,304.345 179.129,303.300 178.829 C 302.255 178.529,301.220 178.145,301.000 177.976 C 300.780 177.807,300.465 177.655,300.299 177.639 C 298.506 177.463,296.800 177.029,296.800 176.749 C 296.800 176.557,296.350 176.400,295.800 176.400 C 295.250 176.400,294.800 176.220,294.800 176.000 C 294.800 175.780,294.440 175.600,294.000 175.600 C 293.560 175.600,293.200 175.420,293.200 175.200 C 293.200 174.980,292.660 174.800,292.000 174.800 C 291.340 174.800,290.800 174.620,290.800 174.400 C 290.800 174.180,290.451 174.000,290.024 174.000 C 289.597 174.000,289.136 173.820,289.000 173.600 C 288.864 173.380,288.303 173.200,287.753 173.200 C 287.188 173.200,286.860 173.026,287.000 172.800 C 287.144 172.567,286.737 172.400,286.024 172.400 C 285.351 172.400,284.800 172.220,284.800 172.000 C 284.800 171.780,284.249 171.600,283.576 171.600 C 282.863 171.600,282.456 171.433,282.600 171.200 C 282.740 170.973,282.404 170.800,281.824 170.800 C 281.261 170.800,280.800 170.620,280.800 170.400 C 280.800 170.180,280.260 170.000,279.600 170.000 C 278.940 170.000,278.400 169.820,278.400 169.600 C 278.400 169.380,278.128 169.200,277.795 169.200 C 277.462 169.200,276.832 169.020,276.395 168.800 C 275.958 168.580,275.242 168.220,274.805 168.000 C 274.368 167.780,273.744 167.600,273.418 167.600 C 273.091 167.600,272.183 167.240,271.400 166.800 C 270.617 166.360,269.621 166.000,269.188 166.000 C 268.755 166.000,268.400 165.820,268.400 165.600 C 268.400 165.380,267.925 165.200,267.344 165.200 C 266.763 165.200,266.088 164.928,265.844 164.595 C 265.600 164.263,265.040 163.919,264.600 163.831 C 264.160 163.744,263.260 163.387,262.600 163.038 C 261.940 162.690,261.010 162.404,260.533 162.402 C 260.057 162.401,259.603 162.210,259.526 161.978 C 259.449 161.746,259.119 161.513,258.793 161.459 C 258.467 161.405,257.837 161.161,257.393 160.916 C 256.949 160.671,255.914 160.345,255.093 160.191 C 254.272 160.037,253.600 159.751,253.600 159.555 C 253.600 159.360,253.161 159.200,252.624 159.200 C 252.087 159.200,251.536 159.020,251.400 158.800 C 251.264 158.580,250.703 158.400,250.153 158.400 C 249.588 158.400,249.260 158.226,249.400 158.000 C 249.536 157.780,249.274 157.600,248.818 157.600 C 248.362 157.600,247.677 157.443,247.295 157.250 C 244.189 155.686,243.021 155.200,242.362 155.200 C 241.943 155.200,241.600 155.020,241.600 154.800 C 241.600 154.580,241.285 154.397,240.900 154.394 C 240.045 154.387,237.869 153.626,236.039 152.693 C 235.290 152.312,234.255 152.000,233.739 152.000 C 233.222 152.000,232.800 151.820,232.800 151.600 C 232.800 151.380,232.350 151.200,231.800 151.200 C 231.250 151.200,230.800 151.020,230.800 150.800 C 230.800 150.580,230.440 150.400,230.000 150.400 C 229.560 150.400,229.200 150.220,229.200 150.000 C 229.200 149.780,228.660 149.600,228.000 149.600 C 227.340 149.600,226.800 149.453,226.800 149.272 C 226.800 149.092,225.889 148.696,224.775 148.393 C 223.661 148.090,222.660 147.697,222.551 147.521 C 222.442 147.344,222.003 147.200,221.576 147.200 C 221.149 147.200,220.800 147.020,220.800 146.800 C 220.800 146.580,220.475 146.400,220.078 146.400 C 219.680 146.400,217.793 145.770,215.884 145.000 C 213.974 144.230,212.060 143.600,211.629 143.600 C 211.199 143.600,210.736 143.420,210.600 143.200 C 210.464 142.980,210.003 142.800,209.576 142.800 C 209.149 142.800,208.800 142.620,208.800 142.400 C 208.800 142.180,208.260 142.000,207.600 142.000 C 206.940 142.000,206.400 141.820,206.400 141.600 C 206.400 141.380,206.128 141.200,205.795 141.200 C 205.462 141.200,204.832 141.020,204.395 140.800 C 203.958 140.580,203.242 140.220,202.805 140.000 C 202.368 139.780,201.648 139.600,201.205 139.600 C 200.762 139.600,200.400 139.420,200.400 139.200 C 200.400 138.980,199.860 138.800,199.200 138.800 C 198.540 138.800,198.000 138.620,198.000 138.400 C 198.000 138.180,197.449 138.000,196.776 138.000 C 196.063 138.000,195.656 137.833,195.800 137.600 C 195.940 137.373,195.604 137.200,195.024 137.200 C 194.461 137.200,194.000 137.020,194.000 136.800 C 194.000 136.580,193.460 136.400,192.800 136.400 C 192.140 136.400,191.600 136.220,191.600 136.000 C 191.600 135.780,191.240 135.600,190.800 135.600 C 190.360 135.600,190.000 135.420,190.000 135.200 C 190.000 134.980,189.550 134.800,189.000 134.800 C 188.450 134.800,188.000 134.620,188.000 134.400 C 188.000 134.180,187.550 134.000,187.000 134.000 C 186.450 134.000,186.000 133.820,186.000 133.600 C 186.000 133.380,185.565 133.200,185.033 133.200 C 184.502 133.200,184.007 133.022,183.933 132.803 C 183.860 132.585,183.305 132.366,182.700 132.316 C 182.095 132.266,181.600 132.085,181.600 131.913 C 181.600 131.741,181.240 131.600,180.800 131.600 C 180.360 131.600,180.000 131.409,180.000 131.176 C 180.000 130.943,179.835 130.855,179.632 130.980 C 179.430 131.105,179.001 130.944,178.680 130.623 C 178.358 130.301,177.974 130.159,177.826 130.307 C 177.678 130.456,177.406 130.333,177.222 130.036 C 177.038 129.738,176.553 129.468,176.144 129.436 C 175.735 129.404,174.635 128.973,173.700 128.480 C 172.765 127.987,172.000 127.713,172.000 127.872 C 172.000 128.030,171.784 127.944,171.520 127.680 C 171.256 127.416,170.536 127.200,169.920 127.200 C 169.304 127.200,168.800 127.020,168.800 126.800 C 168.800 126.580,168.339 126.400,167.776 126.400 C 167.196 126.400,166.860 126.227,167.000 126.000 C 167.136 125.780,166.964 125.600,166.617 125.600 C 165.629 125.600,162.800 124.639,162.800 124.303 C 162.800 124.136,162.440 124.000,162.000 124.000 C 161.560 124.000,161.200 123.820,161.200 123.600 C 161.200 123.380,160.660 123.200,160.000 123.200 C 159.340 123.200,158.800 123.020,158.800 122.800 C 158.800 122.580,158.528 122.400,158.195 122.400 C 157.862 122.400,157.277 122.241,156.895 122.047 C 156.513 121.852,155.660 121.471,155.000 121.200 C 154.340 120.929,153.487 120.548,153.105 120.353 C 152.723 120.159,152.138 120.000,151.805 120.000 C 151.472 120.000,151.200 119.820,151.200 119.600 C 151.200 119.380,150.660 119.200,150.000 119.200 C 149.340 119.200,148.800 119.020,148.800 118.800 C 148.800 118.580,148.260 118.400,147.600 118.400 C 146.940 118.400,146.400 118.220,146.400 118.000 C 146.400 117.780,146.040 117.600,145.600 117.600 C 145.160 117.600,144.800 117.420,144.800 117.200 C 144.800 116.980,144.260 116.800,143.600 116.800 C 142.940 116.800,142.400 116.620,142.400 116.400 C 142.400 116.180,142.040 116.000,141.600 116.000 C 141.160 116.000,140.800 115.858,140.800 115.685 C 140.800 115.512,140.218 115.326,139.507 115.272 C 138.795 115.217,138.039 114.999,137.827 114.787 C 137.614 114.574,137.116 114.400,136.720 114.400 C 136.324 114.400,136.000 114.220,136.000 114.000 C 136.000 113.780,135.565 113.600,135.033 113.600 C 134.502 113.600,134.007 113.422,133.933 113.203 C 133.860 112.985,133.305 112.766,132.700 112.716 C 132.095 112.666,131.600 112.485,131.600 112.313 C 131.600 112.141,131.276 112.000,130.880 112.000 C 130.484 112.000,129.989 111.835,129.780 111.633 C 129.571 111.432,129.040 111.207,128.600 111.133 C 128.160 111.060,127.709 110.880,127.597 110.734 C 127.486 110.587,126.586 110.348,125.597 110.203 C 124.609 110.057,123.740 109.772,123.667 109.569 C 123.593 109.366,123.278 109.200,122.967 109.200 C 122.655 109.200,122.400 109.020,122.400 108.800 C 122.400 108.580,121.669 108.400,120.776 108.400 C 119.796 108.400,119.251 108.242,119.400 108.000 C 119.545 107.766,119.130 107.600,118.400 107.600 C 117.670 107.600,117.255 107.434,117.400 107.200 C 117.545 106.966,117.130 106.800,116.400 106.800 C 115.670 106.800,115.255 106.634,115.400 106.400 C 115.536 106.180,115.287 106.000,114.847 106.000 C 114.407 106.000,113.936 105.820,113.800 105.600 C 113.664 105.380,113.013 105.200,112.353 105.200 C 111.655 105.200,111.256 105.033,111.400 104.800 C 111.547 104.562,111.071 104.400,110.224 104.400 C 109.441 104.400,108.800 104.220,108.800 104.000 C 108.800 103.780,108.305 103.597,107.700 103.594 C 106.843 103.589,106.732 103.502,107.200 103.200 C 107.650 102.909,107.447 102.811,106.388 102.806 C 105.440 102.802,104.787 102.537,104.400 102.000 C 103.824 101.200,102.933 100.844,103.400 101.600 C 103.536 101.820,103.356 102.000,103.000 102.000 C 102.644 102.000,102.464 101.820,102.600 101.600 C 102.745 101.366,102.330 101.200,101.600 101.200 C 100.870 101.200,100.455 101.034,100.600 100.800 C 100.744 100.567,100.337 100.400,99.624 100.400 C 98.951 100.400,98.400 100.220,98.400 100.000 C 98.400 99.780,97.950 99.600,97.400 99.600 C 96.850 99.600,96.400 99.420,96.400 99.200 C 96.400 98.980,95.950 98.800,95.400 98.800 C 94.850 98.800,94.400 98.620,94.400 98.400 C 94.400 98.180,93.950 98.000,93.400 98.000 C 92.769 98.000,92.400 97.774,92.400 97.387 C 92.400 96.805,91.915 96.470,90.731 96.231 C 90.439 96.173,89.210 95.648,88.000 95.066 C 86.790 94.484,85.530 94.005,85.200 94.001 C 84.870 93.998,84.099 93.734,83.487 93.414 C 82.875 93.095,82.480 93.006,82.610 93.217 C 82.741 93.428,82.657 93.600,82.424 93.600 C 82.191 93.600,82.000 93.420,82.000 93.200 C 82.000 92.980,81.505 92.797,80.900 92.794 C 80.043 92.789,79.932 92.702,80.400 92.400 C 80.885 92.086,80.828 92.011,80.100 92.006 C 79.605 92.003,79.200 91.820,79.200 91.600 C 79.200 91.380,79.009 91.200,78.776 91.200 C 78.543 91.200,78.464 91.380,78.600 91.600 C 78.736 91.820,78.657 92.000,78.424 92.000 C 78.191 92.000,78.000 91.820,78.000 91.600 C 78.000 91.380,77.629 91.200,77.176 91.200 C 76.723 91.200,76.464 91.020,76.600 90.800 C 76.749 90.558,76.204 90.400,75.224 90.400 C 74.331 90.400,73.600 90.220,73.600 90.000 C 73.600 89.780,73.139 89.600,72.576 89.600 C 72.013 89.600,71.651 89.440,71.772 89.245 C 72.078 88.751,70.734 88.459,69.778 88.812 M111.474 145.980 C 114.716 147.956,113.931 155.240,110.008 159.600 C 109.513 160.150,108.829 161.018,108.489 161.530 C 106.912 163.897,101.980 166.176,100.123 165.395 C 94.127 162.874,99.968 148.625,108.200 145.691 C 109.879 145.092,110.042 145.107,111.474 145.980 M179.230 157.833 C 183.433 162.312,174.774 176.800,167.893 176.800 C 163.720 176.800,162.977 172.001,166.168 165.664 C 169.659 158.731,176.323 154.736,179.230 157.833 M130.070 190.309 C 134.705 195.440,134.961 207.298,130.511 210.798 C 127.267 213.350,123.204 208.981,121.995 201.640 C 120.512 192.636,125.654 185.420,130.070 190.309 M182.255 202.027 C 187.477 204.554,192.641 214.034,191.190 218.429 C 189.188 224.495,180.866 220.406,176.732 211.325 C 173.428 204.069,176.342 199.164,182.255 202.027 M229.431 211.797 C 233.451 214.863,235.040 225.094,232.361 230.668 C 229.892 235.806,224.888 233.993,222.790 227.200 C 219.848 217.674,224.127 207.751,229.431 211.797 M289.726 212.865 C 291.489 213.804,292.370 218.151,291.234 220.305 C 291.032 220.687,290.582 221.656,290.234 222.459 C 286.926 230.086,277.816 234.672,275.370 229.942 C 272.244 223.897,284.057 209.846,289.726 212.865 M178.555 245.983 C 185.122 248.480,175.794 265.200,167.833 265.200 C 163.595 265.200,162.707 261.330,165.581 255.393 C 168.744 248.857,174.718 244.524,178.555 245.983 M260.914 257.664 C 265.992 261.211,270.022 270.333,268.398 274.604 C 265.973 280.982,256.305 274.131,253.836 264.284 C 252.225 257.863,256.062 254.274,260.914 257.664 "
        stroke="none"
        fill="#db2c44"
        fillRule="evenodd"
      ></path>
      <path
        id="path3"
        d="M108.797 146.403 C 106.789 146.955,105.283 148.003,103.084 150.378 C 95.563 158.502,97.115 169.025,105.031 163.578 C 112.932 158.142,115.937 144.439,108.797 146.403 M174.461 157.878 C 168.984 159.814,163.110 170.442,165.260 174.526 C 168.559 180.795,180.944 167.892,179.421 159.772 C 179.190 158.542,177.262 156.966,176.313 157.232 C 176.251 157.249,175.417 157.540,174.461 157.878 M126.149 189.598 C 121.570 191.427,121.422 204.942,125.933 209.453 C 127.429 210.949,128.871 211.186,130.316 210.174 C 136.005 206.189,132.159 187.197,126.149 189.598 M177.210 202.390 C 175.450 204.150,175.637 207.505,177.731 211.731 C 182.287 220.924,190.672 223.882,190.566 216.258 C 190.463 208.836,180.799 198.801,177.210 202.390 M224.818 212.781 C 219.262 218.729,224.752 237.086,230.666 232.333 C 232.771 230.641,233.889 221.704,232.458 218.000 C 230.122 211.950,227.358 210.062,224.818 212.781 M285.000 214.149 C 276.982 217.922,272.248 231.340,278.938 231.331 C 285.348 231.323,294.082 218.046,290.218 214.182 C 288.981 212.944,287.578 212.936,285.000 214.149 M398.800 217.624 C 398.800 218.077,398.980 218.336,399.200 218.200 C 399.420 218.064,399.600 217.693,399.600 217.376 C 399.600 217.059,399.420 216.800,399.200 216.800 C 398.980 216.800,398.800 217.171,398.800 217.624 M173.697 247.427 C 167.508 250.510,162.200 261.324,165.544 264.035 C 169.815 267.496,179.746 257.920,179.787 250.300 C 179.808 246.416,177.711 245.426,173.697 247.427 M255.048 258.100 C 251.772 263.274,258.992 276.400,265.114 276.400 C 268.896 276.400,269.073 269.407,265.436 263.654 C 261.940 258.125,256.780 255.366,255.048 258.100 M369.375 270.500 L 368.200 271.800 369.500 270.625 C 370.215 269.979,370.800 269.394,370.800 269.325 C 370.800 269.016,370.470 269.288,369.375 270.500 M162.433 340.143 C 162.850 340.502,165.597 340.719,165.385 340.376 C 165.257 340.169,164.503 340.000,163.710 340.000 C 162.916 340.000,162.342 340.065,162.433 340.143 "
        stroke="none"
        fill="#090405"
        fillRule="evenodd"
      ></path>
      <path
        id="path4"
        d="M108.200 145.691 C 99.968 148.625,94.127 162.874,100.123 165.395 C 101.980 166.176,106.912 163.897,108.489 161.530 C 108.829 161.018,109.513 160.150,110.008 159.600 C 113.931 155.240,114.716 147.956,111.474 145.980 C 110.042 145.107,109.879 145.092,108.200 145.691 M112.452 147.696 C 113.795 150.207,111.720 156.792,108.413 160.511 C 103.065 166.523,98.131 166.610,98.253 160.690 C 98.421 152.530,109.575 142.322,112.452 147.696 M173.200 157.664 C 168.023 160.648,163.203 169.554,164.386 173.949 C 165.996 179.928,174.393 175.990,178.725 167.226 C 182.349 159.894,179.096 154.265,173.200 157.664 M177.789 157.770 C 183.499 160.155,174.922 176.026,167.940 175.994 C 160.154 175.958,167.399 159.726,176.313 157.232 C 176.375 157.214,177.039 157.456,177.789 157.770 M124.464 189.998 C 121.230 193.231,120.838 201.112,123.618 207.008 C 128.977 218.376,137.093 206.216,132.294 194.009 C 130.350 189.062,127.076 187.385,124.464 189.998 M129.848 190.968 C 133.937 195.249,134.234 207.429,130.316 210.174 C 124.605 214.174,119.711 198.045,124.519 191.069 C 126.032 188.874,127.816 188.841,129.848 190.968 M176.539 202.151 C 173.573 204.702,176.392 213.509,181.782 218.535 C 187.179 223.568,192.731 221.190,191.202 214.500 C 189.232 205.878,180.629 198.633,176.539 202.151 M181.528 202.402 C 185.937 204.403,190.498 211.395,190.566 216.258 C 190.672 223.882,182.287 220.924,177.731 211.731 C 174.264 204.736,176.198 199.983,181.528 202.402 M224.753 211.978 C 220.503 215.481,220.924 227.390,225.458 231.953 C 230.308 236.833,235.084 229.910,233.424 220.404 C 232.075 212.677,228.325 209.034,224.753 211.978 M229.004 212.337 C 230.140 213.030,231.227 214.811,232.458 218.000 C 233.403 220.446,233.152 227.811,232.047 230.080 C 228.697 236.955,222.809 231.385,222.662 221.202 C 222.556 213.914,225.300 210.079,229.004 212.337 M284.887 213.270 C 278.686 216.277,273.238 225.820,275.370 229.942 C 277.816 234.672,286.926 230.086,290.234 222.459 C 290.582 221.656,291.032 220.687,291.234 220.305 C 291.765 219.298,291.659 214.710,291.087 213.965 C 289.764 212.242,287.526 211.991,284.887 213.270 M290.218 214.182 C 294.082 218.046,285.348 231.323,278.938 231.331 C 276.498 231.334,275.792 230.448,275.831 227.428 C 275.928 219.876,286.333 210.296,290.218 214.182 M175.197 245.974 C 168.101 248.132,161.208 260.444,164.982 264.218 C 168.186 267.422,175.434 263.101,179.008 255.858 C 182.319 249.148,180.476 244.368,175.197 245.974 M178.856 247.165 C 181.979 249.697,177.752 259.451,171.889 263.241 C 165.706 267.237,162.417 263.085,166.012 255.822 C 169.274 249.231,175.897 244.767,178.856 247.165 M254.725 257.525 C 252.155 260.579,253.487 266.723,257.960 272.440 C 264.284 280.524,270.989 277.523,268.009 267.942 C 265.489 259.838,257.831 253.833,254.725 257.525 M259.894 257.807 C 263.945 259.828,268.000 266.913,268.000 271.969 C 268.000 281.310,256.960 274.605,254.415 263.718 C 253.219 258.597,255.830 255.780,259.894 257.807 "
        stroke="none"
        fill="#831a27"
        fillRule="evenodd"
      ></path>
    </g>
  </svg>
);
