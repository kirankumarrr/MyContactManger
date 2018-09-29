import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showContactInfo: false
    };
    //  this.showClick = this.showClick.bind(this, name);
  }
  showClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  DeleteConatact(id, dispatch) {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  }
  render() {
    const { id, name, email, phone } = this.props.contacts;
    const showContactInfo = this.state.showContactInfo;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {this.props.contacts.name}
                {showContactInfo ? (
                  <i
                    className="fas fa-sort-up"
                    style={{ verticalAlign: "-35%", cursor: "pointer" }}
                    onClick={this.showClick.bind(this, name)}
                  />
                ) : (
                  <i
                    className="fas fa-sort-down"
                    style={{ cursor: "pointer" }}
                    onClick={this.showClick.bind(this, name)}
                  />
                )}
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.DeleteConatact.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
// Here you made a mistake using this Contact.prototype
// its "Contact.protoType"
Contact.protoType = {
  contacts: PropTypes.object.isRequired
};
export default Contact;
