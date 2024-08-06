import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";

import "./projectPage.css";

import { ReactComponent as TaskSvg } from "../../assets/svg/homeAddTask.svg";
import { ReactComponent as CalenderSvg } from "../../assets/svg/homeCalender.svg";
import { ReactComponent as DocumentSvg } from "../../assets/svg/homeAddDocument.svg";
import { ReactComponent as DrawSvg } from "../../assets/svg/homeDrawing.svg";

const ProjectPage = () => {
  return (
    <div className="project">
      <Header></Header>

      <div className="projectComponent">
        <Sidebar content={["overview "]}></Sidebar>
        <div className="projectFeature">
          <Link to={`/task/${uuidv4()}`} className="projectFeatureComponent">
            <TaskSvg></TaskSvg>
            <b>CREATE TASK</b>
          </Link>
          <div className="projectFeatureComponent">
            <CalenderSvg></CalenderSvg>
            <b>CALENDER</b>
          </div>

          <Link
            to={`/document/${uuidv4()}`}
            className="projectFeatureComponent"
          >
            <DocumentSvg></DocumentSvg>
            <b>DOCUMENT</b>
          </Link>
          <div className="projectFeatureComponent">
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

export default ProjectPage;
