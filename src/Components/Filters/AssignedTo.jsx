import React from "react";
import styled from "styled-components";
import TaskItemCheckIcon from "../../UI/Icons/HomePage/TaskItemCheckIcon";
export default function AssignedTo({
  filtersMenu,
  setFiltersMenu,
  mainBoxPosition,
}) {
  return (
    <>
      <Wrapper
        active={filtersMenu.assigned}
        onClick={() => setFiltersMenu({ ...filtersMenu, assigned: false })}
      >
        <Container windowPosition={mainBoxPosition}>
          <Option>
            Default <TaskItemCheckIcon />
          </Option>
          <Option>
            No one <TaskItemCheckIcon />
          </Option>
          <Option>
            Only me <TaskItemCheckIcon />
          </Option>
        </Container>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  height: 100vh;
  width: 100vw;
  z-index: 150;
`;
const Container = styled.div`
  width: 200px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
  outline: none;
  background: #fff;
  position: absolute;
  transform: ${(props) => `translate(${props.windowPosition + 110}px, 255px)`};
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
