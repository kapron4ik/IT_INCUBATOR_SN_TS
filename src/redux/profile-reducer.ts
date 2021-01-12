import {DispathActionType} from "../types/entities";

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

type PostsType = {
    id: number
    message: string
    likesCount: number
}

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

export const profileReducer = (state: InitialStateType = initialState, action: DispathActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {
                    id: 4,
                    message: action.postText,
                    likesCount: 0
                }],
                newPostText: ""
            }
        case "CHANGE-NEW_TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW_TEXT",
        newText: newText
    } as const
}