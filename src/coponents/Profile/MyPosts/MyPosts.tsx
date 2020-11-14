import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {ProfilePageType} from "../../../redux/Store";



const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    // let newPostElement = React.createRef();

    let onAddPost = () => {
        // props.addPost();
    };

    let onPostChange = () => {
        // let text = newPostElement.current.value;
        // props.updateNewPostText(text);
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