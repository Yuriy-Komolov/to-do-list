import React from "react";
import styled, { css } from "styled-components";
import AddTaskButton from "../../../UI/Buttons/AddTaskButton";
import InfoIcon from "../../../UI/Icons/Header/InfoIcon";

export default function QuickDiscardWarning({
  activeModalWarning,
  setModalWarning,
  setWholeForm,
  setEmptyFormTitle,
}) {
  return (
    <>
      <ModalWrapper
        active={activeModalWarning}
        onClick={() => {
          setModalWarning(false);
        }}
      >
        <ModalContainer
          active={activeModalWarning}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Header>
            <StyledInfoIcon>
              <InfoIcon />
            </StyledInfoIcon>
            <CloseIconBtn
              onClick={() => {
                setModalWarning(false);
              }}
            />
          </Header>
          <Main>
            <p>Are you sure you want to discard your current task?</p>
          </Main>
          <Footer>
            <CancelBtn
              type="button"
              text="Cancel"
              onClick={() => {
                setModalWarning(false);
              }}
            />
            <DiscardBtn
              type="button"
              text="Discard task"
              onClick={() => {
                setWholeForm(false);
                setModalWarning(false);
                setEmptyFormTitle("");
              }}
            />
          </Footer>
        </ModalContainer>
      </ModalWrapper>
    </>
  );
}

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.1s;

  ${(props) =>
    props.active
      ? css`
          opacity: 1;
          pointer-events: all;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
`;

const ModalContainer = styled.div`
  height: 179px;
  background-color: #fff;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: ${(props) => (props.active ? "1" : "0")};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transition: 0.1s;
  pointer-events: all;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInfoIcon = styled.div`
  height: 24px;
  width: 24px;
  & svg path {
    fill: grey;
  }
`;

const CloseIconBtn = styled.span`
  height: 25px;
  width: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(20, 20, 20, 0.1);
    border-radius: 4px;
  }
  &::before,
  ::after {
    content: "";
    height: 1px;
    width: 19px;
    position: absolute;
    background-color: grey;
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
`;

const Main = styled.div`
  display: block;
  text-align: left;
  padding: 0 110px 0 8px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 10px;
`;
const CancelBtn = styled(AddTaskButton)`
  margin-top: unset;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  padding: 5px 10px;
  font-weight: 500;
  &:hover {
    color: #000;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const DiscardBtn = styled(AddTaskButton)`
  margin-top: unset;
  font-weight: 600;
`;
