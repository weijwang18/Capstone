import React from "react";
import PropTypes from "prop-types";
import Drink from "./Drink";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';

const Styles = styled.section`
  background-color: #EBEEF3;
  margin-right: 200px;
  border-radius: 25px;
`

function DrinkList(props){
  return (
    <React.Fragment>
      <Styles>
    {props.drinkList.map((drink) =>
      <List component="nav" aria-label="history">
    <ListItem button>
        <Drink 
        whenDrinkClicked = { props.onDrinkSelection }
        name = {drink.name} 
        price = {drink.price}
        location = {drink.location}
        description = {drink.description}
        date = {drink.date}
        id = {drink.id}
        key = {drink.id}
        />
     </ListItem>
      <Divider />
      </List>
      )}
      </Styles>
    </React.Fragment>
  );
}

DrinkList.propTypes = {
  drinkList: PropTypes.array,
  onDrinkSelection: PropTypes.func
}

export default DrinkList;