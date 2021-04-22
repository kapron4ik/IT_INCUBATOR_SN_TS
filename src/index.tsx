import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


// store.subscribe(renderTree)
// renderTree()
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// @ts-ignore
window.store = store