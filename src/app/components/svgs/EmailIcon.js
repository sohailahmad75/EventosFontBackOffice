import React from "react";

const EmailIcon = ({ size = "24", fill = "#263329" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g id="Group_436" data-name="Group 436" transform="translate(-708 -218)">
        <path
          id="Path_2275"
          data-name="Path 2275"
          d="M0,0H24V24H0Z"
          transform="translate(708 218)"
          fill="none"
        />
        <path
          id="Path_2276"
          data-name="Path 2276"
          d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm-.4,4.25-7.07,4.42a1.011,1.011,0,0,1-1.06,0L4.4,8.25a.849.849,0,1,1,.9-1.44L12,11l6.7-4.19a.849.849,0,1,1,.9,1.44Z"
          transform="translate(708 218)"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default EmailIcon;
