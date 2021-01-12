import React from 'react';
import './App.css';
import Header from './coponents/Header/Header';
import Navbar from './coponents/Navbar/Navbar';
import Profile from './coponents/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./coponents/News/News";
import Music from "./coponents/Music/Music";
import Settings from "./coponents/Settings/Settings";
import DialogsContainer from "./coponents/Dialogs/DialogsContainer";
import UsersContainer from "./coponents/Users/UsersContainer";




const App = () => {
    // const state = props.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                < Header/>
                < Navbar/>
                <div className='app-wrapper-content'>
                    < Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    < Route path="/profile" render={() => <Profile/>}/>
                    < Route path="/news" render={() => <News/>}/>
                    < Route path="/music" render={() => <Music/>}/>
                    < Route path="/settings" render={() => <Settings/>}/>
                    < Route path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;