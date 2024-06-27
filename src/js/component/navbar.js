import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import getState from "../store/flux";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-dark mb-3">
      <Link to="/">
        <h1 className="navbar-brand mb-0 p-2 h1">My Contact List App</h1>
      </Link>
      <div className="ml-auto mx-1 p-1">
        <Link to="/contactlist">
          <button
            className="btn btn-warning mx-2"
            onClick={() => actions.consultContactList()}
          >
            Contact List
          </button>
        </Link>
        <Link to="/addcontact/">
          <button className="btn btn-warning">Add Contact</button>
        </Link>
      </div>
    </nav>
  );
};
