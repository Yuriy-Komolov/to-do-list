import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import AddTaskButton from "../../Buttons/AddTaskButton";
import {
  postTitleValidation,
  postDescriptionValidation,
} from "../../../Utils/validationModule";

export default function UploadTaskForm({
  hadlerClick,
  mode,
  activeForm,
  setDiscartWarning,
  setEmptyTitle,
  tasks,
  setTasks,
  editTask,
  taskItem,
}) {
  const [title, setTitle] = useState("");
  const [titleHeight, setTitleHeight] = useState("");

  const [description, setDescription] = useState("");
  const [descriptionHeight, setDescriptionHeight] = useState("");

  const [errors, setErrors] = useState("");

  const titleField = useRef(null);
  const descriptionField = useRef(null);

  useEffect(() => {
    if (activeForm === true) {
      titleField.current.focus();
    } else {
      titleField.current.value = "";
      setTitle("");

      descriptionField.current.value = "";
      setDescription("");
    }

    // ======== Edit Task Fields==========================================================
    if (editTask) {
      setTitle(editTask.title);
      titleField.current.value = editTask.title;
      titleField.current.focus();

      setDescription(editTask.description);
      descriptionField.current.value = editTask.description;
    }
  }, [activeForm, editTask]);

  // Edit task button
  const submitEditTask = (e) => {
    e.preventDefault();

    taskItem.title = title;
    taskItem.description = description;
    formClosing();
  };

  // Submit button
  const addTask = (e) => {
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
    };

    setTasks([...tasks, newTask]);
    console.log(tasks);
    setTitle("");
    titleField.current.value = "";
    descriptionField.current.value = "";
    if (mode === "quickMode") {
      setEmptyTitle("");
    }
  };
  // Close Button
  const formClosing = () => {
    mode === "quickMode" && title ? setDiscartWarning(true) : hadlerClick();
  };

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
                if (mode === "quickMode") setEmptyTitle(e.target.value);
              }}
              onKeyPress={(press) => {
                if (press.key === "Enter") {
                  press.preventDefault();
                  addTask();
                }
              }}
              style={{ height: titleHeight }}
              ref={titleField}
            />

            <FormInputDescription
              placeholder="Description..."
              onChange={(e) => {
                setDescription(e.target.value);
                setDescriptionHeight(e.target.scrollHeight);

                setErrors(postDescriptionValidation(description));
              }}
              ref={descriptionField}
              style={{ height: descriptionHeight }}
            />
            <Error>{errors}</Error>
          </FormInner>

          <FormButtons>
            <StyledSubmit
              type="submit"
              text={mode === "editTask" ? "Save" : "Submit"}
              disabled={title.trim().length === 0 || errors ? true : false}
              onClick={mode === "editTask" ? submitEditTask : addTask}
            />
            <FormResetBtn type="button" text="Cancel" onClick={formClosing} />
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
