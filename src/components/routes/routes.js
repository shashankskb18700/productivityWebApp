import { Routes, Route } from "react-router-dom";
import Auth from "../authentication/auth";
import ProjectPage from "../projectPage/projectPage";
import LandingPage from "../landingPage/landingPage";
import Task from "../features/taskAndProject/taskAndProject";
import Document from "../features/document/document";
import Home from "../home/home";
import Todo from "../features/todo/Todo";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth></Auth>}></Route>
      <Route path="/project" element={<ProjectPage></ProjectPage>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/task/:id" element={<Task></Task>}></Route>
      <Route path="/document/:id" element={<Document></Document>}></Route>

      <Route path="/todo" element={<Todo></Todo>}></Route>
    </Routes>
  );
};

export default AppRouter;
