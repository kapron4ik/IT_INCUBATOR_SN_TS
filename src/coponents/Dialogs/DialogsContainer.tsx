import React from 'react';
import {
    addMessageAC,
    changeNewMessageTextAC,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DispathActionType} from "../../types/entities";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// const DialogsContainer: React.FC<PropsType> = (props) => {
//     const state = props.store.getState().dialogsPage
//
//     const onMessageChange = (text:string) => {
//         props.store.dispatch(changeNewMessageTextAC(text))
//     }
//
//     const onAddMessage = () => {
//         props.store.dispatch(addMessageAC(state.newMessageBody))
//     }
//
//     return <Dialogs
//         state={state}
//         changeNewMessageText = {onMessageChange}
//         addMessage = {onAddMessage} />
// }

let mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch:(action: DispathActionType) => void) => {
    return {
        changeNewMessageText: (text:string) => {
            dispatch(changeNewMessageTextAC(text))
        },
        addMessage: (newMessageBody:string) => {
            dispatch(addMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)