import React from "react";
import PropTypes from "prop-types";

function DrinkDetail(props){
    const { drink } = props;

    return (
      <React.Fragment>
        <h1>Drink Detail</h1>
        <h1>{drink.name}</h1>
        <h1>{drink.location}</h1>
        <p>$ {drink.price} </p>
        <p>{drink.description} </p>
        <hr/>
      </React.Fragment>
    );
  }
  
  DrinkDetail.propTypes = {
    drink: PropTypes.object
  };

export default DrinkDetail;