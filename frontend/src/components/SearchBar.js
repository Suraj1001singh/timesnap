import { SearchIcon } from "@primer/octicons-react";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <SearchIcon size={32}></SearchIcon>
      <input type="search" placeholder="Search URL ..." spellCheck="false" />
      <button type="button">Search</button>
    </div>
  );
};

export default SearchBar;
