import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import getState from "../store/flux";
import { CardContact } from "../component/CardContact";

export const ContactList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <ul className="list-group">
        <CardContact />
      </ul>
      <br />
      <Link to="/">
        <button className="btn btn-warning">Back home</button>
      </Link>
    </div>
  );
};
