import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType, ProfilePageType} from "../../../redux/Store";

type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: (postText: string) => void
    updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let onAddPost = () => {
            props.addPost(props.newPostText)
    };

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <button  onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}


export default MyPosts;