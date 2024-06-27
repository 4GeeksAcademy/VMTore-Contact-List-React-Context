import { useContext } from "react";
import React from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const addNewUser = (event) => {
    const inputValue = event.target.value; //Cojo lo que escribo en el input
    actions.addUserToStore(inputValue); //Almaceno el user en el store
    console.log(inputValue);
  };

  return (
    <div className="d-flex justify-content-start mt-5 mx-4">
      <h1>My Contact List App®</h1>
      <div className="d-flex flex-column align-items-start">
        <p className="mt-5 mx-4">
          All your contacts in the same place: safety, easy and intuitive!
        </p>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <div className="input-group d-flex">
              <span className="input-group-text" id="basic-addon1">
                <i className="far fa-id-card"></i>
              </span>
              <input
                onChange={addNewUser}
                type="text"
                className="form-control"
                id="createNewUser"
                placeholder="Create a user name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <button
                onClick={() => actions.createUser(store.username)}
                className="btn btn-warning"
              >
                Create
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
