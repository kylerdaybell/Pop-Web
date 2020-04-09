import React from 'react';
import './Assets/CSS/App.css';
import { Route, Switch } from "react-router";
import Navbar from "./Components/Partials/Navbar";
import HomePage from "./Components/Pages/Home"
import NotFoundPage from "./Components/Pages/NotFound"


function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/404" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
