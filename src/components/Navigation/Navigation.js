import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
  return(
   <React.Fragment>
    <h1> Sip ‘n Snap </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
    </ul>
   </React.Fragment>
  );
}

export default Navigation;