import React from "react";
import styled from "styled-components";
import EditTaskForm from "../UI/Forms/EditTaskForm";

export default function UpcomingPage() {
  return (
    <>
      <Some>
        <Container>
          <EditTaskForm />
        </Container>
      </Some>
    </>
  );
}

const Some = styled.div`
  padding-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 540px;
`;
