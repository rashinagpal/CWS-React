import ReactDOM from "react-dom";
import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <span className="pageheader">
          <span onChange={this.props.onChange}>{this.props.name}</span>
        </span>
      </div>
    );
  }
}
export default Header;
