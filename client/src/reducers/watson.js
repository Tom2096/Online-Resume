import {
    INPUT_SUCCESS, 
    INPUT_FAIL, 
    SESSION_SUCCESS, 
    SESSION_FAIL,
    MESSAGE_SUCCESS,
    MESSAGE_FAIL
} from "../actions/types";

import axios from "axios";

const initalState = {
    messages:[]
}

export default (state=initalState, action) => {
    const {type, payload} = action;
    let {messages} = state;

    switch(type) {
        case INPUT_SUCCESS:
            messages = [...messages, {
                message: payload,
                type: "user"
            }]
            return {
                ...state,
                messages
            }
        case INPUT_FAIL:
            return {
                ...state
            }
        case SESSION_SUCCESS:
            delete axios.defaults.headers.common["session_id"];
            axios.defaults.headers.common["session_id"] = payload["session_id"];
            return {
                ...state
            }
        case SESSION_FAIL:
            return {
                ...state
            }
        case MESSAGE_SUCCESS:
            messages = [...messages, {
                message: payload,
                type: "watson"
            }]
            return {
                ...state,
                messages
            }
        case MESSAGE_FAIL:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}
