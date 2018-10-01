import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroups from "../layouts/TextInputGroups";
import uuid from "uuid";
import axios from "axios";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    // Added error object
    errors: {}
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    //First time error you are setting state but not returing
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
      //This is the return you failed to do so
    }
    if (email === "") {
      this.setState({ errors: { email: "Name is required" } });
      return;
      //This is the return you failed to do so
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Name is required" } });
      return;
      //This is the return you failed to do so
    }
    const newContacts = {
      // id: uuid(),
      //commenting this becasue when we post request automatically it create a unique id
      name,
      email,
      phone
    };
    //Commenting belwo code
    // await axios
    //   .post("https://jsonplaceholder.typicode.com/users", newContacts)
    //   // Here im calling api and passing new Object newContacst
    //   .then(Response =>
    //     dispatch({ type: "ADD_CONTACT", payload: Response.data })
    //   );
    //I can do this way as well
    const Response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContacts
    );
    // Here im calling api and passing new Object newContacst

    dispatch({ type: "ADD_CONTACT", payload: Response.data });
    //dispatch({ type: "ADD_CONTACT", payload: newContacts });
    // Clear input elements after Adding new contact
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    // Here we are redirecting after click on submit
    // to do so use
    this.props.history.push("/");
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //    {this.setState({[e.target.name], e.target.value})}
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroups
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroups
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter email..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroups
                    label="Name"
                    name="phone"
                    placeholder="Enter phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
