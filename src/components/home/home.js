import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";

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
          <Link to={`/task/${uuidv4()}`} className="homeFeatureComponent">
            <TaskSvg></TaskSvg>
            <b>CREATE TASK</b>
          </Link>
          <div className="homeFeatureComponent">
            <CalenderSvg></CalenderSvg>
            <b>CALENDER</b>
          </div>

          <Link to={`/document/${uuidv4()}`} className="homeFeatureComponent">
            <DocumentSvg></DocumentSvg>
            <b>DOCUMENT</b>
          </Link>
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
