import "./sidebar.css";
const Sidebar = ({ content }) => {
  return (
    <div className="sidebar">
      {content.map((a) => (
        <div key={a}>{a}</div>
      ))}
    </div>
  );
};
export default Sidebar;
