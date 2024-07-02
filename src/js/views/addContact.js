import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const editCard = store.contacts.find((card) => card.id === Number(params.id));
  const id = Number(params.id);

  const [dataContact, setDataContact] = useState({
    name: editCard?.name ?? "",
    phone: editCard?.phone ?? "",
    email: editCard?.email ?? "",
    address: editCard?.address ?? "",
  });

  const inputValue = (e) => {
    const { name, value } = e.target;
    setDataContact((prevDataContact) => ({
      ...prevDataContact,
      [name]: value,
    }));
  };

  const handleAddContact = (event) => {
    event.preventDefault();
    actions.createNewContact(dataContact);
    setDataContact({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <>
      <h2 className="mx-4">Add a new contact:</h2>
      <form className="row g-3 mx-4 mt-3 p-0 O" onSubmit={handleAddContact}>
        <div className="col-md-6">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            onChange={inputValue}
            type="text"
            className="form-control"
            id="fullName"
            name="name"
            placeholder="Name and Last name"
            value={dataContact.name}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            onChange={inputValue}
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="email@example.com"
            value={dataContact.email}
          />
        </div>
        <div className="col-12">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            onChange={inputValue}
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Phone number"
            value={dataContact.phone}
          />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            onChange={inputValue}
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="123 Main St"
            value={dataContact.address}
          />
        </div>

        <div className="d-flex justify-content-between mt-3">
          <Link to="/contactlist">
            <button type="button" className="btn btn-warning">
              Back to Contact list
            </button>
          </Link>

          <div>
            <Link to="/addcontact/:id">
              <button
                onClick={() => {
                  setDataContact(dataContact);
                  console.log("Aqui data Contact" + dataContact);
                  actions.editContact(id, dataContact);
                }} //Revisar el parámetro de editContact => Unprocessable Entity
                type="button"
                className="btn btn-warning ms-2"
              >
                Edit contact
              </button>
            </Link>
            <button
              onClick={() => actions.uploadData(dataContact)}
              type="submit"
              className="btn btn-warning ms-2"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
