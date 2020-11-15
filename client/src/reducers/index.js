import {combineReducers} from "redux";
import watson from "./watson";
import app from "./app";

const combinedReducers = combineReducers({
    watson,
    app
});

export default combinedReducers;

