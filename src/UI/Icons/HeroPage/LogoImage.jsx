import React from "react";
import { primaryColor } from "../../../Constants/UI.Constants";

export default function LogoImage() {
  return (
    <>
      <svg
        height="32"
        width="33"
        xmlns="http://www.w3.org/2000/svg"
        className="_1HWbT"
      >
        <mask id="td-logo_svg__a" fill="#fff">
          <path d="M0 0h32.042v32H0z" fillRule="evenodd"></path>
        </mask>
        <g fill="none" fillRule="evenodd">
          <path
            d="M4.005 0A4.014 4.014 0 000 4v24c0 2.2 1.802 4 4.005 4h24.032c2.203 0 4.005-1.8 4.005-4V4c0-2.2-1.802-4-4.005-4z"
            fill={primaryColor}
            mask="url(#td-logo_svg__a)"
          ></path>
          <g fill="#fff">
            <path d="M6.792 15.157l12.865-7.479c.275-.16.289-.653-.02-.83-.308-.178-.893-.514-1.111-.643a1.004 1.004 0 00-.991.012c-.154.09-10.433 6.06-10.776 6.256-.412.236-.92.24-1.33 0L0 9.287v2.708c1.321.778 4.607 2.71 5.403 3.165.475.27.93.264 1.389-.003"></path>
            <path d="M6.792 20.277l12.865-7.479c.275-.16.289-.653-.02-.83-.308-.178-.893-.514-1.111-.643a1.004 1.004 0 00-.991.012c-.154.09-10.433 6.06-10.776 6.256-.412.236-.92.24-1.33 0L0 14.407v2.708c1.321.778 4.607 2.71 5.403 3.165.475.27.93.264 1.389-.003"></path>
            <path d="M6.792 25.717l12.865-7.479c.275-.16.289-.653-.02-.83-.308-.178-.893-.514-1.111-.643a1.004 1.004 0 00-.991.012c-.154.09-10.433 6.06-10.776 6.256-.412.236-.92.24-1.33 0L0 19.847v2.708c1.321.778 4.607 2.71 5.403 3.165.475.27.93.264 1.389-.003"></path>
          </g>
        </g>
      </svg>
    </>
  );
}
