import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import styled from 'styled-components';

const Styles = styled.section`
  background-color: #EBEEF3;
  border-radius: 25px;
  margin-right: 200px;
  text-align:center;
  padding: 10px;
  color: #303e5c;
`

function DrinkDetail(props){
    const { drink } = props;

    return (
      <React.Fragment>
        <Styles>
          <h1>Drink Detail</h1>
          <h2>{drink.name}</h2>
          <h2>{drink.location}</h2>
          <p>{drink.date}</p>
          <p>$ {drink.price} </p>
          <p>{drink.description}</p>
          <p><img src={drink.url} width="300"/></p>
          <Button onClick={ props.onClickingEdit }>Update Drink</Button>
          <Button onClick={()=> props.onClickingDelete(drink.id) }>Delete Drink</Button>
        <hr/>
      </Styles>
      </React.Fragment>
    );
  }
  
  DrinkDetail.propTypes = {
    drink: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
  };

export default DrinkDetail;