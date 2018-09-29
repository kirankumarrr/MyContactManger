import React, { Component } from "react";
import axios from "axios";
//Creating Context
const Context = React.createContext();

//Creatig redux for managing State

const reducer = (state, action) => {
  if (state.contacts.length === 1 && action.type === "DELETE_CONTACT") {
    return {
      ...state,
      stateEmpty: true,
      contacts: state.contacts.filter(contact => contact.id !== action.payload)
    };
  }
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
};

//Creating Provider and its contain Global State

export class Provider extends Component {
  state = {
    contacts: [
      // {
      //   id: "1",
      //   name: "john",
      //   email: "john@gmail.com",
      //   phone: "555-555-5555"
      // },
      // {
      //   id: "2",
      //   name: "jack",
      //   email: "jack@gmail.com",
      //   phone: "444-444-4444"
      // },
      // {
      //   id: "3",
      //   name: "Henery",
      //   email: "Henery@gmail.com",
      //   phone: "999-999-9999"
      // }
      // Removed static data and calling it through api
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
    stateEmpty: false
  };
  //Using ComponentDidMount for api calls
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => this.setState({ contacts: response.data }));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
