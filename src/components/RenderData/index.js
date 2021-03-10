import React, { Component } from "react";
import API from "../../utils/API";
import Navbar from "../Navbar";
import RenderTable from "../RenderTable";
import "./style.css";

export default class RenderData extends Component {
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [{}]
  }

  headings = [
    { name: "Image", width: "15%" },
    { name: "Name", width: "25%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "25%" },
    { name: "DOB", width: "15%" }
  ]

  componentDidMount() {
    API.search25().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }

  render() {
    return (
      <>
        <Navbar handleInputData={this.handleInputData} />
        <div className="render-data">
          <RenderTable
            headings={this.headings}
            users={this.state.filteredUsers}
            handleSort={this.handleSort}
          />
        </div>
      </>
    );
  }
}
