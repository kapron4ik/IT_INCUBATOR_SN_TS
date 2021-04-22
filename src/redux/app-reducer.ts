import {DispatchType, DispathActionType, GetStateType} from "../types/entities";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

export type AppType = {
    initialized: boolean
}

type PropsType = AppType

let initialState = {
    initialized: false
}

export const appReducer = (state: PropsType = initialState, action: DispathActionType): PropsType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}


export const initializedSuccess = () => {
    return {
        type: "INITIALIZED_SUCCESS"
    } as const
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })
}
