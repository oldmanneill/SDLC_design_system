import React from "react";

const IconSmallUp = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 12 8"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <polygon fill={fill} points="6 0 12 8 0 8" />
  </svg>
);

export default IconSmallUp;