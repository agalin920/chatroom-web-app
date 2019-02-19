
import { ADD_USER, USERS_LIST } from '../constants/ActionTypes';

const initialState = [{
    name: "Bot",
    id: 0
}]

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER: 
            return state = [...state, {name:action.name, id: state[state.length - 1].id + 1}];

        case USERS_LIST:
            return action.users;
        
        default:
            return state;
    }
}

export default usersReducer;