import React from "react";
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return(
    
    <div className="headerStyle">
      <Nav defaultActiveKey="/" className="flex-column">
      <h4><NavLink to="/" className="headerStyle">Home</NavLink></h4>
      <h4><NavLink to="/snapNow" className="headerStyle" >Snap Now</NavLink></h4>
      <h4><NavLink to="/histroy" className="headerStyle">History</NavLink></h4>
    </Nav>
    </div>
  );
}

export default Navigation;