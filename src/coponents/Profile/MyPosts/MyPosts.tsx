import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type PropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let onAddPost = () => {
        // props.dispatch(addPostAC(props.newPostText))
        props.addPost(props.newPostText)
    };

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(changeNewTextAC(e.currentTarget.value))
        props.updateNewPostText(e.currentTarget.value);
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}


export default MyPosts;