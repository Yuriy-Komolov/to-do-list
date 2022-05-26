import React from "react";
import styled from "styled-components";
import TaskItemCheckIcon from "../../UI/Icons/HomePage/TaskItemCheckIcon";
import { sortingBy } from "../../Constants/filterConstants";
import { useDispatch } from "react-redux";
import { setSortingMethod } from "../../Store/taskActions";

export default function SortBy({
  filtersMenu,
  setFiltersMenu,
  mainBoxPosition,
}) {
  const dispatch = useDispatch();
  const setSortingMethodValue = (e) => {
    dispatch(setSortingMethod(e.target.dataset.value));
  };

  return (
    <>
      <Wrapper
        active={filtersMenu.sort}
        onClick={() => setFiltersMenu({ ...filtersMenu, sort: false })}
      >
        <Container windowPosition={mainBoxPosition}>
          <Option
            data-value={sortingBy.DEFAULT}
            onClick={setSortingMethodValue}
          >
            Default <TaskItemCheckIcon />
          </Option>
          <Option
            data-value={sortingBy.ALPHABETICALLY}
            onClick={setSortingMethodValue}
          >
            Alphabetically <TaskItemCheckIcon />
          </Option>
          <Option
            data-value={sortingBy.DATE_ADDED}
            onClick={setSortingMethodValue}
          >
            Date added <TaskItemCheckIcon />
          </Option>
          {/* <Option
            data-value={sortingBy.ASSIGNEE}
            onClick={setSortingMethodValue}
          >
            Assignee <TaskItemCheckIcon />
          </Option>
          <Option
            data-value={sortingBy.DUE_DATE}
            onClick={setSortingMethodValue}
          >
            Due date <TaskItemCheckIcon />
          </Option>

          <Option
            data-value={sortingBy.PRIORITY}
            onClick={setSortingMethodValue}
          >
            Priority <TaskItemCheckIcon />
          </Option>
          <Option
            data-value={sortingBy.PROJECT}
            onClick={setSortingMethodValue}
          >
            Project <TaskItemCheckIcon />
          </Option> */}
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
  transform: ${(props) => `translate(${props.windowPosition + 110}px, 225px)`};
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
