import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileUserType, setUserProfileAC} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {RouteComponentProps, withRouter } from 'react-router-dom';


// type PropsType = {
//     profile: ProfileUserType
//     setUserProfile: (profile: ProfileUserType) => void
// }

type MapStateToPropsType = {
    profile: ProfileUserType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileUserType) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })

    }



    render() {
        return (
            // <Profile {...this.props} profile={this.props.profile}/>
            <Profile {...this.props}/>
        )
    }

}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

let  WhithUrlDataComponentComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(WhithUrlDataComponentComponent)