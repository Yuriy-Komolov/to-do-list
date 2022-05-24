import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";

import { dragAndDropAction } from "../../Store/taskActions";
import { sortingByMethods } from "../Filters/filtersMethods";
import TaskItem from "./TaskItem";

export default function TasksList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.persistedReduser.tasks.taskList);

  const sortingMethod = useSelector(
    (state) => state.persistedReduser.tasks.sortBy
  );

  const sortedList = sortingByMethods(list, sortingMethod);

  return (
    <>
      <DragDropContext
        onDragEnd={(param) => {
          dispatch(
            dragAndDropAction(list, param.source.index, param.destination.index)
          );
        }}
      >
        <Droppable droppableId="droppable-1">
          {(provided, _) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {sortedList.map((item, index) => (
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
