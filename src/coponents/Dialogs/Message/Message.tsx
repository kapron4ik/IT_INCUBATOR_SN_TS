import React from 'react';
import s from '../Dialogs.module.css'
import {MessagesType} from "../../../redux/Store";

const Message:React.FC<MessagesType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;