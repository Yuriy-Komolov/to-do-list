import React, { useState } from "react";
import styled, { css } from "styled-components";
import UploadTaskForm from "../../../UI/Forms/UploadTaskForm";
import QuickDiscardWarning from "./QuickDiscardWarning";

export default function ModalQuickAddForm({ active, setActive, windowFocus }) {
  const [discartWarning, setDiscartWarning] = useState(false);
  const [checkEmptyFormTitle, setEmptyFormTitle] = useState("");

  return (
    <>
      <QuickWrapper
        onClick={() => {
          if (checkEmptyFormTitle.length !== 0) setDiscartWarning(true);
          else setActive(false);
        }}
        active={active}
      >
        <QuickAddFormInner
          onClick={(e) => {
            e.stopPropagation();
          }}
          active={active}
        >
          {/**Form----------------------------------------**/}
          <UploadTaskForm
            hadlerClick={() => {
              setActive(false);
              windowFocus.current.focus();
            }}
            mode="quickMode"
            activeForm={active}
            setDiscartWarning={setDiscartWarning}
            setEmptyTitle={setEmptyFormTitle}
          />
        </QuickAddFormInner>
      </QuickWrapper>
      <QuickDiscardWarning
        activeModalWarning={discartWarning}
        setModalWarning={setDiscartWarning}
        setWholeForm={setActive}
        setEmptyFormTitle={setEmptyFormTitle}
      />
    </>
  );
}

const QuickWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transition: 0.2s;
  ${(props) =>
    props.active
      ? css`
          transform: scale(1);
          pointer-events: all;
        `
      : css`
          transform: scale(0.4);
          pointer-events: none;
        `}
`;

const QuickAddFormInner = styled.div`
  max-width: 550px;
  width: 100%;
  box-shadow: 0 15px 50px 0 rgb(0 0 0 / 35%);
  padding: 15px;
  z-index: 2;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0)")};
  transition: 0.2s;

  & div {
    border: none;
    margin: 0;
    &:focus-within {
      border: none;
    }
  }
  & textarea {
    background-color: #fff;
  }
  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 60px;
    left: 0;
  }
`;