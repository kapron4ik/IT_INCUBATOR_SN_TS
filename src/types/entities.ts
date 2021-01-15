import {addPostAC, changeNewTextAC} from "../redux/profile-reducer";
import {addMessageAC, changeNewMessageTextAC} from "../redux/dialogs-reducer";
import {
    followAC,
    setCurentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../redux/users-reducer";

export type DispathActionType = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof changeNewMessageTextAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>|
    ReturnType<typeof setCurentPageAC>|
    ReturnType<typeof setTotalUsersCountAC>|
    ReturnType<typeof toggleIsFetchingAC>