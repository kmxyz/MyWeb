import React, { Component } from "react";

class ContactMe extends Component {
  state = {
    colors: "text-secondary",
  };

  headleOn = () => {
    this.setState({ colors: "text-primary" });
  };

  headleLeave = () => {
    this.setState({ colors: "text-secondary" });
  };

  render() {
    return (
      <div
        id="Contact"
        className="row d-flex flex-wrap justify-content-between align-items-center py-3 my-4"
      >
        <div className="col-8 col-md-6 text-start ps-5 ms-5">
          <h2 className="text-primary ">Contact me !</h2>
          <p className="text-secondary ">Let me be part of your team</p>
        </div>
        <div className="col mx-sm-5">
          <div className="d-flex align-items-center justify-content-md-end ps-5 ms-2 ps-sm-0">
            <span className=" shadow rounded-circle p-3 m-3">
              <i className="fa fa-envelope fa-lg text-primary"></i>
            </span>
            <div className="text-start">
              <h4>E-mail</h4>
              <a
                href="mailto: markxiao66@gmail.com"
                className={" text-decoration-none " + this.state.colors}
                onMouseEnter={this.headleOn}
                onMouseLeave={this.headleLeave}
              >
                markxiao66@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
