import { CHAT_TOGGLE, SET_OFFSET } from "./types";

export const toggleChat = () => (dispatch) => {
    dispatch({
        type: CHAT_TOGGLE,
        payload: null
    })
}

export const setOffset = (offset) => (dispatch) => {
    dispatch({
        type: SET_OFFSET,
        payload: offset
    })
}