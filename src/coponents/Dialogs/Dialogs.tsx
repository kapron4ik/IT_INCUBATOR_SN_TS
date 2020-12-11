import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageAC,
    changeNewMessageTextAC,
    DialogsType,
    DispathActionType,
    MessagesType,
} from "../../redux/Store";

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
    dispath: (action:DispathActionType) => void
}

const Dialogs: React.FC<PropsType> = (props) => {
    // let state = props.

    let dialogsElement = props.dialogs.map(d => < DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(m => < Message message={m.message} id={m.id}/>);
    let newMessageBody = props.newMessageBody;

    const onMassegaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispath(changeNewMessageTextAC(e.currentTarget.value))
    }

    const onAddMessage = () => {
        props.dispath(addMessageAC(props.newMessageBody))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div><textarea onChange={onMassegaChange} value = {newMessageBody}
                placeholder='Enter your message'/></div>
                <div><button onClick={onAddMessage}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;