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
          <div className="row ">
            <div className="col col-xs-2 ps-5 ms-4 ps-sm-0 ms-sm-0 d-flex align-items-center ">
              <span className=" shadow rounded-circle p-3 m-3">
                <i className="fa fa-phone fa-lg text-primary "></i>
              </span>
              <div className="text-start pt-2">
                <h4>Phone</h4>
                <p className="text-secondary">902-579-9586</p>
              </div>
            </div>
            <div className="col ps-5 ms-4 ps-sm-0 ms-sm-0 d-flex align-items-center">
              <span className=" shadow rounded-circle p-3 m-3">
                <i className="fa fa-phone fa-lg text-primary"></i>
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
      </div>
    );
  }
}

export default ContactMe;
