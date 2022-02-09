import React from "react";
import classes from "./Messages.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props: any) => {
    return (
        <div className={classes.dialog}>
            <NavLink className={(navData) => navData.isActive ? classes.active : "" } to={'/messages/'+props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Messages = (props: any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Vlados" id='1' />
                <DialogItem name="Antoha" id='2' />
                <DialogItem name="Slaviks" id='3' />
                <DialogItem name="Stason" id='4' />
                <DialogItem name="Suhoi" id='5' />
                <DialogItem name="Aboba" id='6' />
            </div>
            <div className={classes.messages}>
                <Message message='Чё каво?' />
                <Message message='Мяу' />
                <Message message='Welcome to USA' />
                <Message message='Пиксельплекс' />
                <Message message='я пакакал' />
                <Message message='Хай гёрлс энд хаай зяблс' />
            </div>
        </div>
    )
}

export default Messages;