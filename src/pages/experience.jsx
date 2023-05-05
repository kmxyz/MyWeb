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
        <h1 className="border-bottom pb-2">Experience</h1>
        <div className="row g-3">
          {items.map((m) => (
            <div key={m.name} className="col-lg-3 col-md-6 ">
              <Card items={m} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
