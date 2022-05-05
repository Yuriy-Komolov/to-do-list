import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

import { primaryColor } from "../Constants";

export default function Spinner({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <SpinnerWrapper>
        <SpinnerIcon>
          <div></div>
          <div></div>
          <div></div>
        </SpinnerIcon>
      </SpinnerWrapper>
    </>
  );
}

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerIcon = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${primaryColor} transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
