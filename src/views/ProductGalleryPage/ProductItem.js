import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import baseFoto from '../../assets/img/products/bikes/foto3.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 228,
        height: 228,
    },
    img: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const ProductGrid = ({data={}}) => {

    const {imageUrl,description, details, code, price} = data;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={imageUrl || baseFoto} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={1}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {description || "Sin descripcion"}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {details || "Sin detalle"}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {code || "Sin cod"}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1"> {price || "$1.111,00"}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default ProductGrid
