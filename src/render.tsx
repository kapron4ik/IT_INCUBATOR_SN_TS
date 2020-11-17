import {RootStateType} from "./redux/Store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import store from "./redux/Store";

export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}