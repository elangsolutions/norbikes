import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "./assets/scss/material.scss";

import LandingPage from "./views/LandingPage/LandingPage.js";
import GridGaleryPage from "./views/GridGaleryPage/GridGalleryContainer";


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path={"/bikes"} component ={GridGaleryPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
