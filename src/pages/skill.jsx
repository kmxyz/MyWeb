import React, { Component } from "react";

class Skill extends Component {
  state = {};
  render() {
    return (
      <div id="Skill">
        <h1 className="pb-2">Skill</h1>
        <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Software</h2>
            <p className="lead">My Current Software Toolkit.</p>
          </div>
          <div
            className="bg-body-tertiary shadow-sm mx-auto rounded-top-5 border-bottom"
            style={{
              width: "80%",
              height: "300px",
            }}
          >
            <h1 className="text-primary">HI</h1>
          </div>
        </div>
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Language</h2>
            <p className="lead">My Current Programming Language Skills.</p>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto rounded-top-5"
            style={{
              width: "80%",
              height: "300px",
            }}
          >
            <h1 className="text-primary">HI</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
