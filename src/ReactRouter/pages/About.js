import React from "react";
const About = props => {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">Simple App to manages Contact</p>
      <p className="text-secoundary">
        Version <span>{props.match.params.id}</span>
        .0.0
      </p>
      <p className="text-secoundary">{props.match.params.id}</p>
      {/* Accessing parameter form link
         1) props.match.parmas 
        you can see about history when you debugger to go futher or backwards
    */}
    </div>
  );
};
export default About;
