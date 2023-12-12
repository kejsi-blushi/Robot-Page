import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="searchbox">
      <input
        value={searchfield}
        type="search"
        placeholder="Search Robots"
        onChange={(event) => searchChange(event)}
      />
    </div>
  );
};

export default SearchBox;
