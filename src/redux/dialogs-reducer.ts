import {DialogsPageType, DispathActionType, MessagesType} from "./Store";

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

export const dialogsReducer = (state: DialogsPageType, action: DispathActionType) => {
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