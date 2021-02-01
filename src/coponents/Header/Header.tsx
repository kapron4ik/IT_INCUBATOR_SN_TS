import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {ProfileUserType} from "../../redux/profile-reducer";
import {AuthUserType} from "../../redux/auth-reducer";

type PropsType = {
    isAuth: boolean
    login: string
}

const Header = (props:PropsType) => {
    return <header className={s.header}>
        <img src='https://cdn.worldvectorlogo.com/logos/puma-logo.svg' />
        <div className={s.login}>
            {props.isAuth? props.login: <NavLink to='/login'>Login</NavLink>}

        </div>
    </header>
}

export default Header;