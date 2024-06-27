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

    navigate(`/editContact/${id}`);
  };

  return (
    <>
      <ul>
        {store.contacts === undefined ? (
          <p className="text-center fs-3"> No hay contactos que mostrar</p>
        ) : (
          store.contacts.map((contact, index) => (
            <li
              key={index}
              id={contact.id}
              className="card row"
              style={{ width: "20rem", height: "10rem" }}
            >
              <div className="card-header col">
                <img src={contact.image}></img>
              </div>
              <div className="card-body col ">
                <div className="d-flex justify-content-between">
                  <div className="justify-content-column">
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.address}</p>
                  </div>
                  <div className="btn btn-group">
                    <button
                      type="button"
                      id="button-edit"
                      className="btn btn-dark"
                      onClick={() => handleClick(contact.id)}
                    >
                      <i className="far fa-edit"></i>
                    </button>
                    <button
                      type="button"
                      id="button-delete"
                      className="btn btn-warning"
                      onClick={() => actions.deleteContact(contact.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
