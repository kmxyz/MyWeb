import React, { Component } from "react";
import Test from "../pic/lang/test.JPG";

class Skill extends Component {
  state = {
    imgLanguageInfo: [
      { name: "html", url: Test },
      { name: "css", url: Test },
      { name: "javascript", url: Test },
      { name: "java", url: Test },
      { name: "python", url: Test },
      { name: "git", url: Test },
    ],
    imgSoftwareInfo: [
      { name: "MySQL Workbench", url: Test },
      { name: "GitHub", url: Test },
      { name: "Visual Studio Code", url: Test },
      { name: "Azure DevOps", url: Test },
      { name: "Firebase", url: Test },
      { name: "Docker", url: Test },
    ],
  };

  render() {
    return (
      <div id="Skill">
        <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Software</h2>
            <p className="lead">My Current Software Toolkit.</p>
          </div>
          <div
            className="bg-body-tertiary shadow-sm mx-auto rounded-top-5 border-bottom"
            style={{
              width: "80%",
              height: "300px",
            }}
          >
            <ul className="d-flex justify-content-center py-sm-5 h-100 align-items-center flex-wrap pe-4">
              {this.state.imgLanguageInfo.map((item) => (
                <li key={item.name}>
                  <img
                    src={item.url}
                    alt={item.name}
                    className="img-fluid rounded-circle m-sm-2 m-lg-3 m-1"
                    style={{ width: "100px" }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden ">
          <div className="my-3 p-3">
            <h2 className="display-5">Language</h2>
            <p className="lead">My Current Programming Language Skills.</p>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto rounded-top-5 "
            style={{
              width: "80%",
              height: "300px",
            }}
          >
            <ul className="d-flex justify-content-center py-sm-5 h-100 align-items-center flex-wrap pe-4">
              {this.state.imgLanguageInfo.map((item) => (
                <li key={item.name}>
                  <img
                    src={item.url}
                    alt={item.name}
                    className="img-fluid rounded-circle m-sm-2 m-lg-3 m-1"
                    style={{ width: "100px" }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
