import React from "react";
import styled from "styled-components";

export default function PriorityLabels({ actionsWindow, setActionsWindow }) {
  console.log(actionsWindow);
  return (
    <>
      <LabelsWrapper active={actionsWindow}>
        <Container></Container>
      </LabelsWrapper>
    </>
  );
}
const LabelsWrapper = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Container = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid red;
`;
