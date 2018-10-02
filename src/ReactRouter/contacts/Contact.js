import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

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

  /*
    1) Need to knnow why async call is important ??
    2) When i dont use await what will happen ? 
    3) Props and Cons ?? 
  DeleteConatact(id, dispatch) {
    // Adding api to delete contacts :
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(Response => dispatch({ type: "DELETE_CONTACT", payload: id }));

    //dispatch({ type: "DELETE_CONTACT", payload: id });
  }
// Here i'm going to use asynch
//commenting aboeve code
*/

  DeleteConatact = async (id, dispatch) => {
    // Adding api to delete contacts :
    // await axios
    //   .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then(Response => dispatch({ type: "DELETE_CONTACT", payload: id }));

    // WHen you add new DAta which not stored in DATABASE since we dont have any
    //to handle those kind of scenarious we can do with Try Catch MEthod

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  //Verify Everything working fine
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
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
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
