import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function Home(){
    return (
      <React.Fragment>
        <div className="angry-grid">
          <div id="item-0">
            <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/047/482/original/njp90YVXq9.png?1664841755" alt="Drinks" width="100%" height="auto" id="drinkCups"></img>
          </div>
          <div id="item-1">
          <Link to="/snapNow"><Button variant="contained" size="large">Snap Now</Button></Link>
          <Link to="/sign-in"><Button variant="contained" size="large">Sign In</Button></Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
  
  export default Home;