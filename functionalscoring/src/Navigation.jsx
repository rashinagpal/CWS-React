import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <span>
      {" "}
      <NavLink to="/impairement">
        <Button bsStyle="primary" className="m-3">
          {" "}
          Impairement of Body Functions
        </Button>
      </NavLink>
      <NavLink to="/environment">
        <Button bsStyle="primary" className="m-3">
          {" "}
          Environment
        </Button>
      </NavLink>
      <NavLink to="/capacity">
        <Button bsStyle="primary" className="m-3">
          {" "}
          Capacity and Performance
        </Button>
      </NavLink>
    </span>
  );
};

export default Navigation;
