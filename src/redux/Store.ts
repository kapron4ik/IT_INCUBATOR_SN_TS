// type NewMessageBodyType = {
//     newMessageBody: string
// }


import {renderTree} from "../render";

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
    addPost: (postText: string) => void,
    updateNewPostText: (text: string) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
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
    addPost(postText) {
        const newPost: PostsType = {
            id: 4,
            message: postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange()
        this._state.profilePage.newPostText = ""
    },
    updateNewPostText(text) {
        this._state.profilePage.newPostText = text
        this._onChange()
    },
    _onChange() {
        console.log("Store is change")
    },

    subscribe(callback: () => void) {
        this._onChange = callback
    },

    getState() {
        return this._state
    }
}

export default store;