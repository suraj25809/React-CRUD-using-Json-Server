import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        backgroundColor: '#212121',
    },
    spacing :{
        paddingLeft: 20,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    }
  });

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar >
                <NavLink to="/" className={classes.spacing}> React JS Crud</NavLink>
                <NavLink to="all" className={classes.spacing}> All Users</NavLink>
                <NavLink to="add" className={classes.spacing}> Add Users</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;