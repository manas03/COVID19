import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-light-yellow border rounded-sm ml-2 mb-2"
        type="search"
        placeholder="Search Countries"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
