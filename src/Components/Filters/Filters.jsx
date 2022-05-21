import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowDown from "../../UI/Icons/Filters/ArrowDown";
import AssignedToIcon from "../../UI/Icons/Filters/AssignedToIcon";
import GroupByIcon from "../../UI/Icons/Filters/GroupByIcon";
import SortByIcon from "../../UI/Icons/Filters/SortByIcon";
import AssignedTo from "./AssignedTo";
import GroupBy from "./GroupBy";
import SortBy from "./SortBy";

export default function Filters({ filtersBox, setFiltersBox }) {
  const [filtersMenu, setFiltersMenu] = useState({
    group: false,
    sort: false,
    assigned: false,
  });
  const [boxPosition, setBoxPosition] = useState(window.innerWidth - 442);

  const updateWindowWitdth = () => {
    if (window.innerWidth >= 910) {
      setBoxPosition(window.innerWidth * 0.65);
    } else setBoxPosition(window.innerWidth - 320);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWitdth);
    return () => window.removeEventListener("resize", updateWindowWitdth);
  });

  return (
    <>
      <FilterWrapper
        active={filtersBox}
        onClick={() => {
          if (Object.values(filtersMenu).includes(true)) {
            return;
          } else setFiltersBox(false);
        }}
      >
        <Box
          onClick={(e) => {
            e.stopPropagation();
          }}
          windowPosition={boxPosition}
        >
          <Title>Sort</Title>
          <FiltersList>
            <FiltersItem
              onClick={() => {
                setFiltersMenu({ ...filtersMenu, group: true });
              }}
              activeItem={filtersMenu.group}
            >
              <div>
                <GroupByIcon />
              </div>
              <ItemContent>
                <span>Group by</span>
                <ItemMenu>
                  Default
                  <ArrowDown />
                </ItemMenu>
              </ItemContent>
            </FiltersItem>
            <FiltersItem
              onClick={() => setFiltersMenu({ ...filtersMenu, sort: true })}
              activeItem={filtersMenu.sort}
            >
              <div>
                <SortByIcon />
              </div>
              <ItemContent>
                <span>Sort by</span>
                <ItemMenu>
                  Default
                  <ArrowDown />
                </ItemMenu>
              </ItemContent>
            </FiltersItem>
            <FiltersItem
              onClick={() => setFiltersMenu({ ...filtersMenu, assigned: true })}
              activeItem={filtersMenu.assigned}
            >
              <div>
                <AssignedToIcon />
              </div>
              <ItemContent>
                <span>Assigned to</span>
                <ItemMenu>
                  Default
                  <ArrowDown />
                </ItemMenu>
              </ItemContent>
            </FiltersItem>
          </FiltersList>
        </Box>
        <GroupBy
          filtersMenu={filtersMenu}
          setFiltersMenu={setFiltersMenu}
          mainBoxPosition={boxPosition}
        />
        <SortBy
          filtersMenu={filtersMenu}
          setFiltersMenu={setFiltersMenu}
          mainBoxPosition={boxPosition}
        />
        <AssignedTo
          filtersMenu={filtersMenu}
          setFiltersMenu={setFiltersMenu}
          mainBoxPosition={boxPosition}
        />
      </FilterWrapper>
    </>
  );
}
const FilterWrapper = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Box = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%);
  position: absolute;
  transform: ${(props) => `translate(${props.windowPosition}px, 130px)`};
`;

const Title = styled.h4`
  padding: 6px 14px;
`;
const FiltersList = styled.div``;

const FiltersItem = styled.div`
  display: flex;
  padding: 4px 10px 2px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
  background-color: ${(props) =>
    props.activeItem ? "rgba(0, 0, 0, 0.06)" : "#fff"};
`;
const ItemContent = styled.div`
  width: 100%;
  padding: 0 0 4px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
`;
const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  color: grey;
`;
