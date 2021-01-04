import React from 'react'
import {useParams} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper, Container, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: 'row'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const LeftContainer = () => {

    return (<><Container>
                 <Typography component="div" style={{backgroundColor: '#3c3f41', height: '100vh'}}/>
                </Container>
            </>)
}

const ProductGalleryContainer = (props) => {
    const {subCatId} = useParams()

    const classes = useStyles();

    const FormRow = () => {

        return (
            <>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
            </>
        );
    }

    return (<>
        <Grid container className={classes.root}>
            <LeftContainer/>
            <Grid container spacing={1}>
                <Grid container item xs={3} spacing={1}>
                    <FormRow/>
                </Grid>
            </Grid>
        </Grid>
    </>)
}

export default ProductGalleryContainer