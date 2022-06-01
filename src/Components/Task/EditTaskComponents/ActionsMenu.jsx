import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InboxIcon from "../../../UI/Icons/Navigation/InboxIcon";
import Label from "../../../UI/Icons/TaskItem/PriorityLabels/Label";
import TaskDateCreation from "../../Dates/TaskDateCreation";
import PriorityLabels from "./PriorityLabels";

export default function ActionsMenu({ task }) {
  const [actionsWindow, setActionsWindow] = useState({
    project: false,
    priority: false,
  });
  console.log(actionsWindow);
  const [actions, setActions] = useState({
    priority: "P4",
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
          >
            <Label />
            {actions.priority}
          </LabelMenuItem>
          <PriorityLabels
            actionsWindow={actionsWindow.priority}
            setActionsWindow={setActionsWindow}
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
`;
const MenuItem = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid red;
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
  & svg {
    width: 18px;
    height: 18px;
  }
`;

const LabelMenuItem = styled(MenuItemButton)`
  /* & svg {
    path {
      fill-rule: nonzero;
      fill: red;
    }
  } */
`;
