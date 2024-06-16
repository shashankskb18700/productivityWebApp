import "./header.css";
import { ReactComponent as Logo } from "../../assets/svg/logoIcon.svg";
import { ReactComponent as Symbol } from "../../assets/svg/symbol.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="brandDesc">
        <Symbol className="symbol"></Symbol>
        <Logo className="headerLogo"></Logo>
      </div>
    </div>
  );
};

export default Header;
