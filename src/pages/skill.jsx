import React, { Component } from "react";
import Html from "../pic/lang/html.png";
import JavaScript from "../pic/lang/JavaScript.png";
import Css from "../pic/lang/css.png";
import Git from "../pic/lang/git.png";
import Python from "../pic/lang/python.png";
import Java from "../pic/lang/java.png";

import MySql from "../pic/software/mysql.png";
import Github from "../pic/software/github.png";
import VisualStudio from "../pic/software/visualstudio.svg";
import AzureDevOps from "../pic/software/AzureDevOps.png";
import Firebase from "../pic/software/Firebase.png";
import Docker from "../pic/software/Docker.jpg";

class Skill extends Component {
  state = {
    imgLanguageInfo: [
      { name: "html", url: Html },
      { name: "css", url: Css },
      { name: "javascript", url: JavaScript },
      { name: "java", url: Java },
      { name: "python", url: Python },
      { name: "git", url: Git },
    ],
    imgSoftwareInfo: [
      { name: "MySQL Workbench", url: MySql },
      { name: "GitHub", url: Github },
      { name: "Visual Studio Code", url: VisualStudio },
      { name: "Azure DevOps", url: AzureDevOps },
      { name: "Firebase", url: Firebase },
      { name: "Docker", url: Docker },
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
              {this.state.imgSoftwareInfo.map((item) => (
                <li key={item.name}>
                  <img
                    src={item.url}
                    alt={item.name}
                    className="img-fluid rounded-2 m-sm-3 m-lg-4 m-2"
                    style={{ width: "80px" }}
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
                    className="img-fluid rounded-2 m-sm-3 m-lg-4 m-2"
                    style={{ width: "80px" }}
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
