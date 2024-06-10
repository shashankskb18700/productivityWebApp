import { Routes, Route } from "react-router-dom";
import Auth from "../authentication/auth";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth></Auth>}></Route>
    </Routes>
  );
};

export default AppRouter;
