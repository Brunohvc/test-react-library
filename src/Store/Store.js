import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [
        'Livro 1',
        'Livro 2',
        'Livro 3',
    ]
};

function books(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD':
            return { ...state, data: [...state.data, action.title] }
        default:
            return state;
    }
}


const store = createStore(books);
export default store;