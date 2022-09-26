import React from "react";
import PropTypes from "prop-types";

function DrinkDetail(props){
    const { drink, onClickingDelete } = props;

    return (
      <React.Fragment>
        
        <h1>Drink Detail</h1>
        <h1>{drink.name}</h1>
        <h1>{drink.location}</h1>
        <p>$ {drink.price} </p>
        <p>{drink.description} </p>
        <button onClick={ props.onClickingEdit }>Update Drink</button>
        <button onClick={()=> props.onClickingDelete(drink.id) }>Delete Drink</button>
        <hr/>
      </React.Fragment>
    );
  }
  
  DrinkDetail.propTypes = {
    drink: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
  };

export default DrinkDetail;