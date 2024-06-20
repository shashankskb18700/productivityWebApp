import TaskAndProject from "../features/taskAndProject/taskAndProject";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import Document from "../features/document/document";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      {/* <Header></Header>
      <Sidebar></Sidebar> */}
      {/* <TaskAndProject></TaskAndProject> */}
      <Document></Document>
    </div>
  );
};

export default Home;
