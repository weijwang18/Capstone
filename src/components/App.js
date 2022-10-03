import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import DrinkControl from "./DrinkControl";
import Navigation from "./Navigation";
import SignIn from "./SignIn";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="left">
      <Navigation />
      </div>
      <div className="right">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/snapNow" element={<DrinkControl />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;