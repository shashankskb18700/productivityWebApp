import Header from "../header/header";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="home">
        <div className="homeSidebar">
          <a>Overview</a>
          <a>Project</a>
          <a>Todo</a>
          <a>Kanban</a>
          <a>Meeting</a>
          <a>Document</a>
        </div>

        <div>
          {" "}
          <div></div>
          <div className="creation">
            <div className="todoHome">
              <div>TODO</div>
              <div>actual content</div>
            </div>

            <div> Schedule meeting</div>

            <div> create Project</div>
          </div>
          <div>
            {" "}
            schdulded meeting
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
          <div></div>
          <div>
            todo
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
