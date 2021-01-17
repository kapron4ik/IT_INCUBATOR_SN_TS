import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileUserType, setUserProfileAC} from "../../redux/profile-reducer";
import Profile from "./Profile";


type PropsType = {
    profile: ProfileUserType
    setUserProfile: (profile: ProfileUserType) => void
}


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(ProfileContainer)