import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";

import TaskItem from "./TaskItem";

export default function TasksList({ setTaskForm }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state);

  const removeTask = (task) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: tasks.filter((p) => p.id !== task.id),
    });
  };

  return (
    <>
      <DragDropContext
        onDragEnd={(param) => {
          const destinationIndex = param.destination.index;
          const sourceIndex = param.source.index;
          tasks.splice(destinationIndex, 0, tasks.splice(sourceIndex, 1)[0]);
        }}
      >
        <Droppable droppableId="droppable-1">
          {(provided, _) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((item, index) => (
                <Draggable
                  draggableId={"draggable-" + item.id}
                  key={item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <TaskItem
                      task={item}
                      key={item.id}
                      removeTask={removeTask}
                      refference={provided.innerRef}
                      dragging={{ ...provided.draggableProps }}
                      draggingHandle={{ ...provided.dragHandleProps }}
                      snapshot={snapshot}
                      setTaskForm={setTaskForm}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
