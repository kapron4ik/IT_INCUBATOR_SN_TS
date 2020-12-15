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

type InitialStateType = {
    posts: Array<PostsType>
    newPostText: string
}

let initialState = {
    posts: [
        {id: 1, message: 'Привет! Как дела?', likesCount: 12},
        {id: 2, message: 'Привет! Это мой первый пост', likesCount: 1},
        {id: 3, message: 'Да как и вчера, ты все прекрастно понимаешь.', likesCount: 18},
    ],
    newPostText: 'bla-bla-car-dub'
}

export const profileReducer = (state: InitialStateType = initialState, action: DispathActionType):InitialStateType => {
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