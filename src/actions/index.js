import * as types from '../constants/ActionTypes';


export const addMessage= (message, author) => ({
    type: types.ADD_MESSAGE,
    message,
    author
});

export const addUser = name => ({
    type: types.ADD_USER,
    name
})

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    message,
    author
})

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
})