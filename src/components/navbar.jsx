import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../pic/logo.JPG";
import { Link } from "react-scroll";

class NavBar extends Component {
  state = {
    navBarItem: ["Home", "About Me", "Skill", "Experience", "Contact Me"],
    sectionPage: ["/", "about", "Skill", "Experience", "Contact"],
  };
  render() {
    return (
      <nav className="navbar fixed-top shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="container-fluid">
          <a className="navbar-brand fs-2" href="#">
            <img
              src={logo}
              style={{ marginLeft: "20px" }}
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top rounded-3"
            />
            <span className="p-2">Devloper world</span>
          </a>
          <ul className="nav">
            {this.state.navBarItem.map((item) => (
              <li
                key={item}
                style={{ marginLeft: "30px" }}
                className="nav-item"
              >
                <Link
                  smooth={true}
                  offset={-100}
                  duration={-5000}
                  className="nav-link link-dark fs-5"
                  to={
                    this.state.sectionPage[this.state.navBarItem.indexOf(item)]
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
