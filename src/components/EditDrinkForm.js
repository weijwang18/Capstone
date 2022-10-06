import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditDrinkForm (props) {
    const { drink } = props;

    function handleEditDrinkFormSubmission(event) {
      event.preventDefault();
      props.onEditDrink({name: event.target.name.value, location: event.target.location.value, price: event.target.price.value, description: event.target.description.value, id: drink.id});
    }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditDrinkFormSubmission}
        buttonText="Update Drink" />
    </React.Fragment>
  );
}

EditDrinkForm.propTypes = {
    drink: PropTypes.object,
    onEditDrink: PropTypes.func
  };

export default EditDrinkForm;