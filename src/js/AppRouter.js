import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { ContactList } from "./views/ContactList";
import { ContactView, Single } from "./views/ContactView";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { AddContact } from "./views/AddContact";
import { CardContact } from "./component/CardContact";

//create your first component
const AppRouter = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactlist" element={<ContactList />} />
            <Route path="/addcontact" element={<AddContact />} />
            <Route path="/cardcontact/:theid" element={<CardContact />} />
            <Route
              path="*"
              element={
                <>
                  <h1 className="mx-auto ms-auto not-found">
                    An error ocurred, page not found!
                  </h1>
                  <h5>Click on "My Contact List App" to go back Home</h5>
                </>
              }
            />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(AppRouter);
