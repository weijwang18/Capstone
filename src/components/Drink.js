import React from "react";
import PropTypes from "prop-types";

function Drink(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenDrinkClicked(props.id)}>
        <h1>{props.name}</h1>
        <p>{props.location}</p>
        <p>$ {props.price} </p>
        <p>{props.description}</p>
        <p>{props.url}</p>
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
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func
}

export default Drink;