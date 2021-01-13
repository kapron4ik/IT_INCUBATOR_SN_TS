import {DispathActionType} from "../types/entities";

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
}

let initialState = {
    users: []
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
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}