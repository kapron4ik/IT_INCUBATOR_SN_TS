import {RootStateType} from "./redux/Store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";

// export const renderTree = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }