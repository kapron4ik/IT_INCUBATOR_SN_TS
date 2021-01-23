import {addPostAC, changeNewTextAC, setUserProfileAC} from "../redux/profile-reducer";
import {addMessageAC, changeNewMessageTextAC} from "../redux/dialogs-reducer";
import {
    follow,
    setCurentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../redux/users-reducer";
import {setAuthUserDataAC} from "../redux/auth-reducer";

export type DispathActionType = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof changeNewMessageTextAC> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers>|
    ReturnType<typeof setCurentPage>|
    ReturnType<typeof setTotalUsersCount>|
    ReturnType<typeof toggleIsFetching>|
    ReturnType<typeof setUserProfileAC>|
    ReturnType<typeof setAuthUserDataAC>|
    ReturnType<typeof toggleFollowingProgress>