import { useState } from "react";

const Search = ({ setSearchTerm, searchTerm ,label}) => {
  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>{label}</label>
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
