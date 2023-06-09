import React, { Component } from "react";
import Infopic from "../pic/infopic.JPG";

class AboutMe extends Component {
  state = {
    infoElement: [
      ["Name", "Yunzhong(Mark) Xiao"],
      ["Location", "Halifax NS"],
      ["Hobby", "Basketball, Travel"],
      ["Language", "English, Chinese"],
      ["GitHub", "github.com/kmxyz"],
      ["Linkedin", "linkedin.com/in/yunzhong-xiao/"],
    ],
  };

  render() {
    return (
      <div id="about" className="container my-5 border-bottom">
        <div className="row">
          <div className="col-lg-5 pt-5">
            <img
              src={Infopic}
              alt="Logo"
              width="400"
              height="400"
              className="rounded-5 mb-3"
            />
            <h3 className="py-3">Mark Xiao</h3>
          </div>
          <div className="col-lg-7 pb-4 pe-4 ps-md-5">
            <div className="col">
              <div className="text-start">
                <h1>About Me</h1>
                <p className=" my-4 text-secondary-emphasis">
                  Hello, my name is Yunzhong (Mark) Xiao and I recently
                  completed my Computer Science degree at Dalhousie University.
                  In particular, I earned two certifications in Data Science as
                  well as Artificial Intelligence & Intelligent Systems. As you
                  might notice from this website, my passion lies in developing
                  web applications and engaging in data analytics tasks. When it
                  comes to creating something with 1s and 0s, I love Python,
                  SQL, Java, and React.
                </p>
                <p className="my-4 text-secondary-emphasis">
                  I have worked on projects that help businesses to make
                  well-informed decisions with comprehensive data analysis.
                  Please go check out the website I created for them on my
                  github I would love to hear what you think. Right now, I’m
                  actively seeking opportunities to expand my knowledge, don’t
                  be shy and drop me a line.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="text-start">
                <h3>Personal Info</h3>
                <div className="row row-cols-2 ">
                  {this.state.infoElement.map((x) => (
                    <div key={x[0]} className="col my-3">
                      <span className="fw-bold">{x[0]} :</span>{" "}
                      <span className="text-secondary-emphasis">{x[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
