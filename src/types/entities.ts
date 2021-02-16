import {addPostAC, changeNewTextAC, setStatusAC, setUserProfileAC} from "../redux/profile-reducer";
import {addMessageAC, changeNewMessageTextAC} from "../redux/dialogs-reducer";
import {
    followSuccess,
    setCurentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from "../redux/users-reducer";
import {setAuthUserDataAC} from "../redux/auth-reducer";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "react";

export type DispathActionType = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof changeNewMessageTextAC> |
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers>|
    ReturnType<typeof setCurentPage>|
    ReturnType<typeof setTotalUsersCount>|
    ReturnType<typeof toggleIsFetching>|
    ReturnType<typeof setUserProfileAC>|
    ReturnType<typeof setAuthUserDataAC>|
    ReturnType<typeof toggleFollowingProgress>|
    ReturnType<typeof setStatusAC>

export type GetStateType = () => AppStateType
export type DispatchType = Dispatch<DispathActionType>
// type ThunkType = ThunkAction<Promise<void>,AppStateType, unknown, DispathActionType>