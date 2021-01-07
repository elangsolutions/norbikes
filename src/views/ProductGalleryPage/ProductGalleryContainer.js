import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {useParams} from 'react-router-dom';
import {GridList, Grid, Paper } from "@material-ui/core";
import ProductItem from "./ProductItem";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
    divContainer : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,

    },
    container:{
        display:"flex",
        flexFlow: "row nowrap",
        height: '100%'
    },
    rightContainer:{
        width: "100%",
        height: "450px",
    },
    leftBar: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    paper: {
        width:"250px",
        height:"450px",
    },
}));

const ProductGalleryContainer = (props) => {

    const {subCatId} = useParams()

    const classes = useStyles();

    return (<> <Header root={false}/>
                <Grid container className={classes.container} >
                    <Grid className={classes.leftBar}>
                        <Paper elevation={2} className={classes.paper}/>
                    </Grid>
                    <div className={classes.divContainer}>
                    <GridList  className={classes.rightContainer} spacing={2} cellHeight={"auto"}>
                        {[{},{},{},{},{},{},{},{},{},{},{},{},{},{}].map(o =>(<ProductItem />))}
                    </GridList>
                    </div>
                </Grid>
                <Footer/>
            </>)
}

export default ProductGalleryContainer