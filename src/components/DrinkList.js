import React from "react";
import PropTypes from "prop-types";
import Drink from "./Drink";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

function DrinkList(props){
  return (
    <React.Fragment>
    {props.drinkList.map((drink) =>
      <List component="nav" aria-label="history">
    <ListItem button>
        <Drink 
        whenDrinkClicked = { props.onDrinkSelection }
        name = {drink.name} 
        price = {drink.price}
        location = {drink.location}
        description = {drink.description}
        id = {drink.id}
        key = {drink.id}
        />
     </ListItem>
      <Divider />
      </List>
      )}
    </React.Fragment>
  );
}

DrinkList.propTypes = {
    drinkList: PropTypes.array,
  onDrinkSelection: PropTypes.func
}

export default DrinkList;