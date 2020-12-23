import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import "./assets/scss/material.scss";

import LandingPage from "./views/LandingPage/LandingPage.js";
import GridGaleryPage from "./views/GridGaleryPage/GridGalleryContainer";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "./apolloClient";
import store from './store/store'

const hist = createBrowserHistory();


ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={apolloClient}>
            <Router history={hist}>
                <Switch>
                    <Route path="/" exact component={LandingPage}/>
                    <Route path={"/:category"} component={GridGaleryPage}/>
                </Switch>
            </Router>
        </ApolloProvider>
    </Provider>,
    document.getElementById("root")
);
