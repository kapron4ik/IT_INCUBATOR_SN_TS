import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {ProfileUserType} from "../../redux/profile-reducer";
import {AuthUserType} from "../../redux/auth-reducer";

type PropsType = {
    isAuth: boolean
    login: string
    logout: () => void
}

const Header = (props: PropsType) => {
    return <header className={s.header}>
        <img src='https://cdn.worldvectorlogo.com/logos/puma-logo.svg'/>
        <div className={s.login}>
            {props.isAuth
                ? <div>{props.login} -
                    <button onClick={props.logout}>Log out</button>
                </div>
                : <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
}

export default Header;