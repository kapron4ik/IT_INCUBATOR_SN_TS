import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type FormDataType = {
    newPostText: string
}

type PropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
}

let maxLength10 = maxLengthCreator(10)

const AddPostMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostText"} type="text"
            validate = {[required, maxLength10]}
            placeholder="Post message"/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostMessageFormRedux = reduxForm<FormDataType>({
    form:'profileAddMessageForm'
})(AddPostMessageForm)

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    const addNewMessage = (formData:FormDataType)=> {
        props.addPost(formData.newPostText)
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddPostMessageFormRedux onSubmit={addNewMessage}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}


export default MyPosts;