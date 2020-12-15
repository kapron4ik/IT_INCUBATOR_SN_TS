import {DialogsPageType, DialogsType, DispathActionType, MessagesType} from "./Store";

// type ActionType = ReturnType<typeof addMessageAC> |
//     ReturnType<typeof changeNewMessageTextAC>
//
// export const addMessageAC = (messageText: string) => {
//     return {
//         type: "ADD-MESSAGE",
//         messageText: messageText
//     } as const
// }
//
// export const changeNewMessageTextAC = (newMessageText: string) => {
//     return {
//         type: "CHANGE-NEW_MESSAGE_TEXT",
//         newMessageText: newMessageText
//     } as const
// }

type InitialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

let initialState = {
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

export const dialogsReducer = (state: InitialStateType = initialState, action: DispathActionType):InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagesType = {
                id: 6,
                message: action.messageText,
            }
            state.messages.push(newMessage)
            state.newMessageBody = ""
            return state
        case "CHANGE-NEW_MESSAGE_TEXT":
            state.newMessageBody = action.newMessageText
            return state
        default:
            return state
    }
}