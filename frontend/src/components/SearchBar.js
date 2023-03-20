import { SearchIcon } from "@primer/octicons-react";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <SearchIcon size={32}></SearchIcon>
      <input type="search" placeholder="Search URL ..." spellCheck="false" />
      <button type="button">Generate</button>
    </div>
  );
};

export default SearchBar;
