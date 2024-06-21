import TaskAndProject from "../features/taskAndProject/taskAndProject";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import Document from "../features/document/document";
import "./home.css";
import { ReactComponent as TaskSvg } from "../../assets/svg/homeAddTask.svg";
import { ReactComponent as CalenderSvg } from "../../assets/svg/homeCalender.svg";
import { ReactComponent as DocumentSvg } from "../../assets/svg/homeAddDocument.svg";
import { ReactComponent as DrawSvg } from "../../assets/svg/homeDrawing.svg";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>

      <div className="homeComponent">
        <Sidebar></Sidebar>
        <div className="homeFeature">
          <div className="homeFeatureComponent">
            <TaskSvg></TaskSvg>
            <b>CREATE TASK</b>
          </div>
          <div className="homeFeatureComponent">
            <CalenderSvg></CalenderSvg>
            <b>CALENDER</b>
          </div>

          <div className="homeFeatureComponent">
            <DocumentSvg></DocumentSvg>
            <b>DOCUMENT</b>
          </div>
          <div className="homeFeatureComponent">
            <DrawSvg></DrawSvg>
            <b>DRAW</b>
          </div>
        </div>
      </div>

      {/* <TaskAndProject></TaskAndProject> */}
      {/* <Document></Document> */}
    </div>
  );
};

export default Home;
