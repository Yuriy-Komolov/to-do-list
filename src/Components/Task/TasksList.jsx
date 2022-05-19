import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { moveItemAction } from "../../Store/actions";
import TaskItem from "./TaskItem";

export default function TasksList() {
  const list = useSelector((state) => state.persistedReduser.tasks);

  const dispatch = useDispatch();
  // const refreshTasks = () => {
  //   dispatch({
  //     type: "REFRESH_TASK",
  //     payload: list,
  //   });
  // };

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
          dispatch(moveItemAction(param.source.index, param.destination.index));
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
