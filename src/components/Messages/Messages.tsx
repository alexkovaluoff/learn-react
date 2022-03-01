import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Messages = (props: any) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogs
        .map( (d: {id: number, name: string}) => {
                return (
                    <div className={classes.dialogsItems}>
                        <img src='assets/postava.png'/>
                        <DialogItem key={d.id} name={d.name} id={d.id}/>
                    </div>
                )
            }
        );

    let messagesElements = state.messages
        .map( (m:{id: number, msg: string}) => {
            return (
                <div className={classes.message}>
                    <img src='assets/postava.png'/>
                    <Message key={m.id} message={m.msg}/>
                </div>
            )
        }
        );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (event: any) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));

    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea
                            placeholder='Введи своё сообщение'
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;