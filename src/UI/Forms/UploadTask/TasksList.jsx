import React, { useState } from "react";
import TaskItem from "./TaskItem";

export default function TasksList({ tasks, setTasks }) {
  const removeTask = (task) => {
    setTasks(tasks.filter((p) => p.id !== task.id));
  };
  return (
    <>
      {tasks.map((item) => (
        <TaskItem task={item} key={item.id} removeTask={removeTask} />
      ))}
    </>
  );
}
