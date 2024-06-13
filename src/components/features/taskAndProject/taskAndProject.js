import { useState } from "react";

import initialData from "./initialData";
import Columns from "./components/columns/columns";
import { DragDropContext } from "@hello-pangea/dnd";
import "./taskAndProject.css";

const TaskAndProject = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = data.columns[source.droppableId];

    const finish = data.columns[destination.droppableId];
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      console.log(newColumn);

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
      console.log(newState);
      setData(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    console.log(newFinish);
    setData(newState);
  };

  console.log(data);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
        {data["columnOrder"].map((columnId) => {
          const column = data.columns[columnId];

          const tasks = column.taskIds.map((taskIds) => data.tasks[taskIds]);

          return (
            <Columns key={column.id} column={column} tasks={tasks}></Columns>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default TaskAndProject;
