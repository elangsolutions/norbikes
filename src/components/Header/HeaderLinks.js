
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {List,ListItem,Tooltip} from "@material-ui/core";


import {Apps, WhatsApp as WhatsAppIcon} from "@material-ui/icons";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material/components/headerLinksStyle.js";
import useCategories from "../../hooks/category/useCategories";
import {useDispatch} from "react-redux";
import {actions} from "../../store/actions/categories";

const useStyles = makeStyles(styles);

const HeaderLinks = (props) => {
    const {categories, loading} = useCategories("NORBIKE01");
    const classes = useStyles();

    useEffect(() => {
        useDispatch({ type: actions.SET_CATEGORIES , categories})
    }, [loading])

    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Productos"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={!loading && categories.map(cat =>
                        (<Link to={`/${cat.code.toLowerCase()}`} className={classes.dropdownLink}>
                            {cat.name}
                        </Link>))
                    }
                />
            </ListItem>
            {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-facebook"
                    title="Seguinos en facebook"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        href="https://www.facebook.com/NorbikesTrek/"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-facebook"}/>
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="Seguinos en instagram"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        href="https://www.instagram.com/norbikes/"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-instagram"}/>
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="comunicate con nosotros"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=+5491153204728"
                        className={classes.navLink}
                    >
                        <WhatsAppIcon/>
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}

export default HeaderLinks
