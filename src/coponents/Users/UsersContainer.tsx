import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DispathActionType} from "../../types/entities";
import {
    follow,
    unfollow,
    setUsers,
    UserType,
    setCurentPage,
    setTotalUsersCount, toggleIsFetching
} from "../../redux/users-reducer";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from '../../api/api';

type PropsType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (users: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean)=> void
}

class UsersApiContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pagesSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    setPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pagesSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? < Preloader /> : null }
            <Users
            users={this.props.users}
            totalUsersCount = {this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            followUser={this.props.followUser}
            pagesSize={this.props.pagesSize}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}
            setUsers={this.props.setUsers}
            unfollowUser={this.props.unfollowUser}
            setPageChanged={this.setPageChanged}
        />
        </>
    }
}


let mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch:(action: DispathActionType) => void) => {
//     return {
//         followUser: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollowUser: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalUsersCount: (usersCount: number) => {
//             dispatch(setTotalUsersCountAC(usersCount))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurentPageAC(currentPage))
//         },
//         toggleIsFetching: (isFetching: boolean)=> {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

const UsersContainer = connect (mapStateToProps, {
    followUser: follow,
    unfollowUser: unfollow,
    setUsers: setUsers,
    setTotalUsersCount: setTotalUsersCount,
    setCurrentPage: setCurentPage,
    toggleIsFetching: toggleIsFetching
})(UsersApiContainer)

export default UsersContainer;