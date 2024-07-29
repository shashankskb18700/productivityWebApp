import { useEffect, useState } from "react";

import SearchBar from "../search/search";

import "./header.css";
import { ReactComponent as Logo } from "../../assets/svg/logoIcon.svg";
import { ReactComponent as Symbol } from "../../assets/svg/symbol.svg";
import { ReactComponent as Avatar } from "../../assets/svg/avatar.svg";
import { ReactComponent as Notification } from "../../assets/svg/notification-svgrepo-com (2).svg";
import { ReactComponent as Recent } from "../../assets/svg/recent-svgrepo-com (2).svg";

import { ReactComponent as Search } from "../../assets/svg/search-alt-svgrepo-com.svg";
import { ReactComponent as Close } from "../../assets/svg/close-bold-svgrepo-com.svg";

const Header = () => {
  const [mobileSearchView, setMobileSearchView] = useState(false);

  return (
    <div>
      <div className="header">
        <div className="brandDesc">
          {/* <Symbol className="symbol"></Symbol> */}
          <span>EFFICIO</span>
        </div>

        <div className={`headerIcon ${mobileSearchView ? `mobile` : ""}`}>
          <SearchBar></SearchBar>

          {mobileSearchView ? (
            <Close
              className="searchHeaderIcon"
              onClick={() => setMobileSearchView(!mobileSearchView)}
            ></Close>
          ) : (
            <Search
              className="searchHeaderIcon"
              onClick={() => setMobileSearchView(!mobileSearchView)}
            ></Search>
          )}

          <Recent></Recent>
          <Notification></Notification>
          <Avatar></Avatar>
        </div>
      </div>
      <div className="mobileSearch">
        {mobileSearchView ? <SearchBar></SearchBar> : ""}
      </div>
    </div>
  );
};

export default Header;
