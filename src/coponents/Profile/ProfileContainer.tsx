import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, ProfileUserType, setUserProfileAC, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// type PropsType = {
//     profile: ProfileUserType
//     setUserProfile: (profile: ProfileUserType) => void
// }

type MapStateToPropsType = {
    profile: ProfileUserType
    status: string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void

}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            // userId = "2"
            userId = "13170"
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    render() {
        return (
            // <Profile {...this.props} profile={this.props.profile}/>
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }

}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)