import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Game from "./components/Game";
import Button from "./components/Button";

function App() {
  return ( 
    <Router>
      <Nav />
      <div>
        <Route exact path="/" component={Game} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
      </div>
    </Router>
  );
  
}

export default App;