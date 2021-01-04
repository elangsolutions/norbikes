import React from "react";
import {Route, Switch} from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage";
import GridGalleryPage from "./views/GridGalleryPage/GridGalleryContainer";
import ProductGalleryPage from "./views/ProductGalleryPage/ProductGalleryContainer"


const RouterApp = (props) => {


    return (
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path={"/:category"} exact component={GridGalleryPage}/>
            <Route path={"/:category/:subCatId"} exact component={ProductGalleryPage}/>
        </Switch>
    )
}


export default RouterApp