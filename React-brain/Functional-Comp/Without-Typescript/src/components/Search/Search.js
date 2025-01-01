import { useState } from "react";

const Search = ({ setSearchTerm, searchTerm }) => {
  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter the search term</label>
          <input
            type="text"
            value={searchTerm}
            className="input"
            onChange={onSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
