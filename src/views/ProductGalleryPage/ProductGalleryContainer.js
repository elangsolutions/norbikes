import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {useParams} from 'react-router-dom';
import {Grid, Paper } from "@material-ui/core";
import ProductItem from "./ProductItem";
import Header from "../../components/Header/Header";

const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex",
        flexFlow: "row nowrap"
    },
    rightContainer:{
        display:"flex",
        flexFlow: "row wrap",
        justifyContent: "flex-start"
    },
    leftBar: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    paper: {
        width:"350px",
        height:"850px",
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const ProductGalleryContainer = (props) => {

    const {subCatId} = useParams()

    const classes = useStyles();

    return (<> <Header root={false}/>
                <Grid container className={classes.container}>
                    <Grid className={classes.leftBar}>
                        <Paper elevation={2} className={classes.paper}/>
                    </Grid>
                    <Grid container  className={classes.rightContainer}>
                        {[{},{},{},{},{},{},{},{},{},{},{},{},{},{}].map(o =>(<ProductItem />))}
                    </Grid>
                </Grid>
            </>)
}

export default ProductGalleryContainer