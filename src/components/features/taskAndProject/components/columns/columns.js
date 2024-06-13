import { Droppable } from "@hello-pangea/dnd";

import Tasks from "../tasks/tasks";
import "./columns.css";

const Columns = (props) => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20em",
      }}
    >
      <h3 className="title">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <div
            className={
              snapshot.isDraggingOver ? "taskList dragOver" : "taskList"
            }
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {props.tasks.map((task, index) => {
              return <Tasks key={task.id} task={task} index={index}></Tasks>;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
export default Columns;
