import React from "react";

const LocationIcon = ({ size = "24", fill = "#263329" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="Group_437" data-name="Group 437" transform="translate(-708 -332)">
        <path
          id="Path_2287"
          data-name="Path 2287"
          d="M0,0H24V24H0Z"
          transform="translate(708 332)"
          fill="none"
        />
        <path
          id="Path_2288"
          data-name="Path 2288"
          d="M6,20H18a1,1,0,0,1,0,2H6a1,1,0,0,1,0-2ZM12,7a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,7Zm0-5a6.968,6.968,0,0,1,7,7.15c0,2.98-2.13,6.12-6.39,9.39a.991.991,0,0,1-1.22,0Q5,13.62,5,9.15A6.968,6.968,0,0,1,12,2Z"
          transform="translate(708 332)"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default LocationIcon;
