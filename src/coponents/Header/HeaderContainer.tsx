import React from 'react';
import Header from "./Header";
import axios from "axios";
import {AuthUserType, getAuthUserData, logout} from '../../redux/auth-reducer';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps} from "react-router-dom";
import {authAPI, usersAPI} from "../../api/api";

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

type MapDispatchToPropsType = {
    logout: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<PropsType> {


    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: AppStateType)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer);