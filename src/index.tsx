import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import {renderTree} from "./render";


store.subscribe(renderTree)
renderTree()
