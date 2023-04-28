import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4 border-top">
        <div className="row">
          <div className="col-12 col-md-6 text-md-start ">
            <span className="mb-3 mb-md-0 text-body-secondary">
              Copyright &copy; 2023. All rights are reserved
            </span>
          </div>

          <div className="col pt-3 p-md-0">
            <ul className="nav d-flex justify-content-center justify-content-md-end">
              <li className="ms-3">
                <a
                  className="text-body-secondary "
                  href="https://linkedin.com/in/yunzhong-xiao/"
                >
                  <i className="fa fa-linkedin fa-lg"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://github.com/kmxyz"
                >
                  <i className="fa fa-github fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
