import React, { Component } from "react";
import MainPageImg from "../pic/mainpageImg.png";
import { Link } from "react-scroll";

class MainPage extends Component {
  render() {
    return (
      <main
        id="/"
        className="d-flex align-items-md-center align-items-end justify-content-center justify-content-sm-start pt-5 mt-4 "
      >
        <div className="text-sm-start text-center position-absolute ps-sm-5 ms-sm-5">
          <h5>Software Devloper</h5>
          <h1>Yunzhong(Mark) Xiao</h1>
          <p className="" style={{ width: "26em" }}>
            Enjoy solving complex problems both independently and
            collaboratively. Enable to write high-quality and clean code.
            Motivated to learn new web design and machine learning technology.
          </p>
          <button className="btn btn-dark">
            <Link
              style={{ cursor: "pointer" }}
              smooth={true}
              offset={-100}
              duration={-5000}
              to="about"
            >
              View More
            </Link>
          </button>
        </div>

        <span>
          <img
            src={MainPageImg}
            className=" img-fluid  mx-auto width: 100% mt-5"
            alt="bg"
          />
        </span>
      </main>
    );
  }
}

export default MainPage;
