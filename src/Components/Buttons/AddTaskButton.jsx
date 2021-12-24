import React, {useState} from 'react';
import styled from "styled-components";

export default function AddTaskButton() {

  return (
    <>
      <StyledButton>
        <IconWrapper>
          <IconPlus/>
        </IconWrapper>
        Add Task
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  border: none;
  color: grey;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 15px 0 0 0;
  &:hover{
    color: #1e78fa;
    & div{
      background-color: #1e78fa;
    }
    & svg path{
      fill: #fff;
    }
  }
`;

const IconWrapper = styled.div`
  height: 17px;
  width: 17px;
  border-radius: 50%;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;  
  & svg{
    z-index: 2;
  }
`;

const IconPlus = () =>{
  return <svg width="13" height="13">
    <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="#1e78fa" fillRule="evenodd">
    </path>
  </svg>
}
