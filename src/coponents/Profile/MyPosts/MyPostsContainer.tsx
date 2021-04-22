import React, {ChangeEvent} from 'react';
import {
    addPostAC
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect, ConnectedComponent} from "react-redux";
import {DispathActionType} from "../../../types/entities";



// const MyPostsContainer = () => {
//     let store = props.store.getState()
//
//     let onAddPost = () => {
//         props.store.dispatch(addPostAC(store.profilePage.newPostText))
//     };
//
//     let onPostChange = (text: string) => {
//         props.store.dispatch(changeNewTextAC(text))
//     }
//     return (
//         <MyPosts updateNewPostText={onPostChange}
//                  addPost={onAddPost}
//                  posts={store.profilePage.posts}
//                  newPostText={store.profilePage.newPostText}/>
//     )
// }

type MapStateType = {
    posts: string
}

type MapDispathType = {
    addPost:(newPostText:string) =>void
}

type PropsType = MapStateType & MapDispathType

let mapStateToProps = (state:AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch:(action: DispathActionType) => void) => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)





export default MyPostsContainer;