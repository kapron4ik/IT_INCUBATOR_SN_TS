import React from 'react';
import './App.css';
import Navbar from './coponents/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import News from "./coponents/News/News";
import Music from "./coponents/Music/Music";
import Settings from "./coponents/Settings/Settings";
import DialogsContainer from "./coponents/Dialogs/DialogsContainer";
import UsersContainer from "./coponents/Users/UsersContainer";
import ProfileContainer from "./coponents/Profile/ProfileContainer";
import HeaderContainer from "./coponents/Header/HeaderContainer";
import LoginPage from "./coponents/Login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./coponents/common/Preloader/Preloader";

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    // getAuthUserData: () => void
    initializeApp: () => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<OwnPropsType, AppStateType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            // <BrowserRouter>
            <div className='app-wrapper'>
                < HeaderContainer/>
                < Navbar/>
                <div className='app-wrapper-content'>
                    < Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    < Route path="/users" render={() => <UsersContainer/>}/>
                    < Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    < Route path="/news" render={() => <News/>}/>
                    < Route path="/music" render={() => <Music/>}/>
                    < Route path="/settings" render={() => <Settings/>}/>
                    < Route path="/login" render={() => <LoginPage/>}/>
                </div>
            </div>
            // </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {initialized: state.app.initialized}
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
