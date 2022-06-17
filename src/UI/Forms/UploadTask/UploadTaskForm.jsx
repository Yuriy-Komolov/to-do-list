import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import AddTaskButton from "../../Buttons/AddTaskButton";
import Error from "../../Atoms/Error";
import {
  postTitleValidation,
  postDescriptionValidation,
} from "../../../Utils/validationModule";
import { priority } from "../../../Constants/priorityConstants";
import FormExstraFeatures from "./FormExstraFeatures";
import FormTextarea from "../../Inputs/FormTextarea";

export default function UploadTaskForm({
  cancelHendler,
  mode,
  setQuickFormActive,
  setDiscartWarning,
  setEmptyTitle,
  taskItem,
  activeForm,
}) {
  const dispatch = useDispatch();

  const titleField = useRef(null);
  const formReference = useRef(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [taskPriority, setTaskPriority] = useState(priority.DEFAULT);
  const [errors, setErrors] = useState({
    titleError: "",
    descriptionError: "",
  });

  const disabledButtonCondition =
    title.trim().length === 0 ||
    errors.titleError !== "" ||
    errors.descriptionError;

  useEffect(() => {
    titleField.current.firstChild.focus();
    console.log(titleField);
  }, []);

  useEffect(() => {
    if (!activeForm) {
      setDescription("");
      setTitle("");
      setTaskPriority(priority.DEFAULT);
    }
  }, [activeForm]);

  // Submit button ========================
  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      dateAdding: Date.now(),
      priority: taskPriority,
      subtasks: [],
    };

    dispatch({ type: "ADD_TASK", payload: newTask });

    setTitle("");
    setDescription("");

    setTaskPriority(priority.DEFAULT);

    if (mode === "quickMode") {
      setEmptyTitle("");
      setQuickFormActive(false);
    }
    titleField.current.children[0].focus();
  };

  // Close Button
  const formClosing = () => {
    mode === "quickMode" && title ? setDiscartWarning(true) : cancelHendler();
  };

  // Add subtask =============================
  const addSubTask = (e) => {
    e.preventDefault();
    const newSubtask = {
      id: Date.now(),
      title: title,
      description: description,
    };
    taskItem.subtasks = [...taskItem.subtasks, newSubtask];
  };

  const modeChecking = mode === "subTask" ? addSubTask : addTask;
  return (
    <>
      <FormWrapper>
        <form ref={formReference}>
          <FormInner>
            {/*===================================================================================== */}
            <FormInputTitleWrapper ref={titleField}>
              <FormInputTitle
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setErrors((errors) => ({
                    ...errors,
                    titleError: postTitleValidation(title),
                  }));
                  if (mode === "quickMode") setEmptyTitle(e.target.value);
                }}
                onKeyPress={(press) => {
                  if (press.key === "Enter") {
                    press.preventDefault();
                    modeChecking();
                  }
                }}
                placeholder="Title (Example=> To buy a book)"
              />
            </FormInputTitleWrapper>
            {/*===================================================================================== */}

            <FormInputDescription
              value={description}
              placeholder="Description..."
              onChange={(e) => {
                setDescription(e.target.value);

                setErrors((errors) => ({
                  ...errors,
                  descriptionError: postDescriptionValidation(description),
                }));
              }}
            />
            <Error>{errors.titleError}</Error>
            <Error>{errors.descriptionError}</Error>

            <UploadFeatures
              taskPriority={taskPriority}
              setTaskPriority={setTaskPriority}
            />
          </FormInner>

          <FormButtons>
            <StyledSubmit
              type="submit"
              text={mode === "editTask" ? "Save" : "Add Task"}
              disabled={disabledButtonCondition}
              onClick={modeChecking}
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
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  position: relative;
  cursor: text;
  :focus-within {
    border: 1px solid grey;
  }
`;

const FormInputTitle = styled(FormTextarea)`
  padding: 10px 10px 0 10px;
  border-radius: 24px;
`;

const FormInputTitleWrapper = styled.div``;

const FormInputDescription = styled(FormTextarea)`
  min-height: 46px;
  font-size: 13px;
  line-height: 18px;
  border-radius: 18px;
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
  font-weight: 600;
  &:disabled {
    background-color: rgba(30, 120, 250, 0.5);
    &:hover {
      cursor: url("/Images/icons/block.png"), auto;
    }
  }
`;

const UploadFeatures = styled(FormExstraFeatures)`
  & div {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
