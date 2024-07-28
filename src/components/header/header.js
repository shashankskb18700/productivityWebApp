import "./header.css";
import { ReactComponent as Logo } from "../../assets/svg/logoIcon.svg";
import { ReactComponent as Symbol } from "../../assets/svg/symbol.svg";
import { ReactComponent as Avatar } from "../../assets/svg/avatar.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="brandDesc">
        {/* <Symbol className="symbol"></Symbol> */}
        <span>EFFICIO</span>
      </div>

      <div>
        <Avatar className="avatar"></Avatar>
      </div>
    </div>
  );
};

export default Header;
