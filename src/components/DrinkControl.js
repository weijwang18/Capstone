import React from "react";
import NewDrinkForm from "./NewDrinkForm";
import DrinkList from "./DrinkList";
import DrinkDetail from './DrinkDetail';
import EditDrinkForm from './EditDrinkForm';
import { Button } from "@mui/material";
import React, { useState } from 'react';

function DrinkControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainDrinkList, setMainDrinkList] = useState([]);

  const handleEditClick = () => {
    if (this.state.selectedDrink != null) {
      setFormVisibleOnPage(false);  
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null,
      });
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  const handleChangingSelectedDrink = (id) => {
    const selectedDrink = this.state.mainDrinkList.filter(drink => drink.id === id)[0];
    this.setState({selectedDrink: selectedDrink});
  }

  const handleAddingNewDrinkToList = (newDrink) => {
    const newMainDrinkList = this.state.mainDrinkList.concat(newDrink);
    this.setState({mainDrinkList: newMainDrinkList});
      setFormVisibleOnPage(false)
  }

  const handleEditingDrinkInList = (drinkToEdit) => {
    const editedMainDrinkList = this.state.mainDrinkList
      .filter(drink => drink.id !== this.state.selectedDrink.id)
      .concat(drinkToEdit);
    this.setState({
        mainDrinkList: editedMainDrinkList,
        editing: false,
        selectedDrink: null
      });
  }

  const handleDeletingDrink = (id) => {
    const newMainDrinkList = this.state.mainDrinkList.filter(drink => drink.id !== id);
    setMainDrinkList(newMainDrinkList);
  } 

    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditDrinkForm drink = {this.state.selectedDrink} onEditDrink = {this.handleEditingDrinkInList}/>
      buttonText = "Return to Drink List";
    } else if (this.state.selectedDrink != null) {
      currentlyVisibleState = <DrinkDetail drink = {selectedDrink} onClickingDelete = {this.handleDeletingDrink} onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Drink List";}
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToList}/>;
      buttonText = "Return to Drink List";
    } else { 
      currentlyVisibleState = <DrinkList drinkList = {this.state.mainDrinkList} onDrinkSelection={this.handleChangingSelectedDrink} />;
      buttonText = "Add Drink";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button onClick = {this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }


export default DrinkControl;