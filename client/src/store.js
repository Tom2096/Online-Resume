import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import combinedReducers from "./reducers";

import {composeWithDevTools} from "redux-devtools-extension";

const initalState = {};

const middleware = [thunk];

const store = createStore(
    combinedReducers, 
    initalState,  
    composeWithDevTools(applyMiddleware(...middleware))  
)

export default store;
