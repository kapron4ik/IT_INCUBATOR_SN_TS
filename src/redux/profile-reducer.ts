import {DispathActionType, PostsType, ProfilePageType} from "./Store";

// type ActionType = ReturnType<typeof addPostAC> |
//     ReturnType<typeof changeNewTextAC>
//
// export const addPostAC = (postText: string) => {
//     return {
//         type: "ADD-POST",
//         postText: postText
//     } as const
// }
//
// export const changeNewTextAC = (newText: string) => {
//     return {
//         type: "CHANGE-NEW_TEXT",
//         newText: newText
//     } as const
// }

export const profileReducer = (state: ProfilePageType, action: DispathActionType) => {
    switch (action.type) {
        case "ADD-POST":
        const newPost: PostsType = {
            id: 4,
            message: action.postText,
            likesCount: 0
        }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case "CHANGE-NEW_TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}