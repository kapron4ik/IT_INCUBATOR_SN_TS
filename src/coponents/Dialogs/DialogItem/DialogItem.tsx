import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType} from "../Dialogs";

const DialogItem: React.FC<DialogsType> = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;