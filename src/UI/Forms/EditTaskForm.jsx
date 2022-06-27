import { useState, useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import styled from "styled-components";
import { saveChanges } from "../../Store/taskActions";
import AddTaskButton from "../Buttons/AddTaskButton";
import FormTextarea from "../Inputs/FormTextarea";

export default function EditTaskForm({ taskItem, cancelHendler }) {
  const [title, setTitle] = useState(taskItem.title);
  const [description, setDescription] = useState(taskItem.description);

  const titleInput = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    titleInput.current.firstChild.focus();
  }, [taskItem]);

  const saveChangesHandler = (e) => {
    e.preventDefault();
    dispatch(saveChanges(taskItem, { title: title, description: description }));
    cancelHendler();
  };
  const disabledButtonCondition = title.trim().length === 0;
  return (
    <>
      <Form>
        <Container>
          <FormTextareaWrapper ref={titleInput}>
            <FormInputTitle
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task1"
            />
          </FormTextareaWrapper>

          <FormTextarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <FormButtons>
            <FormResetBtn type="button" text="Cancel" onClick={cancelHendler} />
            <StyledSubmit
              type="submit"
              text="Save"
              disabled={disabledButtonCondition}
              onClick={saveChangesHandler}
            />
          </FormButtons>
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
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  :focus-within {
    border: 1px solid grey;
  }
`;
const FormTextareaWrapper = styled.div``;

const FormInputTitle = styled(FormTextarea)`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  cursor: text;
  width: 100%;
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: flex-end;
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
