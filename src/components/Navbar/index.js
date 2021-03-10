import React from "react";
import SearchBox from "../SearchBox";
import "./style.css";

function Navbar({ handleInputData }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox handleInputData={handleInputData} />
      </div>
    </nav>
  );
}
export default Navbar;