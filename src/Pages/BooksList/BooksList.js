import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Books from '../../Services/Books';
import BookItem from './BookItem';

const BooksList = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => { return state.books.data });
    const user = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = () => {
        Books.get().then(res => {
            dispatch({ type: 'CLEAN' })
            res.forEach(book => {
                dispatch({ type: 'ADD', ...book })
            });
        });
    }

    return (
        <div className="container-book-list">
            {books.map((book, index) => <BookItem key={index} book={book} user={user} atualizar={getBooks} />)}
        </div>
    );
}

export default BooksList;
