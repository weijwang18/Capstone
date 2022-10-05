import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

function DrinkDetail(props){
    const { drink } = props;

    return (
      <React.Fragment>
          <h1>Drink Detail</h1>
          <h1>{drink.name}</h1>
          <h1>{drink.location}</h1>
          <p>$ {drink.price} </p>
          <p>{drink.description}</p>
          <p><img src={drink.url} width="300"/></p>
          <Button onClick={ props.onClickingEdit }>Update Drink</Button>
          <Button onClick={()=> props.onClickingDelete(drink.id) }>Delete Drink</Button>
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