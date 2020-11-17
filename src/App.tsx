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
import state, {StoreType} from "./redux/Store";


type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()
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
                    />}/>
                    < Route path="/profile" render={() => <Profile
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        addPost={props.store.addPost.bind(props.store)}
                        updateNewPostText = {props.store.updateNewPostText.bind(props.store)}
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