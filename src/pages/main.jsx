import React, { Component } from "react";
import MainPageImg from "../pic/mainpageImg.png";

class MainPage extends Component {
  render() {
    return (
      <main id="/" className="">
        <div className="position-absolute my-5 p-sm-5">
          <div className="text-sm-start text-center my-5 p-sm-5 p-4">
            <h5>Web Devloper</h5>
            <h1>Yunzhong(Mark) Xiao</h1>
            <p className="p-sm-1 p-md-0" style={{ width: "26em" }}>
              Enjoy solving complex problems both independently and
              collaboratively. Enable to write high-quality and clean code.
              Motivated to learn new web design and machine learning technology.
            </p>
            <button className="btn btn-dark">resume</button>
          </div>
        </div>
        <span>
          <img
            src={MainPageImg}
            className=" img-fluid  mx-auto width: 100% m-5"
            alt="bg"
          />
        </span>
      </main>
    );
  }
}

export default MainPage;
