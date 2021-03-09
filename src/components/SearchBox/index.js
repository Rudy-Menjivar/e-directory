import React from "react";

function SearchBox({ handleInputData }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => handleInputData(e)}
        />
      </form>
    </div>
  );
}
export default SearchBox;
