import React from "react";

const IconStandingUpMan = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 53.5 53.5"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <circle fill={fill} cx="26.7" cy="4.5" r="4.5" />
    <path
      fill={fill} 
      d="M28.3 11.2c-1.1-0.2-2.3-0.2-3.4 0 -7.5 0.9-9.9 9.6-9.2 16.2 0.3 2.9 4.8 2.9 4.5 0 -0.2-2.4-0.1-6 1.1-8.6 0 3.1 0 6.3 0 9.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.1 0 0.1 0 7.5 0 15-0.3 22.4 -0.1 3.3 5 3.3 5.2 0 0.2-5.9 0.3-11.7 0.3-17.6 0.2 0 0.5 0 0.7 0 0 5.9 0.1 11.7 0.3 17.6 0.1 3.3 5.3 3.3 5.2 0 -0.3-7.5-0.3-14.9-0.3-22.4 0-0.2 0-0.4-0.1-0.6 0-3.2-0.1-6.5-0.1-9.7 1.5 2.6 1.7 6.6 1.4 9.1 -0.3 2.9 4.2 2.9 4.5 0C38.7 20.6 36.1 11.7 28.3 11.2z"
    />
  </svg>
);

export default IconStandingUpMan;