import React from 'react';
import Header from "./Header";
import axios from "axios";
import {AuthUserType, setAuthUserDataAC} from '../../redux/auth-reducer';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps} from "react-router-dom";

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

type MapDispatchToPropsType = {
    setAuthUserData: (userData: AuthUserType) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0){
                    // this.props.setAuthUserData(response.data.data)
                    this.props.setAuthUserData(response.data.data)
                }
                debugger
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: AppStateType)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData:setAuthUserDataAC})(HeaderContainer);