import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Messages = (props: any) => {

    let dialogsElements = props.dialogs
        .map( (d: {id: number, name: string}) => <DialogItem key={d.id} name={d.name} id={d.id} /> );

    let messagesElements = props.messages
        .map( (m:{id: number, msg: string}) => <Message key={m.id} message={m.msg} />);

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