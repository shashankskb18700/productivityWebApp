import { Routes, Route } from "react-router-dom";
import Auth from "../authentication/auth";
import Home from "../home/home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth></Auth>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  );
};

export default AppRouter;
