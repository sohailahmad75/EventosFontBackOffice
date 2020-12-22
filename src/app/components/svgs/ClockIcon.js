import React from "react";

const ClockIcon = ({ size = "24", fill = "#263329" }) => {
  return (
    <svg
      id="schedule-24px"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        id="Path_2297"
        data-name="Path 2297"
        d="M0,0H24V24H0Z"
        fill="none"
      />
      <path
        id="Path_2298"
        data-name="Path 2298"
        d="M11.99,2A10,10,0,1,0,22,12,10,10,0,0,0,11.99,2ZM12,20a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM11.78,7h-.06a.717.717,0,0,0-.72.72v4.72a.99.99,0,0,0,.49.86l4.15,2.49a.715.715,0,1,0,.73-1.23l-3.87-2.3V7.72A.717.717,0,0,0,11.78,7Z"
        fill={fill}
      />
    </svg>
  );
};

export default ClockIcon;
