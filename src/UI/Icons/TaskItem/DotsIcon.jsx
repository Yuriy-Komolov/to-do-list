import React from "react";

export default function DotsIcon() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <g
          fill="none"
          stroke="grey"
          strokeLinecap="round"
          transform="translate(3 10)"
        >
          <circle cx="2" cy="2" r="2"></circle>
          <circle cx="9" cy="2" r="2"></circle>
          <circle cx="16" cy="2" r="2"></circle>
        </g>
      </svg>
    </>
  );
}
