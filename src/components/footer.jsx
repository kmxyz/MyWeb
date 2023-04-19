import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary ">
            Copyright &copy; 2023. All rights are reserved
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary "
              href="https://linkedin.com/in/yunzhong-xiao/"
            >
              <i class="fa fa-linkedin fa-lg "></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://github.com/kmxyz">
              <i class="fa fa-github fa-lg	"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
