import { useState } from "react";

import Header from "../../header/header";
import Sidebar from "../../sidebar/sidebar";
import Calender from "./calendar/calendar";
import Time from "./time/time";
import { ReactComponent as AddTask } from "../../../assets/svg/add-circle-svgrepo-com.svg";
import TaskSub from "./taskSub/TaskSub";
import "./Todo.css";

const Todo = () => {
  const [addTask, setAddTask] = useState(false);
  return (
    <div className="todoComponent">
      <Header></Header>
      <div className="todo">
        <Sidebar content={["current"]}></Sidebar>
        <div className="todoContent">
          <div>
            {" "}
            {/* <AddTask className="pen"></AddTask> */}
            <span onClick={() => setAddTask(true)}>Create Todo</span>
          </div>
          <div>
            <span>Today Task</span>
            <div className="todoScroll">{/* <TaskSub ></TaskSub> */}</div>
          </div>
          <div>
            <span>Completed Task </span>
            <div className="todoScroll"></div>
          </div>
          <div>recent todo</div>
        </div>
      </div>

      <div className="createTodo">
        <div>
          <span>Create Todo</span>
          <span>close</span>
        </div>
        <div className="createTodoForm">
          <div>
            {" "}
            <Calender
              calValue={(e) => console.log(e.target.getAttribute("value"))}
            ></Calender>
          </div>
          <div>
            <Time
              timeVal={(e) => console.log(e.target.getAttribute("value"))}
            ></Time>
          </div>
          <div>
            <input id="taskTitle" placeholder="Task Name"></input>
          </div>
          <div>
            <textarea id="taskDesc" placeholder="Task Description"></textarea>
          </div>
        </div>

        <button>Create Task</button>
      </div>
    </div>
  );
};

export default Todo;
