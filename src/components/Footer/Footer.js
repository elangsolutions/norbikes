import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import {List, ListItem, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
import {MyLocation as MyLocationIcon} from "@material-ui/icons";

import styles from "../../assets/jss/material/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const {whiteFont} = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <IconButton onClick={() => window.open("https://g.page/norbikes?share")}>
                                <MyLocationIcon />
                            </IconButton>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    elangSolutions &copy; {1900 + new Date().getYear()}
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};
