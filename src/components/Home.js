import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

function Home(props){
    return (
      <React.Fragment>
        <div className="angry-grid">
          <div id="item-0">
            <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/047/482/original/njp90YVXq9.png?1664841755" alt="Drinks" width="100%" height="auto" id="drinkCups"></img>
          </div>
          <div id="item-1">
          <Link to="/snapNow"><button>Snap Now</button></Link>
          </div>
          <div id="item-2">
          <Link to="/sign-in"><button>Sign In</button></Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
  
  
  export default Home;