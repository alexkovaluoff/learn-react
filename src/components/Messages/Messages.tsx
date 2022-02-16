import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Messages = (props: any) => {

    let dialogsElements = props.state.dialogs
        .map( (d: {id: number, name: string}) => {
                return (
                    <div className={classes.dialogsItems}>
                        <img src='assets/postava.png'/>
                        <DialogItem key={d.id} name={d.name} id={d.id}/>
                    </div>
                )
            }
        );

    let messagesElements = props.state.messages
        .map( (m:{id: number, msg: string}) => {
            return (
                <div className={classes.message}>
                    <img src='assets/postava.png'/>
                    <Message key={m.id} message={m.msg}/>
                </div>
            )
        }
        );

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages;