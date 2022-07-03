import React from "react";
import styled from "styled-components";

export default function UpcomingPage() {
  return (
    <>
      <Some>
        <Container>
          <p>Some content</p>
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
