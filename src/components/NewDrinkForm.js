import PropTypes from "prop-types";
import { v4 } from 'uuid';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


function NewDrinkForm(props){
  return (
    <React.Fragment>
        <form onSubmit={handleNewDrinkFormSubmission}>
        <Typography variant="h6" gutterBottom>
        Detail
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
          type = 'text'
            name="name"
            label="Drink Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          type = 'text'
          name ="location"
          label="Location"
          fullWidth
          variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          type = 'number'
          name="price"
          label="Price"
          fullWidth
          variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          type = 'text'
          name="description"
          label="Description"
          fullWidth
          variant="standard"
          />
        </Grid>
      </Grid>
      <button type='submit'>Submit</button>
        </form>
    </React.Fragment>
  );
  

  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({
      name: event.target.name.value, 
      location: event.target.location.value, 
      price: event.target.price.value, 
      description: event.target.description.value,
      id: v4()
    });
  }
};
  NewDrinkForm.propTypes = {
    onNewDrinkCreation: PropTypes.func,
  };

export default NewDrinkForm;