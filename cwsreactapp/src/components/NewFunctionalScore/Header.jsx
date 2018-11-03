import ReactDOM from "react-dom";
import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Impairment of Body Functions"
    };
  }

  render() {
    return (
      <div>
        <span className="pageheader">
          <span onChange={this.props.onChange}>{this.state.name}</span>
        </span>
      </div>
    );
  }
}
export default Header;
