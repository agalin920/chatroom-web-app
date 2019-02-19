
import { ADD_MESSAGE, MESSAGE_RECEIVED } from '../constants/ActionTypes';

const initialState = [{
    message: "Welcome to the ChatRoom",
    author: "Bot",
    id: 0
}]

const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
        case MESSAGE_RECEIVED:
        return state = [...state, {message:action.message, author:action.author, id: state[state.length - 1].id + 1}]

        default:
            return state;
    }
}

export default messagesReducer