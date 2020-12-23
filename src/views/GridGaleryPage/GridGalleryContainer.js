import React from 'react'
import _ from 'lodash'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Header from "../../components/Header/Header";
import {makeStyles} from '@material-ui/core/styles';
import {GridList, GridListTile} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const GridGalleryContainer = (props) => {

    const classes = useStyles();

    const {category} = useParams();
    const categories = useSelector(state => state.landingState.categories) ;

    const {subCategories}  = categories.find(  cat => cat.code === category.toUpperCase());
    debugger
    return (<>
        <Header root={false}/>
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {subCategories.map((tile) => (
                    <GridListTile key={tile.code} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.name}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    </>)
}


export default GridGalleryContainer;