import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      
        <header className="header">
          <h1 className="title">Working Title</h1>
       
        <nav className="navbar">
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/EmployeeRegistry">
                Employee Registry
              </Link>
            </li>
          </ul>
        </nav>
        </header>
    );
  }
}

export default Header;
