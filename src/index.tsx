import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/Store";


ReactDOM.render(
    <App state = {state}/>,
document.getElementById('root')
);
