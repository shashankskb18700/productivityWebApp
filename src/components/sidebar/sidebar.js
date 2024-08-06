import "./sidebar.css";
const Sidebar = ({ content }) => {
  console.log(content);
  return (
    <div className="sidebar">
      {content.map((a) => (
        <div>{a}</div>
      ))}
    </div>
  );
};
export default Sidebar;
