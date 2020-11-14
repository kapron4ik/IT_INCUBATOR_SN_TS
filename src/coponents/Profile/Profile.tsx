import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/Store";


const Profile: React.FC<ProfilePageType> = (props) => {

    return <div className={s.content}>
        < MyPosts
            posts={props.posts}
            newPostText={props.newPostText}
        />

    </div>
}


export default Profile;