import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark mb-3">
      <Link to="/">
        <h1 className="navbar-brand mb-0 p-2 h1">My Contact List App</h1>
      </Link>
      <div className="ml-auto mx-1 p-1">
        <Link to="/contactlist">
          <button className="btn btn-primary mx-2">Contact List</button>
        </Link>
        <Link to="/contactview/">
          {" "}
          <button className="btn btn-primary">Contact</button>
        </Link>
      </div>
    </nav>
  );
};
