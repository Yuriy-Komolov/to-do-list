import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";

import { refreshListAction } from "../../Store/taskActions";
import TaskItem from "./TaskItem";

export default function TasksList() {
  const list = useSelector((state) => state.persistedReduser.tasks.taskList);
  const dispatch = useDispatch();
  return (
    <>
      <DragDropContext
        onDragEnd={(param) => {
          dispatch(
            refreshListAction(list, param.source.index, param.destination.index)
          );
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
                      list={list}
                      task={item}
                      key={item.id}
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
