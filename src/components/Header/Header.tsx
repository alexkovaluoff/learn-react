import React from "react";
import classes from './Header.module.css'

const Header = () => {
    return <header className={classes.header}>
                <img src='/assets/logo.png' alt='Logo'/>
            </header>
}

export default Header;