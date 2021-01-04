import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createBrowserHistory} from "history";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "./apolloClient";
import {Router} from "react-router-dom";
import "./assets/scss/material.scss";

import store, {saveState} from './store/store'
import RootRouter from './Router'



store.subscribe(function () {
    let state = store.getState();
    saveState('landingState', state)
})


const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={apolloClient}>
            <Router history={hist}>
             <RootRouter/>
            </Router>
        </ApolloProvider>
    </Provider>,
    document.getElementById("root")
);


