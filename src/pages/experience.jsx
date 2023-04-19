import React, { Component } from "react";
import Card from "../components/card";
import { getInfo } from "../data/experience";

class Experience extends Component {
  state = {
    items: getInfo(),
  };

  render() {
    const { items } = this.state;
    return (
      <div id="Experience" className="text-center p-5 bg-body-secondary">
        <h1>Experience</h1>
        <div className="row ">
          {items.map((m) => (
            <div key={m.name} className="col pt-4 ">
              <Card items={m} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
