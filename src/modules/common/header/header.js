import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core/index'
import {Menu as MenuIcon} from '@material-ui/icons/index'
import styles from './styles.js'
import { makeStyles } from "@material-ui/core/styles/index";

const useStyles = makeStyles(styles);


const Header = () => {

    const classes = useStyles()

    return (<>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar></>)
}

export default Header