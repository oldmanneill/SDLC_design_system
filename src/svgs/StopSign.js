import React from "react";

const StopSign = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M7.9 0L19.1 0C19.6 0 20.1 0.2 20.5 0.6L26.4 6.5C26.8 6.9 27 7.4 27 7.9L27 19.1C27 19.6 26.8 20.1 26.4 20.5L20.5 26.4C20.1 26.8 19.6 27 19.1 27L7.9 27C7.4 27 6.9 26.8 6.5 26.4L0.6 20.5C0.2 20.1 0 19.6 0 19.1L0 7.9C0 7.4 0.2 6.9 0.6 6.5L6.5 0.6C6.9 0.2 7.4 0 7.9 0ZM15.1 16.3L15.6 6.7 12.2 6.7 12.7 16.3 15.1 16.3ZM12.1 19.6C12.1 20.1 12.3 20.5 12.6 20.8 12.9 21.1 13.3 21.3 13.9 21.3 14.4 21.3 14.8 21.1 15.1 20.8 15.4 20.5 15.6 20.1 15.6 19.6 15.6 19.1 15.4 18.7 15.1 18.4 14.8 18.1 14.4 17.9 13.9 17.9 13.3 17.9 12.9 18.1 12.6 18.4 12.3 18.6 12.1 19.1 12.1 19.6Z"    />
  </svg>
);

export default StopSign;