import classes from "../Messages.module.css";
import React from "react";

const Message = (props: any) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

export default Message