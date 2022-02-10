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

    let dialogsData = [
        {id: 1, name: 'Vlados'},
        {id: 2, name: 'Antoha'},
        {id: 3, name: 'Slaviks'},
        {id: 4, name: 'Stason'},
        {id: 5, name: 'Suhoi'},
        {id: 6, name: 'Glad Valakas'}
    ];

    let dialogsElements = dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> )

    let messageData = [
        {id: 1, msg: 'Чё каво?'},
        {id: 2, msg: 'Мяу'},
        {id: 3, msg: 'Welcome to USA'},
        {id: 4, msg: 'Пиксельплекс'},
        {id: 5, msg: 'я пакакал'},
        {id: 6, msg: 'Хай гёрлс энд хаай зяблс'}
    ]

    let messagesElements = messageData
        .map( message => <Message message={message.msg} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages;