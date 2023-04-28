import React, { Component } from "react";
import MainPageImg from "../pic/mainpageImg.jpg";
import { Link } from "react-scroll";

class MainPage extends Component {
  render() {
    return (
      <main
        id="/"
        className="d-flex align-items-center justify-content-center justify-content-sm-start pt-5 mt-5 "
      >
        <div className="text-sm-start text-center position-absolute ps-sm-5 ms-sm-5">
          <h5>Software Devloper</h5>
          <h1>Yunzhong(Mark) Xiao</h1>
          <p
            className="text-secondary d-none d-md-block"
            style={{ width: "26em" }}
          >
            Enjoy solving complex problems both independently and
            collaboratively. Enable to write high-quality and clean code.
            Motivated to learn new web design and machine learning technology.
          </p>
          <button className="btn btn-primary my-2">
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
