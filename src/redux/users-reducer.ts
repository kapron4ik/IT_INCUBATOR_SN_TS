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
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState = {
    users: [],
    pagesSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        default:
            return state
    }
}

export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}

export const unfollow = (userId: number) => {
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