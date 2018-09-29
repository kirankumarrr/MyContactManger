import React, { Component, Fragment } from "react";
import { Consumer } from "../../context";
import Contact from "./Contact";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact </span>
                List
              </h1>
              {contacts.map(i => {
                return <Contact key={i.id} contacts={i} />;
              })}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
