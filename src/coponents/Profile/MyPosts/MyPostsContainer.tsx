import React, {ChangeEvent} from 'react';
import {
    addPostAC,
    changeNewTextAC,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
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

let mapStateToProps = (state:AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:(action: DispathActionType) => void) => {
    return {
        updateNewPostText: (text:string) => {
            dispatch(changeNewTextAC(text))
        },
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)




export default MyPostsContainer;