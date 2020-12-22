import React from "react";

const PrintIcon = ({ size = "24", fill = "#263329" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="Group_442" data-name="Group 442" transform="translate(-1122 -218)">
        <path
          id="Path_2279"
          data-name="Path 2279"
          d="M0,0H24V24H0Z"
          transform="translate(1122 218)"
          fill="none"
        />
        <path
          id="Path_2280"
          data-name="Path 2280"
          d="M19,8H5a3,3,0,0,0-3,3v4a2.006,2.006,0,0,0,2,2H6v2a2.006,2.006,0,0,0,2,2h8a2.006,2.006,0,0,0,2-2V17h2a2.006,2.006,0,0,0,2-2V11A3,3,0,0,0,19,8ZM15,19H9a1,1,0,0,1-1-1V14h8v4A1,1,0,0,1,15,19Zm4-7a1,1,0,1,1,1-1A1,1,0,0,1,19,12ZM17,3H7A1,1,0,0,0,6,4V6A1,1,0,0,0,7,7H17a1,1,0,0,0,1-1V4A1,1,0,0,0,17,3Z"
          transform="translate(1122 218)"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default PrintIcon;
