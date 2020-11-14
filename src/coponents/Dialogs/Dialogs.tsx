import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/Store";

const Dialogs: React.FC<DialogsPageType> = (props) => {
    // let state = props.

    let dialogsElement = props.dialogs.map(d => < DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(m => < Message message={m.message} id={m.id}/>);
    let newMessageBody = props.newMessageBody;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div><textarea value = {newMessageBody}
                placeholder='Enter your message'/></div>
                <div><button>Send</button></div>
            </div>
            <div>sdfgsdfgsdfg</div>
        </div>
    )
}

export default Dialogs;