import React, { useRef } from "react";
import { useEffect } from "react";

import { useState } from "react";
import styled from "styled-components";
import FormTextarea from "../Inputs/FormTextarea";

export default function EditTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const some = useRef(null);

  useEffect(() => {
    some.current.children[0].focus();
  }, []);
  return (
    <>
      <Form>
        <Container>
          <FormTextareaWrapper ref={some}>
            <FormTextarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task1"
            />
          </FormTextareaWrapper>
          <FormTextarea
            value={description}
            onChange={setDescription}
            placeholder="Description"
          />
        </Container>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid red;
  border-radius: 12px;
  :focus-within {
    border: 1px solid grey;
  }
`;
const FormTextareaWrapper = styled.div``;
