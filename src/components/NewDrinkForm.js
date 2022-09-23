import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewDrinkForm(props){
  return (
    <React.Fragment>
        <form onSubmit={handleNewDrinkFormSubmission}>
          <input
            type = 'text'
            name = 'name' 
            placeholder = 'Drink Name' />
          <input
           type = "number"
           name = 'location'
           placeholder = 'Location' />
        <input
            type = "number"
            name = 'price' 
            placeholder = 'Price' />
        <input
           type = "number"
           name = 'description'
           placeholder = 'Description' />
          <button type='submit'>Submit</button>
        </form>
    </React.Fragment>
  );
  

  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({
      name: event.target.name.value, 
      quantity: event.target.quantity.value, 
      price: event.target.price.value, 
      id: v4()
    });
  }
};
  NewDrinkForm.propTypes = {
    onNewDrinkCreation: PropTypes.func,
  };

export default NewDrinkForm;