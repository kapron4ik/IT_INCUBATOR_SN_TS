
// type NewMessageBodyType = {
//     newMessageBody: string
// }

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

let state: RootStateType = {
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
};

export default state;