import {DispatchType, DispathActionType, GetStateType} from "../types/entities";
import {authAPI} from "../api/api";
import { stopSubmit } from "redux-form";

export type AuthUserType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

// type IsAuth = {
//     isAuth: boolean
// }


type PropsType = AuthUserType
// type PropsType = AuthUserType & IsAuth

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
                ...action.payload,
            }
        default:
            return state
    }
}


export const setAuthUserDataAC = (payload:AuthUserType) => {
    return {
        type: "SET_USER_DATA",
        payload
        // payload:{id, login, email, isAuth}
    } as const
}

export const getAuthUserData = () => (dispatch: DispatchType, getState: GetStateType) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0){
            let {id, login, email} = response.data.data
            dispatch(setAuthUserDataAC({id, login, email, isAuth:true}))
        }
    })
}

export const login = (email:string, pasword:string, rememberMe:boolean) => (dispatch: (authUserData: (dispatch: DispatchType, getState: GetStateType) => void)=>void) => {

    authAPI.login(email, pasword, rememberMe).then(response => {
        if (response.data.resultCode === 0){
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length >0
                ?response.data.messages[0]
                :"Some error"
            // @ts-ignore
            dispatch(stopSubmit("login", {_error:message}))
        }
    })
}

export const logout = () => (dispatch: (authUserData: { payload: AuthUserType; type: "SET_USER_DATA" })=>void) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0){
            dispatch(setAuthUserDataAC({id:0, login:"", email:"", isAuth:false}))
        }
    })
}