import React, { useState } from "react";
import styled from "styled-components";

import CloseIconButton from "../../UI/Buttons/CloseIconButton";
import TaskItemCheckIcon from "../../UI/Icons/HomePage/TaskItemCheckIcon";
import DateIcon from "../../UI/Icons/TaskItem/DateIcon";
import InboxIcon from "../../UI/Icons/Navigation/InboxIcon";
import SelectIcon from "../../UI/Icons/TaskItem/SelectIcon";
import LabelIcon from "../../UI/Icons/TaskItem/LabelIcon";
import FlagIcon from "../../UI/Icons/TaskItem/FlagIcon";
import ClockIcon from "../../UI/Icons/TaskItem/ClockIcon";
import DotsIcon from "../../UI/Icons/TaskItem/DotsIcon";
import TaskItemButton from "../../UI/Buttons/TaskItemButton";
import UploadTaskForm from "../../UI/Forms/UploadTask/UploadTaskForm";
import SubTask from "./Tabs/SubTask";
import { Content, Tab } from "./Tabs/Tab";

export default function EditTask({ taskEditModal, setTaskEditModal, task }) {
  const [editTaskWindow, setEditTaskWindow] = useState(false);

  const [tabsState, setTabsState] = useState(0);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== tabsState) {
      setTabsState(index);
    }
  };

  const editTaskFormHandlers = {
    openEditTask: () => {
      setEditTaskWindow(true);
    },
    closeEditTask: () => {
      setEditTaskWindow(false);
    },
    id: task.id,
    title: task.title,
    description: task.description,
  };
  return (
    <>
      <ModalWrapper
        active={taskEditModal}
        onClick={() => {
          setTaskEditModal(false);
        }}
      >
        <ModalBox
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <BoxHeader>
            <InboxBtn>
              <InboxIcon />
              Inbox
            </InboxBtn>
            <CloseIconButton
              clickHandler={() => {
                setTaskEditModal(false);
              }}
            />
          </BoxHeader>
          {editTaskWindow ? (
            <UploadTaskForm
              editTask={editTaskFormHandlers}
              mode="editTask"
              cancelHendler={editTaskFormHandlers.closeEditTask}
              taskItem={task}
            />
          ) : (
            <BoxMain>
              <Checkbox>
                <StyledCheckBoxIcon>
                  <TaskItemCheckIcon />
                </StyledCheckBoxIcon>
              </Checkbox>
              <ItemContent>
                <TitleEdit onClick={editTaskFormHandlers.openEditTask}>
                  {editTaskFormHandlers.title}
                </TitleEdit>
                <DescriptionEdit onClick={editTaskFormHandlers.openEditTask}>
                  {editTaskFormHandlers.description}
                </DescriptionEdit>

                <div>
                  <TodayButton>
                    <DateIcon />
                    Today
                  </TodayButton>
                </div>
                <ItemFooter>
                  {/* Select */}
                  <TaskItemButton>
                    <SelectIcon />
                  </TaskItemButton>

                  {/* Label */}
                  <TaskItemButton>
                    <LabelIcon />
                  </TaskItemButton>

                  {/* Flag */}
                  <TaskItemButton>
                    <FlagIcon />
                  </TaskItemButton>

                  {/* Clock */}
                  <TaskItemButton>
                    <ClockIcon />
                  </TaskItemButton>

                  {/* Dots */}
                  <TaskItemButton>
                    <DotsIcon />
                  </TaskItemButton>
                </ItemFooter>
              </ItemContent>
            </BoxMain>
          )}

          <BoxTabs>
            {/* <TabsButton>Sub-tasks</TabsButton>
            <TabsButton>Coments</TabsButton>
            <TabsButton>Activity</TabsButton> */}
            <TabsButtons>
              <Tab onClick={handleClick} active={tabsState === 0} id={0}>
                Sub-tasks
              </Tab>
              <Tab onClick={handleClick} active={tabsState === 1} id={1}>
                Coments
              </Tab>
              <Tab onClick={handleClick} active={tabsState === 2} id={2}>
                Activity
              </Tab>
            </TabsButtons>
            <>
              <Content active={tabsState === 0}>
                <SubTask />
              </Content>
              <Content active={tabsState === 1}>
                <h1>Content 2</h1>
              </Content>
              <Content active={tabsState === 2}>
                <h1>Content 3</h1>
              </Content>
            </>
          </BoxTabs>
        </ModalBox>
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
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding: 32px 0;
`;

const ModalBox = styled.div`
  background-color: #fff;
  position: relative;
  width: 100%;
  max-width: 650px;
  border-radius: 10px;
  height: 100%;
  max-height: 960px;
  min-height: 400px;
  padding: 20px 24px;
`;

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const BoxMain = styled.div`
  display: flex;
`;

const InboxBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  column-gap: 10px;
  & svg {
    width: 16px;
    height: 16px;
  }
`;

const Checkbox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  position: relative;
  margin-top: 2px;
  margin-right: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    & div {
      transition: opacity 0.4s;
      opacity: 1;
    }
  }
`;

const StyledCheckBoxIcon = styled.div`
  opacity: 0;
  position: absolute;
  top: -4px;
  right: -4px;
  border-radius: 50%;
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TitleEdit = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  cursor: text;
  width: 100%;
  margin-bottom: 10px;
`;
const DescriptionEdit = styled.span`
  cursor: text;
  color: rgba(0, 0, 0, 0.4);
  font-size: 13px;
  margin-bottom: 25px;
`;

const TodayButton = styled.button`
  display: flex;
  flex-flow: row wrap;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #058527;
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 12px;
  margin-bottom: 10px;
`;

const BoxTabs = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TabsButtons = styled.div`
  display: flex;
`;
