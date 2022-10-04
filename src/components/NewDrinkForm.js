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
    const fetchImages = async () => {
      let result = await storage.ref().child(`images/${v4()}`).listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setFiles(urls);
    };
    loadImages();
}, []);

  console.log(files);

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
        <input type="text" name="name" />
      </label>
      <label>
        Price:
        <input type="number" name="name" />
      </label>
      <label>
        Description:
        <input type="description" name="name" />
      </label>
      <input type="hidden" name="url" id="url" />
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
          <button onClick={uploadFile}> Upload Image</button>
        }}
      />
      <Button type='submit' onClick={uploadFile} >Submit</Button>
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