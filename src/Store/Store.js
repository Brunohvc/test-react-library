import { createStore } from 'redux';

const INITIAL_STATE = {
    data: []
};

function books(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD':
            return { ...state, data: [...state.data, action.title] }
        case 'CLEAN':
            return { ...state, data: [] }
        default:
            return state;
    }
}


const store = createStore(books);

export default store;