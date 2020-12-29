import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {List, ListItem, Tooltip, Button, ButtonGroup} from "@material-ui/core";


import {Apps, ShoppingCart} from "@material-ui/icons";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import CustomButton from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material/components/headerLinksStyle.js";
import useCategories from "../../hooks/category/useCategories";
import {useDispatch} from "react-redux";
import {storeCategories} from "../../store/actions/categories";
import useWindowSize from "../../hooks/page/useWindowSize";

const useStyles = makeStyles(styles);

const HeaderLinks = (props) => {
    const {categories, loading} = useCategories("NORBIKE01");
    const pageSize = useWindowSize();
    const classes = useStyles();
    const dispatch = useDispatch();

    const aria_label = pageSize.width < 1000 ? "split button" : "text primary button group";

    debugger

    useEffect(() => {

        storeCategories(dispatch, categories)
    }, [categories])

    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <ButtonGroup variant="text" color="primary" aria-label={aria_label}>
                    {!loading && categories.map(cat =>
                        (<Button>
                            <Link to={`/${cat.code.toLowerCase()}`} className={classes.dropdownLink}>
                                {cat.name}
                            </Link>
                        </Button>))
                    }
                </ButtonGroup>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="shopping-cart"
                    title="carrito de compras"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <CustomButton
                        color="transparent"
                        target="_blank"
                        href="/shoppingCart"
                        className={classes.navLink}
                    >
                        <ShoppingCart/>
                    </CustomButton>
                </Tooltip>
            </ListItem>

        </List>
    );
}

export default HeaderLinks
