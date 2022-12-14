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
import "./NewDrinkForm.css";
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const Styles = styled.section`
  margin-left:100px;
  margin-right:100px;
  font-weight: bold;`

function ReusableForm(props) {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

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
      <div className="detailForm">
      <h1>Update</h1> 
      <Styles>
      <Form onSubmit={props.formSubmissionHandler} autocomplete="off">
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Location:</Form.Label>
      <Form.Control type="text" name="location"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Price:</Form.Label>
      <Form.Control type="text" name="price"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Description:</Form.Label>
      <Form.Control type="text" name="description"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Date:</Form.Label>
      <Form.Control  type="date" name="date"></Form.Control>
      </Form.Group>
      <input id="url" type="hidden" name="url" />

      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}/>
        <Button variant="contained"  onClick={uploadFile}> Upload</Button>
        <br />
        <br />
      <Button variant="contained"  type='submit'>Submit</Button>
      <br />
       </Form>
        </Styles>
        </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
};

export default ReusableForm;