import "./header.css";
import { ReactComponent as Logo } from "../../assets/svg/logoIcon.svg";
import { ReactComponent as Symbol } from "../../assets/svg/symbol.svg";
import { ReactComponent as Avatar } from "../../assets/svg/avatar.svg";
import { ReactComponent as Notification } from "../../assets/svg/notification-svgrepo-com (2).svg";
import { ReactComponent as Recent } from "../../assets/svg/recent-svgrepo-com (2).svg";
import { ReactComponent as Search } from "../../assets/svg/search-alt-svgrepo-com.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="brandDesc">
        {/* <Symbol className="symbol"></Symbol> */}
        <span>EFFICIO</span>
      </div>

      <div className="headerIcon">
        <span>
          <input type="text" placeholder="search"></input>
        </span>
        <Search></Search>
        <Recent></Recent>
        <Notification></Notification>
        <Avatar></Avatar>
      </div>
    </div>
  );
};

export default Header;
