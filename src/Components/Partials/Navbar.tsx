import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
      return (
        <div className="nav">
          <ul>
            <li><NavLink className="home" to="/">Pop</NavLink></li>
          </ul>
        </div>
      );
    }
  }

export default Navbar;