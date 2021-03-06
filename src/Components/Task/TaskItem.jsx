import React, { useState } from "react";
import styled, { css } from "styled-components";

import { removeTaskAction } from "../../Store/taskActions";

import TaskItemCheckIcon from "../../UI/Icons/HomePage/TaskItemCheckIcon";
import DragIcon from "../../UI/Icons/TaskItem/DragIcon";
import TaskItemButton from "../../UI/Buttons/TaskItemButton";
import PenIcon from "../../UI/Icons/TaskItem/PenIcon";
import ComentIcon from "../../UI/Icons/TaskItem/ComentIcon";
import DotsIcon from "../../UI/Icons/TaskItem/DotsIcon";
import DateIconSmooth from "../../UI/Icons/TaskItem/DateIconSmooth";
import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import EditTaskForm from "../../UI/Forms/EditTaskForm";

export default function TaskItem({
  list,
  task,
  refference,
  dragging,
  draggingHandle,
  snapshot,
}) {
  const dispatch = useDispatch();

  const [hover, setHover] = useState(false);
  const [editTaskForm, setEditTaskForm] = useState(false);

  const [testingWindow, setTestingWindow] = useState(false);

  const editTaskFormHandlers = {
    openEditTask: () => setEditTaskForm(true),
    closeEditTask: () => setEditTaskForm(false),
    id: task.id,
    title: task.title,
    description: task.description,
  };
  return (
    <>
      {editTaskForm ? (
        <EditTaskFormContainer>
          <EditTaskForm
            cancelHendler={editTaskFormHandlers.closeEditTask}
            taskItem={task}
          />
        </EditTaskFormContainer>
      ) : (
        <Wrapper
          ref={refference}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          {...dragging}
          style={{
            ...dragging.style,
            boxShadow: snapshot.isDragging ? "0px 2px 5px 0px #999999" : "none",
          }}
        >
          <DragButton hover={hover} {...draggingHandle}>
            <DragIcon />
          </DragButton>
          <Content>
            <Checkbox
              onClick={() => dispatch(removeTaskAction(list, task))}
              priority={task.priority.color}
            >
              <StyledCheckBoxIcon>
                <TaskItemCheckIcon />
              </StyledCheckBoxIcon>
            </Checkbox>
            <Text onClick={() => setTestingWindow(true)}>
              <Title>{task.title}</Title>
              <Description>{task.description}</Description>
            </Text>
          </Content>
          <Controls active={hover}>
            {/*======================= Pen button ========================*/}
            <TaskItemButton
              clickHandler={editTaskFormHandlers.openEditTask}
              hint="Edit Task"
              keybord="Ctrl E"
            >
              <PenIcon />
            </TaskItemButton>

            <TaskItemButton hint="Set sue date..." keybord="T">
              <DateIconSmooth />
            </TaskItemButton>
            <TaskItemButton hint="Coment on task" keybord="C">
              <ComentIcon />
            </TaskItemButton>
            <TaskItemButton hint="More actions" keybord=" . ">
              <DotsIcon />
            </TaskItemButton>
          </Controls>
        </Wrapper>
      )}
      {testingWindow ? (
        <EditTask
          taskEditModal={testingWindow}
          setTaskEditModal={setTestingWindow}
          task={task}
          taskList={list}
        />
      ) : null}
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
`;

const DragButton = styled.span`
  display: block;
  opacity: ${(props) => (props.hover ? "1" : "0")};
  position: absolute;
  left: -30px;
  top: 3px;
  cursor: move;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    & svg path {
      fill: #000;
    }
  }
`;

const EditTaskFormContainer = styled.div`
  margin-top: 12px;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 4px;
`;
const Checkbox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: relative;
  margin-top: 2px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    & div {
      transition: opacity 0.4s;
      opacity: 1;
    }
  }
  ${({ priority }) =>
    priority !== "none"
      ? css`
          border: 2px solid ${priority};
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
const Text = styled.div`
  padding: 0 8px 8px 8px;
  width: 100%;
`;
const Title = styled.h3`
  flex-grow: 1;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  word-wrap: break-word;
  word-break: break-word;
  overflow: hidden;
`;
const Description = styled.p`
  flex-basis: 100%;
  font-size: 12px;
  word-wrap: break-word;
  word-break: break-all;
  display: -webkit-box;
  color: grey;
`;

const Controls = styled.div`
  display: flex;
  opacity: ${(props) => (props.active ? 1 : 0)};
  position: absolute;
  right: -35px;
  top: 10px;
  column-gap: 8px;
`;
