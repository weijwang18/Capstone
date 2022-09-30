import React from "react";
import NewDrinkForm from "./NewDrinkForm";
import DrinkList from "./DrinkList";
import DrinkDetail from './DrinkDetail';
import EditDrinkForm from './EditDrinkForm';
import { Button } from "@mui/material";
import { useState } from 'react';
import db from './../firebase.js';
import { collection, addDoc } from "firebase/firestore";

function DrinkControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainDrinkList, setMainDrinkList] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [editing, setEditing] = useState(false);

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

  const handleEditingDrinkInList = (drinkToEdit) => {
    const editedMainDrinkList = mainDrinkList
      .filter(drink => drink.id !== selectedDrink.id)
      .concat(drinkToEdit);
    setMainDrinkList(editedMainDrinkList);
    setEditing(false);
    setSelectedDrink(null);
  }

  const handleDeletingDrink = (id) => {
    const newMainDrinkList = mainDrinkList.filter(drink => drink.id !== id);
    setMainDrinkList(newMainDrinkList);
    setSelectedDrink(null);
  } 

    let currentlyVisibleState = null;
    let buttonText = null;

    if (editing ) {      
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
        <Button onClick = {handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }


export default DrinkControl;