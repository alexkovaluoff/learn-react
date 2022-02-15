import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.sideBar}>
            <div>
                <nav className={classes.nav}>
                    <div className={classes.item}>
                        <NavLink className={(navData) => navData.isActive ? classes.active : "" } to='/profile'>Profile</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink className={(navData) => navData.isActive ? classes.active : "" } to='/messages'>Messages</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink className={(navData) => navData.isActive ? classes.active : "" } to='/news'>News</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink className={(navData) => navData.isActive ? classes.active : "" } to='/music'>Music</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink className={(navData) => navData.isActive ? classes.active : "" } to='/settings'>Settings</NavLink>
                    </div>
                </nav>
            </div>
            <div className={classes.friendsBlock}>
                <div>
                    <p>Friends</p>
                </div>
                <div className={classes.friendsBlockContent}>
                    <div>
                        <img src='/assets/postava.png'/>
                        Стасон
                    </div>
                    <div>
                        <img src='/assets/postava.png'/>
                        Владос
                    </div>
                    <div>
                        <img src='/assets/postava.png'/>
                        Сухой
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;