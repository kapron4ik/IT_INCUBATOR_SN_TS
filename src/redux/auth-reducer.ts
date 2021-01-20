import {DispathActionType} from "../types/entities";

export type AuthUserType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

type IsAuth = {
    isAuth: boolean
}


type PropsType = AuthUserType & IsAuth

let initialState = {
    id: 0,
    email: "",
    login: "",
    isAuth: false
}

export const authReducer = (state: PropsType = initialState, action: DispathActionType): PropsType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.userData,
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUserDataAC = (userData: AuthUserType) => {
    return {
        type: "SET_USER_DATA",
        userData
    } as const
}
