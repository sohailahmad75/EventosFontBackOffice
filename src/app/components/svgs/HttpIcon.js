import React from "react";

const HttpIcon = ({ size = "24", fill = "#263329" }) => {
  return (
    <svg
      id="http-24px"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        id="Path_2295"
        data-name="Path 2295"
        d="M24,24H0V0H24Z"
        fill="none"
        opacity="0.87"
      />
      <path
        id="Path_2296"
        data-name="Path 2296"
        d="M4.5,11h-2V9.75a.75.75,0,0,0-1.5,0v4.5a.75.75,0,0,0,1.5,0V12.5h2v1.75a.75.75,0,0,0,1.5,0V9.75a.75.75,0,0,0-1.5,0Zm3.25-.5H8.5v3.75a.75.75,0,0,0,1.5,0V10.5h.75a.75.75,0,0,0,0-1.5h-3a.75.75,0,0,0,0,1.5Zm5.5,0H14v3.75a.75.75,0,0,0,1.5,0V10.5h.75a.75.75,0,0,0,0-1.5h-3a.75.75,0,0,0,0,1.5ZM21.5,9H19a1,1,0,0,0-1,1v4.25a.75.75,0,0,0,1.5,0V13h2A1.5,1.5,0,0,0,23,11.5v-1A1.5,1.5,0,0,0,21.5,9Zm0,2.5h-2v-1h2Z"
        fill={fill}
      />
    </svg>
  );
};

export default HttpIcon;
