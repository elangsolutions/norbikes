import React from 'react'
import _ from 'lodash'
import {useParams, Link, useRouteMatch} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Header from "../../components/Header/Header";
import {makeStyles} from '@material-ui/core/styles';
import {AddBox as ShopIcon} from '@material-ui/icons'
import {GridList, GridListTile, GridListTileBar, IconButton, ListSubheader} from "@material-ui/core";
import Footer from "../../components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1800,
        height: 640,
        '& span': {
            fontFamily: "Muli",
            fontSize: "1.8rem",
            fontWeight: "bold"
        }
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const GridGalleryContainer = (props) => {

    const classes = useStyles();

    const {category} = useParams();
    const { url } = useRouteMatch();
    const categories = useSelector(state => state.landingState.categories);

    const {subCategories = []} = _.find(categories, cat => cat.code === category.toUpperCase()) || {};

    debugger;

    return (<>
        <Header root={false}/>
        <div className={classes.root}>
            <GridList cellHeight={480} className={classes.gridList} spacing={1}>
                {subCategories.map((tile) => (
                    <GridListTile key={tile.id}>
                        <img src={tile.imageUrl} alt={tile.name}/>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>{tile.name}</span>}
                            actionIcon={
                                <Link to={`${url}/${tile.code.toLowerCase()}`}>
                                    <IconButton className={classes.icon}>
                                        <ShopIcon/>
                                    </IconButton>
                                </Link>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
        <Footer/>
    </>)
}


export default GridGalleryContainer;