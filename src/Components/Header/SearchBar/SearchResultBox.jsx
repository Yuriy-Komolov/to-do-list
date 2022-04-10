import React from "react";
import styled from "styled-components";

import DateIcon from "../../../UI/Icons/Navigation/TodayIcon";
import InboxIcon from "../../../UI/Icons/Navigation/InboxIcon";
import { useSelector } from "react-redux";
export default function SearchResultBox({ active, searchInput }) {
  const tasks = useSelector((state) => state);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>
      <Wrapper active={active}>
        <p>Recently viewed</p>
        <TasksList>
          {filteredTasks.map((item) => (
            <TaskItem key={item.id}>
              <Circle />
              <ItemTitle>{item.title}</ItemTitle>
              <InboxLabel>
                Inbox
                <InboxIcon />
              </InboxLabel>
            </TaskItem>
          ))}
          <a href="/">
            <TodayItem>
              <DateIcon />
              Today
            </TodayItem>
          </a>
        </TasksList>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  opacity: ${(props) => (props.active ? "1" : "0")};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transition: visibility 0.1s;
  padding-top: 12px;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 15px 50px 0 rgb(0 0 0 / 35%);
  border-radius: 4px;
  position: absolute;
  top: 35px;
  & p {
    font-weight: 700;
    margin-bottom: 8px;
    padding: 0 10px 8px;
  }
`;
const TasksList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 8px 12px;
  min-height: 40px;
  position: relative;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const ItemTitle = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 80%;
`;
const Circle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid grey;
`;
const InboxLabel = styled.span`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 10px;
  & svg {
    width: 20px;
    height: 20px;
  }
`;

const TodayItem = styled(TaskItem)`
  padding-left: 8px;
`;
