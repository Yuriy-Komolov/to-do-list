import React from 'react';
import styled from "styled-components";

export default function GetCurrentDate() {

  const today = new Date();
  const monthOfYear = today.toLocaleString("en-US", { month: "short" });
  const dayOfWeek = today.toLocaleString("en-US", { weekday: "short" });
  const dateOutput = `${dayOfWeek}  ${today.getDate()} ${monthOfYear}`;

  return (
    <>
      <DateWrapper>
        <TodayTitle>Today</TodayTitle>
          <StyledDate>
            {dateOutput}
          </StyledDate>
      </DateWrapper>
    </>
  );
}

const DateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TodayTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
`;

const StyledDate = styled.span`
  color: gray;
  margin-left: 6px;
  font-size: 12px;
  font-weight: 400;
`;
