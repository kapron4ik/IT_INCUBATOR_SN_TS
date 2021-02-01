import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileUserType, setUserProfileAC} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {Redirect, RouteComponentProps, withRouter } from 'react-router-dom';


// type PropsType = {
//     profile: ProfileUserType
//     setUserProfile: (profile: ProfileUserType) => void
// }

type MapStateToPropsType = {
    profile: ProfileUserType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId:string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){userId = "2"}
        this.props.getUserProfile(userId)
    }



    render() {
        if (!this.props.isAuth){
            return <Redirect to={"/login"}/>
        }
        return (
            // <Profile {...this.props} profile={this.props.profile}/>
            <Profile {...this.props}/>
        )
    }

}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let  WhithUrlDataComponentComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WhithUrlDataComponentComponent)