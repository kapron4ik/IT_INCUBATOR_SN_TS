import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

type PropsType = {
    dialogsPage: any //ИСПРАВИТЬ
    addMessage: (newMessageBody: string) => void
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

type FormDataType = {
    newMessageBody: string
}
const maxLength10 = maxLengthCreator(10)
const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newMessageBody"
                   placeholder='Enter your message'
                   validate={[required, maxLength10]}/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map((d: DialogsType) => < DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map((m: MessagesType) => < Message message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    const addNewMessage = (formData:FormDataType) => {
        props.addMessage(formData.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;