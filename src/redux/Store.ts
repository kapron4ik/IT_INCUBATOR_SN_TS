// type NewMessageBodyType = {
//     newMessageBody: string
// }

import { profileReducer } from "./profile-reducer"
import {dialogsReducer} from "./dialogs-reducer";

export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

// type NewPostTextType = {
//     newPostText: string
// }

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export type StoreType = {
    _state: RootStateType
    // addPost: (postText: string) => void,
    // updateNewPostText: (text: string) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispath: (action: DispathActionType) => void
}

// type ChangeNewTextActionType = {
//     type: "CHANGE-NEW_TEXT"
//     newText: string
// }

// type ChangeNewTextActionType = ReturnType <typeof changeNewTextAC>

export type DispathActionType = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof changeNewMessageTextAC>

export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}

// export const changeNewTextAC = (newText: string):ChangeNewTextActionType => {
//     return {
//         type: "CHANGE-NEW_TEXT",
//         newText: newText
//     } as const
// }

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW_TEXT",
        newText: newText
    } as const
}

export const addMessageAC = (messageText: string) => {
    return {
        type: "ADD-MESSAGE",
        messageText: messageText
    } as const
}

export const changeNewMessageTextAC = (newMessageText: string) => {
    return {
        type: "CHANGE-NEW_MESSAGE_TEXT",
        newMessageText: newMessageText
    } as const
}


const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет! Как дела?', likesCount: 12},
                {id: 2, message: 'Привет! Это мой первый пост', likesCount: 1},
                {id: 3, message: 'Да как и вчера, ты все прекрастно понимаешь.', likesCount: 18},
            ],
            newPostText: 'bla-bla-car-dub'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vasia'},
                {id: 2, name: 'Pavlik'},
                {id: 3, name: 'Dunkan'},
                {id: 4, name: 'Kim'},
                {id: 5, name: 'Dima'},
            ],
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Как вы сегодня доехали на работу?'},
                {id: 3, message: 'Да как и вчера, ты все прекрастно понимаешь.'},
                {id: 4, message: '100₴'},
                {id: 5, message: 'Йо'},
            ],
            newMessageBody: ""
        }
    },

    _onChange() {
        console.log("Store is change")
    },
    subscribe(callback: () => void) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispath(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._onChange()
    }
}

export default store;