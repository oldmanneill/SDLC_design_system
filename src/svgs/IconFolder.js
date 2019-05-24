import React from "react";

const IconFolder = ({
  fill = "#000",
  width = "100%",
  className = "",
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill={fill} d="M57.5 27H54v-6.3C54 19.2 52.8 18 51.3 18H50V0H10v2H7v2H4v7H2.7C1.2 11 0 12.2 0 13.7v43.7l0 0c0 0.6 0.2 1.1 0.5 1.6C1 59.6 1.8 60 2.6 60h44.8c1.2 0 2.2-0.8 2.4-1.8L60 30.1v-0.2C60 28.3 58.9 27 57.5 27zM51.3 20C51.7 20 52 20.3 52 20.7V27h-2v-7H51.3zM48 2v16 9H12.7c-0.2 0-0.5 0-0.7 0.1 0 0 0 0-0.1 0V2H48zM10 4v25.6l-0.1 0.2L9 32.3V4H10zM6 6h1v31.8l-1 2.7V11 6zM2 13.7C2 13.3 2.3 13 2.7 13H4v32.9l-2 5.5V13.7zM47.9 57.6C47.8 57.8 47.6 58 47.3 58H2.6c-0.2 0-0.4-0.1-0.4-0.2 -0.1-0.1-0.2-0.3-0.1-0.4L4 51.9v0l3-8.2 0 0 3-8.2v0l1.9-5.3L12 29.9l0 0 0.2-0.4 0-0.1C12.3 29.2 12.5 29 12.7 29H48h2 4 3.5c0.4 0 0.5 0.5 0.5 0.8L47.9 57.6z"/>
    <path fill={fill} d="M18 17h24c0.6 0 1-0.4 1-1s-0.4-1-1-1H18c-0.6 0-1 0.4-1 1S17.4 17 18 17z"/>
    <path fill={fill} d="M18 10h10c0.6 0 1-0.4 1-1s-0.4-1-1-1H18c-0.6 0-1 0.4-1 1S17.4 10 18 10z"/>
    <path fill={fill} d="M18 24h24c0.6 0 1-0.4 1-1s-0.4-1-1-1H18c-0.6 0-1 0.4-1 1S17.4 24 18 24z"/>
  </svg>
);

export default IconFolder;