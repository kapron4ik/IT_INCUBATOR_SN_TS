import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import { DispathActionType, PostsType} from "../../redux/Store";

type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispath: (action:DispathActionType) => void
    // addPost: (postText: string) => void
    // updateNewPostText: (text: string) => void
}


const Profile: React.FC<PropsType> = (props) => {

    return <div className={s.content}>
        < MyPosts
            posts={props.posts}
            newPostText={props.newPostText}
            dispath={props.dispath}
            // addPost={props.addPost}
            // updateNewPostText={props.updateNewPostText}
        />

    </div>
}


export default Profile;