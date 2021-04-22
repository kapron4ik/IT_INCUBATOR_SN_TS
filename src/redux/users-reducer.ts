import {DispatchType, DispathActionType, GetStateType} from "../types/entities";
import {usersAPI} from "../api/api";
import {Dispatch} from "react";
import {AppStateType} from "./redux-store";

type LocationType = {
    city: string
    country: string
}

type urlPhoto = {
    small: string
    large: string
}

export type UserType = {
    id: number
    photos: urlPhoto
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type UsersPageType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingIsProgress: Array<number>
}

let initialState = {
    users: [],
    pagesSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: DispathActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((user: UserType) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((user: UserType) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case "SET_CURENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingIsProgress: action.isFetching
                    ? [...state.followingIsProgress, action.userId]
                    : state.followingIsProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}
export const setTotalUsersCount = (usersCount: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        usersCount: usersCount
    } as const
}
export const setCurentPage = (currentPage: number) => {
    return {
        type: "SET_CURENT_PAGE",
        currentPage
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: "TOGGLE_FOLLOWING_PROGRESS",
        isFetching,
        userId
    } as const
}




export const getUsers = (page: number, pagesSize: number) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(page, pagesSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setCurentPage(page))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
        .then(response => {
            dispatch(toggleFollowingProgress(false, userId))
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
        })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
        .then(response => {
            dispatch(toggleFollowingProgress(false, userId))
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
        })
    }
}
