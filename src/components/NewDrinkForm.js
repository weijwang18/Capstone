import PropTypes from "prop-types";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./../firebase";
import { format } from 'date-fns';


function NewDrinkForm(props){

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);


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
      <Button type='submit'>Submit</Button>
        </form>

      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
    </React.Fragment>
  );
  

  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({
      name: event.target.name.value, 
      location: event.target.location.value, 
      price: event.target.price.value, 
      description: event.target.description.value,
    });
  }
}

  NewDrinkForm.propTypes = {
    onNewDrinkCreation: PropTypes.func,
  };

export default NewDrinkForm;