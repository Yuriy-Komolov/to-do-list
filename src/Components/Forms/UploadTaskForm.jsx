import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../Buttons/AddTaskButton";

export default function UploadTaskForm({ hadlerClick }) {
  const [textareaState, setTextAreaState] = useState("");

  return (
    <>
      <FormWrapper>
        <form>
          <FormInner>
            <FormInputTitleSpan placeholder="Title (Example=> To buy a book)" />
            <FormInputSubtitle
              placeholder="Description..."
              onChange={(e) => setTextAreaState(e.target.scrollHeight)}
              style={{ height: textareaState }}
            />
          </FormInner>
          <FormButtons>
            <AddTaskButton type="submit" text="Submit" $mode="withoutIcon" />
            <FormResetBtn type="button" text="Cancel" onClick={hadlerClick} />
          </FormButtons>
        </form>
      </FormWrapper>
    </>
  );
}

const FormWrapper = styled.div`
  width: 100%;
  margin-top: 12px;
`;

const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  :focus-within {
    border: 1px solid grey;
  }
`;

const FormInputTitleSpan = styled.textarea`
  padding: 4px 8px 0;
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  resize: none;
  height: 32px;
  overflow: hidden;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #000;
  }
`;

const FormInputSubtitle = styled(FormInputTitleSpan)`
  min-height: 46px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #000;
  }
`;

const FormButtons = styled.div`
  display: flex;
  column-gap: 10px;
`;
const FormResetBtn = styled(AddTaskButton)`
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  padding: 5px 10px;
  font-weight: 500;
  &:hover {
    color: #000;
    background-color: rgba(0, 0, 0, 0.1);
  }
  & div {
    display: none;
  }
`;
