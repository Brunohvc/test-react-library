import { createStore, combineReducers } from 'redux';

const INITIAL_STATE_BOOKS = {
    data: []
};

const INITIAL_STATE_USER = {
    data: null
};

function books(state = INITIAL_STATE_BOOKS, action) {
    switch (action.type) {
        case 'ADD':
            delete action.type;
            return { ...state, data: [...state.data, action] }
        case 'CLEAN':
            return { ...state, data: [] }
        default:
            return state;
    }
}

function singIn(state = INITIAL_STATE_USER, action) {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem("userData", JSON.stringify(action.userData));
            return { ...state, data: action.userData }
        case 'LOGOUT':
            localStorage.removeItem("userData");
            return { ...state, data: null }
        default:
            return state;
    }
}


const store = createStore(combineReducers({ books, singIn }));

export default store;