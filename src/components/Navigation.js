import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';


const Styles = styled.section`
 font-size: 24px;
 Color: Orange;
 background-color:yellow;
 height: 100%;`

function Navigation() {
  return(
   <React.Fragment>
    <Styles>
    <h1> Sip ‘n Snap </h1>
    <Nav defaultActiveKey="/" className="flex-column">
          <Link to="/">Home</Link>
          <Link to="/snapNow">Snap Now</Link>
          <Link to="/sign-in">Sign In</Link>
    </Nav>
    </Styles>
   </React.Fragment>
  );
}

export default Navigation;