import React from 'react';
import './index.css';
import store from "./redux/redux-store";
// import {renderTree} from "./render";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";


// store.subscribe(renderTree)
// renderTree()
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);