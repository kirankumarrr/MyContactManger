import React, { Component } from "react";
import { Provider } from "./context";
import Header from "./ReactRouter/layouts/Header";
import Contacts from "./ReactRouter/contacts/Contacts";
import AddContact from "./ReactRouter/contacts/AddContact";

import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header className="" branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
