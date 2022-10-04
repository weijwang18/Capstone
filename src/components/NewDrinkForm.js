import PropTypes from "prop-types";
import * as React from 'react';
import Typography from '@mui/material/Typography';
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

function NewDrinkForm(props){

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${v4()}`);
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
      <label>
        Drink Name:
        <input type="text" name="name" />
      </label>
      <label>
        Location:
        <input type="text" name="location" />
      </label>
      <label>
        Price:
        <input type="number" name="price" />
      </label>
      <label>
        Description:
        <input type="text" name="description"/>
      </label>
      <input type="hidden" name="url"/>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
        />
        <button onClick={uploadFile}> Upload Image</button>
      <Button type='submit' >Submit</Button>
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
      url: event.target.url.value
    });
  }
}

  NewDrinkForm.propTypes = {
    onNewDrinkCreation: PropTypes.func,
  };

export default NewDrinkForm;