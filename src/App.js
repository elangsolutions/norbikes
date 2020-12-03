import './App.css';
import React from "react";
import {createBrowserHistory} from "history";
import {Route, Router} from "react-router-dom";
import LandingPage from "./modules/landing/LandingPage";

const history = createBrowserHistory()

const App = () => {
    return (
        <Router history={history}>
            <Route  path={'/'} component={LandingPage}/>
        </Router>
    );
}

export default App;
