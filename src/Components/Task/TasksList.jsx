import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

import TaskItem from "./TaskItem";

export default function TasksList({ setTaskForm, list }) {
  const dispatch = useDispatch();
  const removeTask = (task) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: list.filter((p) => p.id !== task.id),
    });
  };

  return (
    <>
      <DragDropContext
        onDragEnd={(param) => {
          const destinationIndex = param.destination.index;
          const sourceIndex = param.source.index;
          list.splice(destinationIndex, 0, list.splice(sourceIndex, 1)[0]);
        }}
      >
        <Droppable droppableId="droppable-1">
          {(provided, _) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {list.map((item, index) => (
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
