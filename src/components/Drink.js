import React from "react";
import PropTypes from "prop-types";

function Drink(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenDrinkClicked(props.id)}>
      <div className="list">
        <h1>{props.date} </h1>
        <h2>😋 {props.name} </h2>
      </div>
      </div>
    </React.Fragment>
  );
}

Drink.prototype = {
  name: PropTypes.string,
  price: PropTypes.number,
  location: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func
}

export default Drink;