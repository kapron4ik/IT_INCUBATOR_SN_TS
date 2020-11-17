import React from 'react';
import './index.css';
import store from "./redux/Store";
import {renderTree} from "./render";


store.subscribe(renderTree)
renderTree()
