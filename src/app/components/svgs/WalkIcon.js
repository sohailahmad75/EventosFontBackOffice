import React from "react";

const WalkIcon = ({ size = "138", fill = "#263329" }) => {
  return (
    <svg
      id="directions_walk-24px"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 138 138"
    >
      <path
        id="Path_2192"
        data-name="Path 2192"
        d="M0,0H138V138H0Z"
        fill="none"
      />
      <path
        id="Path_2193"
        data-name="Path 2193"
        d="M49.125,24.5A11.5,11.5,0,1,0,37.625,13,11.534,11.534,0,0,0,49.125,24.5ZM27.85,44.05l-16.1,81.075H23.825l10.35-46,12.075,11.5v34.5h11.5V82L45.675,70.5l3.45-17.25A42.1,42.1,0,0,0,80.75,67.625v-11.5a28.285,28.285,0,0,1-24.725-13.8l-5.75-9.2A12.336,12.336,0,0,0,35.038,28.3L6,40.6V67.625H17.5V48.075L27.85,44.05"
        transform="translate(28.5 7.125)"
        fill={fill}
      />
    </svg>
  );
};

export default WalkIcon;
