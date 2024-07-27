import { Routes, Route } from "react-router-dom";
import Auth from "../authentication/auth";
import ProjectPage from "../projectPage/projectPage";
import Welcome from "../welcomePage/welcomePage";
import Task from "../features/taskAndProject/taskAndProject";
import Document from "../features/document/document";
import Home from "../home/home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth></Auth>}></Route>
      <Route path="/project" element={<ProjectPage></ProjectPage>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/" element={<Welcome></Welcome>}></Route>
      <Route path="/task/:id" element={<Task></Task>}></Route>
      <Route path="/document/:id" element={<Document></Document>}></Route>
    </Routes>
  );
};

export default AppRouter;
