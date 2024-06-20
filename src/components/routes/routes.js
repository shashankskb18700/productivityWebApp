import { Routes, Route } from "react-router-dom";
import Auth from "../authentication/auth";
import Home from "../home/home";
import Welcome from "../welcomePage/welcomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth></Auth>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/" element={<Welcome></Welcome>}></Route>
    </Routes>
  );
};

export default AppRouter;
