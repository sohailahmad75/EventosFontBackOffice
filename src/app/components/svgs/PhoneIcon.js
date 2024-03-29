import React from "react";

const PhoneIcon = ({ size = "24", fill = "#263329" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="Group_441" data-name="Group 441" transform="translate(-1122 -118)">
        <path
          id="Path_2273"
          data-name="Path 2273"
          d="M0,0H24V24H0Z"
          transform="translate(1122 118)"
          fill="none"
        />
        <path
          id="Path_2274"
          data-name="Path 2274"
          d="M19.23,15.26l-2.54-.29a1.991,1.991,0,0,0-1.64.57l-1.84,1.84a15.045,15.045,0,0,1-6.59-6.59L8.47,8.94A1.991,1.991,0,0,0,9.04,7.3L8.75,4.78A2,2,0,0,0,6.76,3.01H5.03a1.985,1.985,0,0,0-2,2.07A16.992,16.992,0,0,0,18.92,20.97a1.985,1.985,0,0,0,2.07-2V17.24A1.982,1.982,0,0,0,19.23,15.26Z"
          transform="translate(1122 118)"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default PhoneIcon;
