import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersSel = (state:AppStateType) => {
    return state.usersPage.users
}

export const getPagesSize = (state:AppStateType) => {
    return state.usersPage.pagesSize
}

export const getTotalUsersCount = (state:AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingIsProgress = (state:AppStateType) => {
    return state.usersPage.followingIsProgress
}