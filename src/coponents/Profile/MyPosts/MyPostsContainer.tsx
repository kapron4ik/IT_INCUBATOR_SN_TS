import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostAC, changeNewTextAC, DispathActionType, PostsType} from "../../../redux/Store";
import MyPosts from "./MyPosts";

type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    // addPost: (postText: string) => void
    // updateNewPostText: (text: string) => void
    dispatch: (action: DispathActionType) => void
}

const MyPostsContainer: React.FC<PropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let onAddPost = () => {
        props.dispatch(addPostAC(props.newPostText))
        // props.addPost(props.newPostText)
    };

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value))
        // props.updateNewPostText(e.currentTarget.value);
    }
    return (
        <MyPosts />
    )
}


export default MyPostsContainer;