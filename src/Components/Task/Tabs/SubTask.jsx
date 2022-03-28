import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../../UI/Buttons/AddTaskButton";
import UploadTaskForm from "../../../UI/Forms/UploadTask/UploadTaskForm";

export default function SubTask({ task }) {
  const [subtaskForm, setSubtaskForm] = useState(false);
  return (
    <>
      <Wrapper>
        {subtaskForm ? (
          <UploadTaskForm
            mode="subTask"
            taskItem={task}
            cancelHendler={() => {
              setSubtaskForm(false);
            }}
          />
        ) : (
          <AddTaskButton
            text="Add Sub-task"
            $mode="withIcon"
            onClick={() => {
              setSubtaskForm(true);
            }}
          />
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 20px 30px 0;
`;
