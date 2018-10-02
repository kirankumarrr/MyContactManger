import React, { Component } from "react";
import { Provider } from "./context";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Commenting above code bcoz BrowserRouter isn't working-->need to check
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./ReactRouter/contacts/Contacts";
import AddContact from "./ReactRouter/contacts/AddContact";
import EditContact from "./ReactRouter/contacts/EditContact";
import Header from "./ReactRouter/layouts/Header";
import About from "./ReactRouter/pages/About";
import NotFound from "./ReactRouter/pages/NotFound";
import LifeCycleFlow from "./ReactRouter/Test/LifeCycleFlow";
import LifeCycleFlowTech from "./ReactRouter/Test/LifeCycleFlowTech";

//Switch --> Bascially allows us to have like a default page lika a flick not
// not found page

//Work on this below code to check BrowserRouter
//<Router basename={process.env.PUBLIC_URL}>
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header className="" branding="Contact Manager" />
            <div className="container">
              <Switch>
                {/* <AddContact />
                <Contacts /> */}
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                {/* In the below path this is how you pass parameters in url  */}
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={LifeCycleFlow} />
                <Route exact path="/tech" component={LifeCycleFlowTech} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
                {/* Here its not required to pass path to show page not found  */}
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
