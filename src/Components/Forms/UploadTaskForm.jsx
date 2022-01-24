import React, { useState } from "react";
import styled from "styled-components";

import AddTaskButton from "../../UI/Buttons/AddTaskButton";

import {
  postTitleValidation,
  postDescriptionValidation,
} from "../../Utils/validationModule";

export default function UploadTaskForm({ hadlerClick }) {
  const [title, setTitle] = useState("");
  const [titleHeight, setTitleHeight] = useState("");

  const [description, setDescription] = useState("");
  const [descriptionHeight, setDescriptionHeight] = useState("");

  const [errors, setErrors] = useState("");

  return (
    <>
      <FormWrapper>
        <form>
          <FormInner>
            <FormInputTitle
              placeholder="Title (Example=> To buy a book)"
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleHeight(e.target.scrollHeight);

                setErrors(postTitleValidation(title));
              }}
              style={{ height: titleHeight }}
            />

            <FormInputDescription
              placeholder="Description..."
              onChange={(e) => {
                setDescription(e.target.value);
                setDescriptionHeight(e.target.scrollHeight);

                setErrors(postDescriptionValidation(description));
              }}
              style={{ height: descriptionHeight }}
            />
            <Error>{errors}</Error>
          </FormInner>

          <FormButtons>
            <StyledSubmit
              type="submit"
              text="Submit"
              disabled={title.length === 0 || errors ? true : false}
            />
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

const FormInputTitle = styled.textarea`
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  resize: none;
  height: 28px;
  padding: 4px 8px;
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

const FormInputDescription = styled(FormInputTitle)`
  min-height: 46px;
  font-size: 13px;
  line-height: 18px;
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
`;

const StyledSubmit = styled(AddTaskButton)`
  &:disabled {
    background-color: rgba(30, 120, 250, 0.5);
    &:hover {
      cursor: url("/Images/icons/block.png"), auto;
    }
  }
`;

const Error = styled.p`
  font-size: 12px;
  color: #d1453b;
  margin: 0 0 10px 8px;
`;
