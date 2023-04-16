import React, { Component } from 'react';
import Infopic from'../pic/infopic.JPG'

class AboutMe extends Component {
    state = { 
        pStyle : {
            width: "40em",
            marginTop : "30px"
        },
        contentMargin :{
            margin : "20px"
        },
        pInfoStyle :{
            marginTop : "20px"
        },
        infoElement : [
            ["Name", "Yunzhong(Mark) Xiao"],
            ["Location" , "Halifax NS"], 
            ["Phone", "902-579-9586"],
            ["Email", "markxiao66@gmail.com"]
        ]
    }

    render() { 
        return (
            <div className="container text-center" style={{margin : '70px 100px'}}>
                <div className="row">
                    <div className="col-5" style={{marginTop : "80px"}}>
                        <img src={Infopic} alt="Logo" width="400" height="400" className="d-inline-block align-text-top rounded-5"/>
                        <h3 style={this.state.contentMargin}>Mark Xiao</h3>
                    </div>
                <div className="col">
                    <div className="col">
                        <div className='text-start'>
                            <h1>About Me</h1>
                            <p style={this.state.pStyle}>
                                Hi, I am Yunzhong(Mark) Xiao Xiao. I recently graduated from Dal 
                                as a computer science student and obtained two certificates in Data Science and 
                                Artificial Intelligence & Intelligent Systems. I am deeply passionate about coding web 
                                application and anything related to data analytics. I have a high level 
                                of proficiency in Python, SQL, Java, and React and am able to write high-quality code.
                            </p>
                            <p style={this.state.pStyle}>
                                With my expertise, I can help businesses make timely and informed decisions based on
                                data analysis. I am constantly seeking ways to grow and improve in my field. I'm excited about 
                                the prospect of exploring any opportunities that may be available, 
                                and I welcome the chance to discuss my qualifications with you further.
                            </p>
                        </div>
                    </div>
                    <div className="col" style={{marginTop : "30px"}}>
                        <div className='text-start'>
                            <h3>Personal Info</h3>
                            <div className="row row-cols-2">
                                {this.state.infoElement.map(x => (
                                    <div key = {x[0]} className="col" style={this.state.pInfoStyle}>
                                        <span className='fw-bold'>{x[0]} :</span> <span>{x[1]}</span>
                                    </div>))}
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