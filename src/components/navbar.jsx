import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../pic/logo.JPG';

class NavBar extends Component {
    state = {  
      navBarItem : ["Home","About Me","Skill","Experience","Contact Me"]
    }
    render() { 
        return (
          <nav className="navbar navbar-expand-lg fixed-top shadow-sm p-3 mb-3 bg-body-tertiary rounded" >
            <div className="container-fluid ">               
              <a className="navbar-brand fs-2" href="#">
                <img src={logo} style={{marginLeft : "20px"}} alt="Logo" width="40" height="40" className="d-inline-block align-text-top rounded-3"/>
                <span className='border-start border-5'>Developer Mark</span>
              </a>
              <ul className="nav">
                {this.state.navBarItem.map((item) =>
                <li key={item} style={{ marginLeft: "30px"}}className="nav-item" >
                  <a className="nav-link link-dark fs-5"  href="#">
                    {item}
                  </a>
                </li>)}
              </ul>  
            </div>
          </nav>
        );

    }
}

export default NavBar;