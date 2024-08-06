import { useState } from "react";

import Header from "../../header/header";
import Sidebar from "../../sidebar/sidebar";
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
        <div className="createTodoForm">
          <div> cal</div>
          <div>time</div>
          <div> inp</div>
          <div>prev</div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
