import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import {List, ListItem, IconButton, Tooltip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
import {MyLocation as MyLocationIcon, WhatsApp as WhatsAppIcon} from "@material-ui/icons";

import styles from "../../assets/jss/material/components/footerStyle.js";
import CustomButton from "../CustomButtons/Button";

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
                        <ListItem className={classes.inlineBlock}>
                            <Tooltip
                                id="instagram-facebook"
                                title="Seguinos en facebook"
                                placement={window.innerWidth > 959 ? "top" : "left"}
                                classes={{tooltip: classes.tooltip}}
                            >
                                <CustomButton
                                    color="transparent"
                                    href="https://www.facebook.com/NorbikesTrek/"
                                    target="_blank"
                                    className={classes.navLink}
                                >
                                    <i className={classes.socialIcons + " fab fa-facebook"}/>
                                </CustomButton>
                            </Tooltip>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <Tooltip
                                id="instagram-tooltip"
                                title="Seguinos en instagram"
                                placement={window.innerWidth > 959 ? "top" : "left"}
                                classes={{tooltip: classes.tooltip}}
                            >
                                <CustomButton
                                    color="transparent"
                                    href="https://www.instagram.com/norbikes/"
                                    target="_blank"
                                    className={classes.navLink}
                                >
                                    <i className={classes.socialIcons + " fab fa-instagram"}/>
                                </CustomButton>
                            </Tooltip>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <Tooltip
                                id="instagram-tooltip"
                                title="comunicate con nosotros"
                                placement={window.innerWidth > 959 ? "top" : "left"}
                                classes={{tooltip: classes.tooltip}}
                            >
                                <CustomButton
                                    color="transparent"
                                    target="_blank"
                                    href="https://api.whatsapp.com/send?phone=+5491153204728"
                                    className={classes.navLink}
                                >
                                    <WhatsAppIcon/>
                                </CustomButton>
                            </Tooltip>
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
