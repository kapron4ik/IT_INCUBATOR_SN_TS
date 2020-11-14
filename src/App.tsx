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
import {RootStateType} from "./redux/Store";

type appType = {
    state: RootStateType
}

const App = (props:appType) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          < Header/>
          < Navbar/>
          <div className='app-wrapper-content'>
            < Route path="/dialogs" render={() => <Dialogs
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
                newMessageBody={props.state.dialogsPage.newMessageBody}
            />}/>
            < Route path="/profile" render={() => <Profile
                posts={props.state.profilePage.posts}
                newPostText={props.state.profilePage.newPostText}
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