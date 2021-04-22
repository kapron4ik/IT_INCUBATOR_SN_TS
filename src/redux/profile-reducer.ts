import {profileAPI, usersAPI} from "../api/api";
import {DispatchType, DispathActionType, GetStateType} from "../types/entities";

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

type ContactsUserType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

type PhotosUserType = {
    small: string
    large: string
}

export type ProfileUserType = {
    aboutMe: string
    contacts: ContactsUserType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosUserType
}

type PostsType = {
    id: number
    message: string
    likesCount: number
}

type InitialStateType = {
    posts: Array<PostsType>
    profile: ProfileUserType
    status: string
    // profile: any
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Привет! Как дела?', likesCount: 12},
        {id: 2, message: 'Привет! Это мой первый пост', likesCount: 1},
        {id: 3, message: 'Да как и вчера, ты все прекрастно понимаешь.', likesCount: 18},
    ],
    profile: {
        aboutMe: "string",
        contacts: {
            facebook: "string",
            website: "string",
            vk: "string",
            twitter: "string",
            instagram: "string",
            youtube: "string",
            github: "string",
            mainLink: "string"
        },
        lookingForAJob: true,
        lookingForAJobDescription: "string",
        fullName: "string",
        userId: 1,
        photos: {
            small: "string",
            large: "string"
        }
    },
    status: "",
    // profile: null
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
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.status
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

export const setUserProfileAC = (profile: ProfileUserType) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data))
        })
    }
}

export const setStatusAC = (status: string) => {
    return {
        type: "SET_STATUS",
        status
    } as const
}

export const getStatus = (userId: string) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusAC(response.data))
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
    }
}