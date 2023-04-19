import React, { Component } from "react";

import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

class ContactMe extends Component {
  state = {};
  render() {
    return (
      <div id="Contact" className="mt-5">
        <div className="text-start ms-5 ps-4 ">
          <h2 className="text-primary">Contact me !</h2>
          <p className="text-secondary">Let me be part of your business !</p>
        </div>
      </div>
    );
  }
}

export default ContactMe;
