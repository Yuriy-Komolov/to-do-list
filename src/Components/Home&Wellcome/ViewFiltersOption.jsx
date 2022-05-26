import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filteringOrder, sortingBy } from "../../Constants/filterConstants";
import { setSortingMethod, setSortingOrder } from "../../Store/taskActions";
import FiltersClosingIcon from "../../UI/Icons/HomePage/FiltersClosingIcon";
import OrderArrow from "../../UI/Icons/HomePage/OrderArrow";

export default function ViewFiltersOption({ setFiltersBox }) {
  const sortingMethodInfo = useSelector(
    (state) => state.persistedReduser.tasks.sortBy
  );

  const dispatch = useDispatch();
  const resetFilters = () => {
    dispatch(setSortingMethod(sortingBy.DEFAULT));
    dispatch(setSortingOrder(filteringOrder.ASCENDING));
  };

  const toggleSortingOrder = () => {
    if (sortingMethodInfo.order === filteringOrder.DESCENDING) {
      return dispatch(setSortingOrder(filteringOrder.ASCENDING));
    } else {
      return dispatch(setSortingOrder(filteringOrder.DESCENDING));
    }
  };
  return (
    <>
      <Inner>
        <OrderButton
          hint="Reverse order"
          onClick={toggleSortingOrder}
          arrowToggle={sortingMethodInfo.order}
        >
          <OrderArrow />
        </OrderButton>
        <OptionButton
          hint="Change sorting option"
          onClick={() => setFiltersBox(true)}
        >
          Sorted {sortingMethodInfo.method.toLowerCase()}
        </OptionButton>
        <ClosingButton hint="Reset sorting option" onClick={resetFilters}>
          <FiltersClosingIcon />
        </ClosingButton>
      </Inner>
    </>
  );
}

const Inner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 0;
  margin: 28px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    & svg path {
      fill: #000;
    }
    &::before {
      color: #fff;
      background-color: #46403f;
      border-radius: 4px;
      padding: 6px 8px;
      position: absolute;
      top: 30px;
      left: -30px;
      white-space: nowrap;
      content: "${(props) => props.hint}";
    }
  }
`;
const OrderButton = styled(CustomButton)`
  width: 24px;
  height: 24px;
  & svg {
    transform: ${(props) =>
      props.arrowToggle === "descending" ? null : "rotate(180deg)"};
  }
`;

const OptionButton = styled(CustomButton)`
  font-size: 12px;
  font-weight: 700;
  color: grey;
  padding: 4px 6px;
  &:hover {
    color: #000;
    &::before {
      font-weight: 400;
      font-size: 14px;
      left: -10px;
    }
  }
`;
const ClosingButton = styled(CustomButton)`
  &:hover::before {
    left: -50px;
  }
`;
