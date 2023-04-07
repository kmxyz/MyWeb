import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../pic/logo.JPG';

class NavBar extends Component {
    state = {  
      navBarItem : ["Home","About Me","Skill","Experience","Contact Me"]
    }

    render() { 
        return (
          <div className='bg-secondary-subtle ' style={{ position: "sticky", top: 0 }}>
            <nav className="navbar" >
              <div className="container-fluid">
                
                <a className="navbar-brand fs-2" href="#">
                  <img src={logo} alt="Logo" width="40" height="40" class="d-inline-block align-text-top rounded-3"/>
                  <span className='border-start border-5'>Mark</span>
                </a>
                <ul className="nav">
                  {this.state.navBarItem.map((item) =>
                  <li key={item} style={{ borderwidth: 10}}className="nav-item" >
                    <a className="nav-link link-dark fs-5"  href="#">
                      {item}
                    </a>
                  </li>)}
                </ul>  
              </div>
            </nav>
          </div>
        );

    }
}

export default NavBar;