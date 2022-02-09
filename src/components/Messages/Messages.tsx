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

    let messageData = [
        {id: 1, msg: 'Чё каво?'},
        {id: 2, msg: 'Мяу'},
        {id: 3, msg: 'Welcome to USA'},
        {id: 4, msg: 'Пиксельплекс'},
        {id: 5, msg: 'я пакакал'},
        {id: 6, msg: 'Хай гёрлс энд хаай зяблс'}
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].msg} />
                <Message message={messageData[1].msg} />
                <Message message={messageData[2].msg} />
                <Message message={messageData[3].msg} />
                <Message message={messageData[4].msg} />
                <Message message={messageData[5].msg} />
            </div>
        </div>
    )
}

export default Messages;