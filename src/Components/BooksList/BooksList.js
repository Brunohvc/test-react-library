import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const BooksList = () => {
    const books = useSelector(state => state.data);
    const dispatch = useDispatch();

    const addBook = () => {
        dispatch({ type: 'ADD', title: 'JS' })
    }

    return (
        <div>
            <ul>
                {books.map(book => <li key={book}>{book}</li>)}
            </ul>
            <button type="button" onClick={addBook}>Add Book</button>
        </div>
    );
}

export default BooksList;
