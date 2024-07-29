import { ReactComponent as Search } from "../../assets/svg/search-alt-svgrepo-com.svg";

import "./search.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <span>
        <input type="text" placeholder="search"></input>
      </span>
      <Search></Search>
    </div>
  );
};

export default SearchBar;
