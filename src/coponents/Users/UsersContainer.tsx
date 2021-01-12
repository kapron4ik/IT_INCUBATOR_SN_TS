import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DispathActionType} from "../../types/entities";
import {followAC, unfollowAC, setUsersAC, UserType} from "../../redux/users-reducer";


let mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch:(action: DispathActionType) => void) => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;