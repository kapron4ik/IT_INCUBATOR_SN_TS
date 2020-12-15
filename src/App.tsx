import React from 'react';
import './App.css';
import Header from './coponents/Header/Header';
import Navbar from './coponents/Navbar/Navbar';
import Profile from './coponents/Profile/Profile';
import Dialogs from "./coponents/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./coponents/News/News";
import Music from "./coponents/Music/Music";
import Settings from "./coponents/Settings/Settings";
import {AppStateType} from "./redux/redux-store";
import {DispathActionType, RootStateType} from "./redux/Store";


type PropsType = {
    store: any
    // store: AppStateType
    // _onChange: () => void
    // subscribe: (callback: () => void) => void
    // getState: () => RootStateType
    // dispath: (action: DispathActionType) => void
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                < Header/>
                < Navbar/>
                <div className='app-wrapper-content'>
                    < Route path="/dialogs" render={() => <Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessageBody={state.dialogsPage.newMessageBody}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    < Route path="/profile" render={() => <Profile
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        dispatch={props.store.dispatch.bind(props.store)}
                        // addPost={props.store.addPost.bind(props.store)}
                        // updateNewPostText = {props.store.updateNewPostText.bind(props.store)}
                    />}/>
                    < Route path="/news" render={() => <News/>}/>
                    < Route path="/music" render={() => <Music/>}/>
                    < Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;