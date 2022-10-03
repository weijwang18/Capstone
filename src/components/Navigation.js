import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return(
   <React.Fragment>
    <h1> Sip ‘n Snap </h1>
    <Nav defaultActiveKey="/" className="flex-column">
          <Link to="/">Home</Link>
          <Link to="/snapNow">Snap Now</Link>
          <Link to="/sign-in">Sign In</Link>
    </Nav>
   </React.Fragment>
  );
}

export default Navigation;