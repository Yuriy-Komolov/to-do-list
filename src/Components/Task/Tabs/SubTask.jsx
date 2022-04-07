import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../../UI/Buttons/AddTaskButton";
import UploadTaskForm from "../../../UI/Forms/UploadTask/UploadTaskForm";
import TasksList from "../TasksList";

export default function SubTask({ subtasks }) {
  const [subtaskForm, setSubtaskForm] = useState(false);

  return (
    <>
      <Wrapper>
        {subtaskForm ? (
          <UploadTaskForm
            mode="subTask"
            taskItem={subtasks}
            cancelHendler={() => {
              setSubtaskForm(false);
            }}
          />
        ) : (
          <>
            <AddTaskButton
              text="Add Sub-task"
              $mode="withIcon"
              onClick={() => {
                setSubtaskForm(true);
              }}
            />
            {subtasks.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
            {/* <TasksList list={subtasks} /> */}
          </>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 20px 30px 0;
`;
