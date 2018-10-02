import React, { Component } from "react";
import axios from "axios";
//Creating Context
const Context = React.createContext();

//Creatig redux for managing State
//THe reason here we are iterating because it should know which specific contact is getting update.
//But in case of add we directly passing complete object so even new unique id will be generated
//Here we are checking if id mataches or else keep existing contact data itself
const reducer = (state, action) => {
  // if (state.contacts.length === 1 && action.type === "DELETE_CONTACT") {
  //   return {
  //     ...state,
  //     stateEmpty: true,
  //     contacts: state.contacts.filter(contact => contact.id !== action.payload)
  //   };
  // }
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return { ...state, contacts: [action.payload, ...state.contacts] };

    // case "UPDATE_CONTACT":
    //   return {
    //     ...state,
    //     contacts: state.contacts.map(contact => {
    //       contact.id === action.payload.id
    //         ? (contact = action.payload)
    //         : contact;
    //     })
    //   };
    // This above code is not returning any object

    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    default:
      return state;
  }
};

//Creating Provider and its contain Global State

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
    stateEmpty: false
  };
  //Using ComponentDidMount for api calls
  //Commenting this code so that i can work on asynchronos method
  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(response => this.setState({ contacts: response.data }));
  // }
  // now here we are using asynchronos method
  //1) Here you need to add "async componentDidMount()"
  //2) When you get response store it into variable
  //3) Make sure you add "await" infront of axios because it wait's until i get response
  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
    //.then(response => this.setState({ contacts: response.data }));

    this.setState({ contacts: response.data });
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
