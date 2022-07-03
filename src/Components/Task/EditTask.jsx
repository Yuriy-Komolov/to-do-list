import { useState, useMemo } from "react";
import styled, { css } from "styled-components";

import CloseIconButton from "../../UI/Buttons/CloseIconButton";
import TaskItemCheckIcon from "../../UI/Icons/HomePage/TaskItemCheckIcon";
import InboxIcon from "../../UI/Icons/Navigation/InboxIcon";
import DotsIcon from "../../UI/Icons/TaskItem/DotsIcon";
import { Line } from "../../UI/Atoms/Line";
import TaskItemButton from "../../UI/Buttons/TaskItemButton";

import ArrowIcon from "../../UI/Icons/TaskItem/ArrowIcon";
import AddTaskButton from "../../UI/Buttons/AddTaskButton";
import ActionsMenu from "./EditTaskComponents/ActionsMenu";
import EditTaskForm from "../../UI/Forms/EditTaskForm";

export default function EditTask({
  taskEditModal,
  setTaskEditModal,
  task,
  taskList,
}) {
  const [editTaskWindow, setEditTaskWindow] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(taskList.indexOf(task));
  const currentTask = useMemo(
    () => taskList.find((el, index) => index === currentTaskId),
    [currentTaskId, taskList]
  );

  const editTaskFormHandlers = {
    openEditTask: () => setEditTaskWindow(true),
    closeEditTask: () => setEditTaskWindow(false),
    id: currentTask.id,
    title: currentTask.title,
    description: currentTask.description,
  };
  return (
    <>
      <ModalWrapper
        active={taskEditModal}
        onClick={() => setTaskEditModal(false)}
      >
        <ModalBox onClick={(e) => e.stopPropagation()}>
          <BoxHeader>
            <InboxBtn>
              <InboxIcon />
              Inbox
            </InboxBtn>

            <BoxHeaderButtons>
              <PreviousTaskBtn
                hint="Previous task"
                keybord="K"
                onClick={() => setCurrentTaskId(currentTaskId - 1)}
                disabled={currentTaskId <= 0}
              >
                <ArrowIcon />
              </PreviousTaskBtn>

              <NextTaskBtn
                hint="Next Task"
                keybord="J"
                onClick={() => setCurrentTaskId(currentTaskId + 1)}
                disabled={currentTaskId >= taskList.length - 1}
              >
                <NextTaskArrow>
                  <ArrowIcon />
                </NextTaskArrow>
              </NextTaskBtn>

              <TaskItemButton hint="More actions" keybord={""}>
                <DotsIcon />
              </TaskItemButton>
              <TaskItemButton
                hint="Close modal"
                clickHandler={() => setTaskEditModal(false)}
              >
                <CloseIconButton />
              </TaskItemButton>
            </BoxHeaderButtons>
          </BoxHeader>

          <InnerContainer>
            <MainContent>
              <MainInner>
                <Checkbox priority={currentTask.priority.color}>
                  <StyledCheckBoxIcon>
                    <TaskItemCheckIcon />
                  </StyledCheckBoxIcon>
                </Checkbox>
                {editTaskWindow ? (
                  <EditTaskForm
                    taskItem={currentTask}
                    cancelHendler={editTaskFormHandlers.closeEditTask}
                  />
                ) : (
                  <ItemContent>
                    <TitleEdit onClick={editTaskFormHandlers.openEditTask}>
                      {editTaskFormHandlers.title}
                    </TitleEdit>
                    <DescriptionEdit
                      onClick={editTaskFormHandlers.openEditTask}
                    >
                      {editTaskFormHandlers.description
                        ? editTaskFormHandlers.description
                        : "Description"}
                    </DescriptionEdit>
                  </ItemContent>
                )}
              </MainInner>
              <StyledAddButton>
                <AddTaskButton text="Add sub-task" $mode="withIcon" />
              </StyledAddButton>
              <Line />
            </MainContent>
            {/* ========================= More Actions Menu =============================== */}
            <ActionsMenu task={currentTask} />
          </InnerContainer>
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
  max-width: 850px;
  border-radius: 10px;
  height: 100%;
`;

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
`;
const BoxHeaderButtons = styled.div`
  display: flex;
  column-gap: 6px;
`;
const PreviousTaskBtn = styled(TaskItemButton)`
  &:disabled {
    & svg {
      opacity: 0.4;
    }
    :hover {
      background-color: transparent;
      cursor: url("/Images/icons/block.png"), auto;
    }
  }
`;
const NextTaskBtn = styled(TaskItemButton)`
  &:disabled {
    & svg {
      opacity: 0.4;
    }
    :hover {
      background-color: transparent;
      cursor: url("/Images/icons/block.png"), auto;
    }
  }
`;
const NextTaskArrow = styled.div`
  display: flex;
  align-items: center;
  line-height: 0;
  transform: rotate(180deg);
`;

const MainContent = styled.div`
  padding: 12px 26px;
  width: 100%;
`;
const MainInner = styled.div`
  display: flex;
`;

const InnerContainer = styled.div`
  display: flex;
  height: 100%;
`;

const InboxBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  column-gap: 10px;
  cursor: pointer;
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
  ${({ priority }) =>
    priority !== "none"
      ? css`
          border: 2px solid ${priority};
          background-color: rgba(priority, 0.2);
          &:hover {
            & div {
              top: -5px;
              right: -5px;
            }
          }

          & svg path {
            fill: ${priority};
          }
        `
      : css`
          border: 1px solid rgba(0, 0, 0, 0.4);
        `}
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
  font-weight: 400;
  margin-bottom: 25px;
`;

const StyledAddButton = styled.div`
  padding: 0 0 24px 24px;
  & button {
    width: unset;
    &:hover {
      color: #000;
    }
  }
`;
