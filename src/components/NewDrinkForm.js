import PropTypes from "prop-types";
import * as React from 'react';
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
import DatePicker from "react-datepicker";

function NewDrinkForm(props){
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        document.getElementById("url").value=url;
        console.log(document.getElementById("url").value);
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
      <h1>Detail</h1>
              <Button variant="contained"  onClick={uploadFile}> Upload</Button>
        <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
        />
        <form onSubmit={handleNewDrinkFormSubmission}>
      <label>
        Name:
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
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} ></DatePicker>
      <input id="url" type="hidden" name="url" />
      <br />
      <Button variant="contained"  type='submit' >Submit</Button>
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