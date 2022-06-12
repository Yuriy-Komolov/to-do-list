import React, { useState } from "react";
import styled, { css } from "styled-components";
import TaskItemButton from "../../Buttons/TaskItemButton";
import LabelPriorityIcon from "../../Icons/Forms/LabelPriorityIcon";
import PriorityLabels from "../../../Components/Task/EditTaskComponents/PriorityLabels";

export default function FormExstraFeatures({ taskPriority, setTaskPriority }) {
  const [actionsWindow, setActionsWindow] = useState({
    project: false,
    priority: false,
  });
  const taskPriorityHandler = (priorityInfo) => {
    setTaskPriority(priorityInfo);
  };
  return (
    <>
      <Container>
        <LabelButtonWrapper taskPriority={taskPriority}>
          <LabelMenuItem
            hint="Set the Priority "
            keybord="p1, p2, p3, p4"
            clickHandler={(e) => {
              e.preventDefault();
              setActionsWindow({ ...actionsWindow, priority: true });
            }}
          >
            <LabelPriorityIcon />
          </LabelMenuItem>
        </LabelButtonWrapper>
      </Container>
      <PriorityLabels
        actionsWindow={actionsWindow.priority}
        setActionsWindow={setActionsWindow}
        setTaskPriority={setTaskPriority}
        clickHandler={taskPriorityHandler}
      />
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LabelMenuItem = styled(TaskItemButton)``;

const LabelButtonWrapper = styled.div`
  & svg path {
    ${({ taskPriority }) =>
      taskPriority.color !== "none"
        ? css`
            fill: ${taskPriority.color};
            fill-rule: nonzero;
          `
        : null};
  }
`;
