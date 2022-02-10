import classes from "../Messages.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props: any) => {
    return (
        <div className={classes.dialog}>
            <NavLink className={(navData) => navData.isActive ? classes.active : "" } to={'/messages/'+props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem