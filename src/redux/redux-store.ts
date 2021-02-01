import {applyMiddleware, combineReducers, createStore} from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

