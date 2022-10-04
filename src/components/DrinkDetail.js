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
          <p>{drink.description} </p>
          <p><img src="https://firebasestorage.googleapis.com/v0/b/sip-and-snap.appspot.com/o/images%2Fb7106f01-e497-4666-a982-f83f8428b78f?alt=media&token=bbcf435b-27e8-4956-978d-ee317a028bf5" width="300"></img></p>
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