import {
    CHAT_TOGGLE,
    SET_OFFSET
} from "../actions/types";

const initalState = {
    showChat: false,
    offset: 0,
}

export default (state=initalState, action) => {
    const {type, payload} = action;
    const newState = {...state};

    switch(type) {
        case CHAT_TOGGLE:        
            newState.showChat = !newState.showChat;
            return newState;
        case SET_OFFSET:
            newState.offset = payload;
            return newState;
        default:
            return newState;
    }
}
