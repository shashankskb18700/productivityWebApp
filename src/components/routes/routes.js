import { Routes, Route } from "react-router-dom";
import Auth from "../authentication/auth";
import Home from "../home/home";
import Welcome from "../welcomePage/welcomePage";
import Task from "../features/taskAndProject/taskAndProject";
import Document from "../features/document/document";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth></Auth>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/" element={<Welcome></Welcome>}></Route>
      <Route path="/task/:id" element={<Task></Task>}></Route>
      <Route path="/document/:id" element={<Document></Document>}></Route>
    </Routes>
  );
};

export default AppRouter;
