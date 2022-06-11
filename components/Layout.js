import React, {useEffect} from 'react';
import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import {AppBar, Button, Container, Switch, Toolbar} from "@mui/material";
import classes from "../utils/classes";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Layout = ({children, title, loadTheme}) => {
    const dispatch = useDispatch()
    const {selectTheme} = useSelector(state => state.selectTheme)
    const changeThemeHandler = () => dispatch({type: selectTheme === 'light' ? "DARK_THEME" : "LIGHT_THEME"})

    return (
        <>
            <Head>
                <title>{title ? title : "Home"}</title>
            </Head>
            <AppBar color="neutral" sx={classes.header} position="sticky">
                <Container sx={classes.nav}>
                    <Toolbar component="nav">
                        Home
                    </Toolbar>
                    <Switch checked={selectTheme !== 'light'} onChange={changeThemeHandler}/>
                    <Button startIcon={<ShoppingCartIcon/>} variant="outlined">Buy</Button>
                </Container>
            </AppBar>
            <Container component="main">
                {children}
            </Container>
            <Container component="footer">

            </Container>
        </>
    );
};

export default Layout;