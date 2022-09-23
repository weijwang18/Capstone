import React from "react";
import PropTypes from "prop-types";
import Drink from "./Drink";

function DrinkList(props){
  return (
    <React.Fragment>
      {props.drinkList.map((drink) =>
        <Drink 
        whenDrinkClicked = { props.onDrinkSelection }
        name = {drink.name}
        price = {drink.price}
        quantity = {drink.quantity}
        id = {drink.id}
        key = {drink.id} />
      )}
    </React.Fragment>
  );
}

DrinkList.propTypes = {
    drinkList: PropTypes.array,
  onDrinkSelection: PropTypes.func
}

export default DrinkList;