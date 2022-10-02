import React from "react";
import NewDrinkForm from "./NewDrinkForm";
import DrinkList from "./DrinkList";
import DrinkDetail from './DrinkDetail';
import EditDrinkForm from './EditDrinkForm';
import { Button } from "@mui/material";
import { useState, useEffect } from 'react';
import db from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

function DrinkControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainDrinkList, setMainDrinkList] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const unSubscribe = onSnapshot(
      collection(db, "drinks"), 
      (collectionSnapshot) => {
        const drinks = [];
        collectionSnapshot.forEach((doc) => {
            drinks.push({
              name: doc.data().name, 
              price: doc.data().price,
              location: doc.data().location, 
              description: doc.data().description, 
              id: doc.id
            });
        });
        setMainDrinkList(drinks);
      }, 
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleClick = () => {
    if (selectedDrink != null) {
      setFormVisibleOnPage(false);
      setSelectedDrink(null);
      setEditing(false);
    } else {
        setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleChangingSelectedDrink = (id) => {
    const selection = mainDrinkList.filter(drink => drink.id === id)[0];
    setSelectedDrink(selection);
  }

  const handleAddingNewDrinkToList = async (newDrinkData) => {
    const collectionRef = collection(db, "drinks");
    await addDoc(collectionRef, newDrinkData);
    setFormVisibleOnPage(false);
  }

  const handleEditingDrinkInList = async (drinkToEdit) => {
    const drinkRef = doc(db, "drinks", drinkToEdit.id);
    await updateDoc(drinkRef, drinkToEdit);
    setEditing(false);
    setSelectedDrink(null);
  }

  const handleDeletingDrink = async (id) => {
    await deleteDoc(doc(db, "drinks", id));
    setSelectedDrink(null);
  } 

    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing ) {      
      currentlyVisibleState = <EditDrinkForm drink = {selectedDrink} onEditDrink = {handleEditingDrinkInList}/>
      buttonText = "Return to Drink List";
    } else if (selectedDrink != null) {
      currentlyVisibleState = <DrinkDetail drink = {selectedDrink} onClickingDelete = {handleDeletingDrink} onClickingEdit = {handleEditClick}/>
      buttonText = "Return to Drink List";}
    else if (formVisibleOnPage){
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation={handleAddingNewDrinkToList}/>;
      buttonText = "Return to Drink List";
    } else { 
      currentlyVisibleState = <DrinkList onDrinkSelection = {handleChangingSelectedDrink}  drinkList={mainDrinkList}/>;
      buttonText = "Add Drink";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }


export default DrinkControl;