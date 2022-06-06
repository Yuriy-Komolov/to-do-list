import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import InboxIcon from "../../../UI/Icons/Navigation/InboxIcon";
import LabelIcon from "../../../UI/Icons/TaskItem/PriorityLabels/LabelIcon";
import TaskDateCreation from "../../Dates/TaskDateCreation";
import PriorityLabels from "./PriorityLabels";

export default function ActionsMenu({ task }) {
  const priorityInfo = task.priority;
  const [actionsWindow, setActionsWindow] = useState({
    project: false,
    priority: false,
  });

  return (
    <>
      <Container>
        <MenuItem>
          <MenuItemTitle>Project</MenuItemTitle>
          <MenuItemButton>
            <InboxIcon />
            Inbox
          </MenuItemButton>
        </MenuItem>
        <MenuItem>
          <MenuItemTitle>Due date</MenuItemTitle>
          <MenuItemButton>
            <TaskDateCreation task={task} />
          </MenuItemButton>
        </MenuItem>
        <MenuItem>
          <MenuItemTitle>Priority</MenuItemTitle>
          <LabelMenuItem
            onClick={() =>
              setActionsWindow({
                ...actionsWindow,
                priority: true,
              })
            }
            active={actionsWindow.priority}
            priorityInfo={priorityInfo}
          >
            <LabelIcon />
            {priorityInfo.name.toUpperCase()}
          </LabelMenuItem>
          <PriorityLabels
            actionsWindow={actionsWindow.priority}
            setActionsWindow={setActionsWindow}
            task={task}
          />
        </MenuItem>
      </Container>
    </>
  );
}

const Container = styled.div`
  min-width: 260px;
  height: 100%;
  overflow: auto;
  padding: 12px 24px;
  background-color: rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;
const MenuItem = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const MenuItemTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: grey;
  padding: 6px 0;
`;

const MenuItemButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 12px;
  background-color: transparent;
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 110%;
  margin-left: -12px;
  padding: 4px 6px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
  &:active {
    transition: transform 0.2s;
    transform: scale(0.97);
  }
  & svg {
    width: 18px;
    height: 18px;
  }
`;

const LabelMenuItem = styled(MenuItemButton)`
  background-color: ${({ active }) =>
    active ? "rgba(0, 0, 0, 0.06)" : "transparent"};
  & svg path {
    ${({ priorityInfo }) =>
      priorityInfo.color !== "none"
        ? css`
            fill: ${priorityInfo.color};
            fill-rule: nonzero;
          `
        : null};
  }
`;
