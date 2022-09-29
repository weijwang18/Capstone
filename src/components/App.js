import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import DrinkControl from "./DrinkControl";
import Navigation from "./Navigation/Navigation";
import NewDrinkForm from './NewDrinkForm';
import DrinkList from './DrinkList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='app'>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<DrinkControl />} />
          <Route path="/snapNow" element={<NewDrinkForm />} />
          <Route path="/histroy" element={<DrinkList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;