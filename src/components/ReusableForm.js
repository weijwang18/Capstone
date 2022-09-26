import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Drink Name' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
                  <input
          type='number'
          name='price'
          placeholder='Price' />
        <textarea
          name='description'
          placeholder='Describe your drink.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;