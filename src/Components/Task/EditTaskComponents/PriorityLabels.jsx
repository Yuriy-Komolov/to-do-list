import React from "react";
import styled from "styled-components";
import LabelIcon from "../../../UI/Icons/TaskItem/PriorityLabels/LabelIcon";
import { useModalboxPosition } from "../../Hooks/useModalboxPosition";
import { priority } from "../../../Constants/priorityConstants";

export default function PriorityLabels({
  actionsWindow,
  setActionsWindow,
  clickHandler,
}) {
  const boxPositon = useModalboxPosition(0.6);

  return (
    <>
      <LabelsWrapper
        active={actionsWindow}
        onClick={() => setActionsWindow({ ...actionsWindow, priority: false })}
      >
        <Container boxPositon={boxPositon}>
          <FirstLevel onClick={() => clickHandler(priority.LEVEL_ONE)}>
            <LabelIcon />
            Priority 1
          </FirstLevel>
          <SecondLevel onClick={() => clickHandler(priority.LEVEL_TWO)}>
            <LabelIcon />
            Priority 2
          </SecondLevel>
          <ThirdLevel onClick={() => clickHandler(priority.LEVEL_THREE)}>
            <LabelIcon />
            Priority 3
          </ThirdLevel>
          <DefaultItem onClick={() => clickHandler(priority.DEFAULT)}>
            <LabelIcon />
            Priority 4
          </DefaultItem>
        </Container>
      </LabelsWrapper>
    </>
  );
}
const LabelsWrapper = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  border: 1px solid red;
`;

const Container = styled.div`
  width: 275px;
  height: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
  transform: ${({ boxPositon }) => `translate(${boxPositon}px, 290px)`};
`;

const DefaultItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 10px;
  column-gap: 6px;
  border: none;
  width: 100%;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
const FirstLevel = styled(DefaultItem)`
  & svg path {
    fill: #d1453b;
    fill-rule: nonzero;
  }
`;
const SecondLevel = styled(DefaultItem)`
  & svg path {
    fill: #eb8909;
    fill-rule: nonzero;
  }
`;

const ThirdLevel = styled(DefaultItem)`
  & svg path {
    fill: #246fe0;
    fill-rule: nonzero;
  }
`;
