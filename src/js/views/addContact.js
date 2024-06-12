import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import getState from "../store/flux";

export const AddContact = () => {
  const formSubmit = (event) => {
    event.preventDefault();
    //llamar a funcion de añadir user?
    console.log("Formulario enviado");
  };
  return (
    <>
      <h2 className="mx-4">Add a new contact:</h2>
      <form className="row g-3 mx-4 mt-3 p-0">
        <div className="col-md-6">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Name and Last name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email@example.com"
          />
        </div>
        <div className="col-12">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone number"
          />
        </div>
        <div className="col-12">
          <label htmlFor="adress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="adress"
            placeholder="123 Main St"
          />
        </div>

        <div className="d-flex justify-content-between mt-3">
          <button
            type="submit"
            className="btn btn-warning"
            onClick={formSubmit}
          >
            Add
          </button>

          <Link to="/contactlist">
            <button type="submit" className="btn btn-warning">
              Back to Contact list
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};
