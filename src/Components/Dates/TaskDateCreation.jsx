import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DateIconSmooth from "../../UI/Icons/TaskItem/DateIconSmooth";

export default function TaskDateCreation({ task }) {
  const [taskCreation, setTaskCretion] = useState();

  const daysDifferenceChecking = (task) => {
    const dateOfCreation = new Date(task.dateAdding);
    const dateOfCreationFormat = dateOfCreation.toLocaleString("en-US", {
      day: "numeric",
      month: "short",
    });
    const currentDate = new Date();
    const currentDateByDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );
    const dateOfCreationByDays = new Date(
      dateOfCreation.getFullYear(),
      dateOfCreation.getMonth(),
      dateOfCreation.getDate()
    );

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisBetween =
      currentDateByDays.getTime() - dateOfCreationByDays.getTime();
    const days = Math.floor(millisBetween / millisecondsPerDay);

    return [days, dateOfCreationFormat];
  };

  useEffect(() => {
    const [days, dateOfCreationFormat] = daysDifferenceChecking(task);
    if (days === 0) {
      setTaskCretion(
        <StyledDate>
          <DateIconSmooth />
          Today
        </StyledDate>
      );
    } else if (days === 1) {
      setTaskCretion(
        <DueDate>
          <DateIconSmooth />
          Yesterday
        </DueDate>
      );
    } else {
      setTaskCretion(
        <DueDate>
          <DateIconSmooth />
          {dateOfCreationFormat}
        </DueDate>
      );
    }
  }, []);
  return (
    <>
      <Container>{taskCreation}</Container>
    </>
  );
}
const Container = styled.div``;
const StyledDate = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  & svg path {
    fill: green;
  }
`;
const DueDate = styled(StyledDate)`
  & svg path {
    fill: red;
  }
`;
