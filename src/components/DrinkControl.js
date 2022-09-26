import React from "react";
import NewDrinkForm from "./NewDrinkForm";
import DrinkList from "./DrinkList";
import DrinkDetail from './DrinkDetail';

class DrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnpage: false,
      mainDrinkList: [],
      selectedDrink: null
    };
  }

  handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedDrink = (id) => {
    const selectedDrink = this.state.mainDrinkList.filter(drink => drink.id === id)[0];
    this.setState({selectedDrink: selectedDrink});
  }

  handleAddingNewDrinkToList = (newDrink) => {
    const newMainDrinkList = this.state.mainDrinkList.concat(newDrink);
    this.setState({mainDrinkList: newMainDrinkList,
                  formVisibleOnPage: false });
  }

  handleDeletingDrink = (id) => {
    const newMainDrinkList = this.state.mainDrinkList.filter(drink => drink.id !== id);
    this.setState({
     mainDrinkList: newMainDrinkList,
      selectedDrink: null
    });
  } 

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedDrink != null) {
      currentlyVisibleState = <DrinkDetail drink = {this.state.selectedDrink} onClickingDelete = {this.handleDeletingDrink}/>
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
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default DrinkControl;