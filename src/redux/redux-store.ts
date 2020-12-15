import {combineReducers, createStore} from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";



let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})

export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers);

export default store