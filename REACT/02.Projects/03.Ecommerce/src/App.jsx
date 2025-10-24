import React from "react";
import Header from "./components/Header/Header";
import "./App.css"
import Home from "./components/Home/Home";
import Checkout from "./components/chekout/Checkout";
import {BrowserRouter as Router, Route, Routes,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
