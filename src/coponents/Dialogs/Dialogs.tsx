import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from 'react-router-dom';

type PropsType = {
    dialogsPage:any //ИСПРАВИТЬ
    changeNewMessageText: (text:string) => void
    addMessage: (newMessageBody:string) => void
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map((d: DialogsType) => < DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map((m: MessagesType) => < Message message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    const onMassegaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageText(e.currentTarget.value)
    }

    const onAddMessage = () => {
        props.addMessage(newMessageBody)
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