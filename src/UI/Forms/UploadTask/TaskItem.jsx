import React, { useState } from "react";
import styled from "styled-components";
import TaskItemCheckIcon from "../../Icons/HomePage/TaskItemCheckIcon";

export default function TaskItem({ task, removeTask }) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Wrapper
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <Content>
          <Checkbox
            onClick={() => {
              removeTask(task);
            }}
          >
            <StyledCheckBoxIcon>
              <TaskItemCheckIcon />
            </StyledCheckBoxIcon>
          </Checkbox>
          <Text>
            <Title>{task.title}</Title>
            <Description>{task.description}</Description>
          </Text>
        </Content>
        <Controls></Controls>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid red;
  margin-top: 10px;
  cursor: pointer;
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
  border: 1px solid rgba(0, 0, 0, 0.4);
  position: relative;
  margin-top: 2px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
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
const Text = styled.div`
  padding: 0 8px 8px 8px;
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

const Controls = styled.div``;