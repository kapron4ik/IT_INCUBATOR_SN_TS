import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileUserType} from "../../redux/profile-reducer";

type PropsType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status:string)=> void
}

const Profile = (props:PropsType) => {
    return <div className={s.content}>
        < ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />
        < MyPostsContainer/>
    </div>
}


export default Profile;