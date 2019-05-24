import React from "react";

const IconAlertStopSign = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 26 26"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M25.2 6.8L19.1 0.7C18.6 0.3 18 0 17.4 0L8.6 0C8 0 7.4 0.3 6.9 0.7L0.9 6.6C0.3 7.2 0 8 0 8.9L0 17.3C0 18 0.3 18.6 0.8 19.1L6.8 25.2C7.3 25.7 8 26 8.7 26L17.2 26C18 26 18.7 25.7 19.2 25.2L25 19.3C25.7 18.7 26 17.9 26 17L26 8.6C26 7.9 25.7 7.3 25.2 6.8L25.2 6.8ZM12.3 6.5C12.3 6.1 12.6 5.8 13.1 5.8 13.5 5.8 13.8 6.1 13.8 6.5L13.8 16.5C13.8 16.9 13.5 17.2 13.1 17.2 12.6 17.2 12.3 16.9 12.3 16.5L12.3 6.5 12.3 6.5ZM13.1 20.4C12.5 20.4 12.1 19.9 12.1 19.4 12.1 18.9 12.5 18.4 13.1 18.4 13.6 18.4 14 18.9 14 19.4 14 19.9 13.6 20.4 13.1 20.4L13.1 20.4Z"    />
  </svg>
);

export default IconAlertStopSign;