import TaskAndProject from "../features/taskAndProject/taskAndProject";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <Sidebar></Sidebar>
      {/* <TaskAndProject></TaskAndProject> */}
    </div>
  );
};

export default Home;
