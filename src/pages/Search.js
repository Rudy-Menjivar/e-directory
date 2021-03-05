import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
    state = {
      search: "",
      results: [],
      error: ""
    };
}

export default Search;
