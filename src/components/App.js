import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import DrinkControl from "./DrinkControl";
import Navigation from "./Navigation/Navigation";
import NewDrinkForm from './NewDrinkForm';
import DrinkList from './DrinkList';
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<DrinkControl />} />
          <Route path="/snapNow" element={<NewDrinkForm />} />
          <Route path="/histroy" element={<DrinkList />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
    </Router>
  );
}

export default App;