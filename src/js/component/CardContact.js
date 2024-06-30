import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import getState from "../store/flux";

export function CardContact() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  const handleClick = (id) => {
    console.log(store.dataCard.name);
    console.log(id);

    navigate(`/addContact/${id}`);
  };

  return (
    <div className="container">
      <ul className="list-unstyled">
        {store.contacts === undefined ? (
          <p className="text-center fs-3">No hay contactos que mostrar</p>
        ) : (
          store.contacts.map((contact) => (
            <li
              key={contact.id}
              className="card p-3 d-flex flex-row align-items-center"
            >
              <div className="me-3">
                <i className="fas fa-user-alt"></i>
              </div>
              <div className="flex-grow-1 mx-auto">
                <h3 className="mb-1">
                  <i className="fas fa-pen"></i>
                  <span className="ms-2">
                    <strong>{contact.name}</strong>
                  </span>
                </h3>
                <p className="mb-1">
                  <i
                    className="far fa-paper-plane"
                    style={{ color: "black" }}
                  ></i>
                  <span className="ms-2">{contact.email}</span>
                </p>
                <p className="mb-1">
                  <i
                    className="fas fa-mobile-alt fa-lg"
                    style={{ color: "black" }}
                  ></i>
                  <span className="ms-2">{contact.phone}</span>
                </p>
                <p className="mb-0">
                  <i className="far fa-envelope" style={{ color: "black" }}></i>
                  <span className="ms-2">{contact.address}</span>
                </p>
              </div>
              <div className="ms-5 mx-3 d-flex gap-2">
                <Link to="/addcontact/:id">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => handleClick(contact.id)}
                  >
                    <i className="fas fa-marker"></i>
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => actions.deleteContact(contact.id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
      <button className="btn btn-warning mt-3" onClick={() => navigate("/")}>
        Back Home
      </button>
    </div>
  );
}
