import React from 'react'
import Header from "../../components/Header/Header";
import{GridList, GridListTile} from "@material-ui/core";

const GridGalleryContainer = (props) => {

    const {category} = useLocation();

    const {data} = useProducts({category: kind})


    return (<>
        <Header root = {false}/>
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    </>)
}


export default GridGalleryContainer;