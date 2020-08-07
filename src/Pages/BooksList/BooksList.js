import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Books from '../../Services/Books';

const BooksList = () => {
    const books = useSelector(state => { return state.books.data });
    const dispatch = useDispatch();

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = () => {
        Books.get().then(res => {
            console.log('dentro', res)

            dispatch({ type: 'CLEAN' })
            res.forEach(book => {
                console.log('book', book)
                dispatch({ type: 'ADD', title: book.name })
            });
        });
    }

    const addBook = () => {
        //dispatch({ type: 'ADD', title: 'JS' })
        Books.post({ name: 'Book Name' });
        getBooks();
    }

    return (
        <div className="container-fluid">
            <ul>
                {books.map((book, index) => <li key={index}>{book}</li>)}
                {books.map((book, index) => <li key={index}>{book}</li>)}
                {books.map((book, index) => <li key={index}>{book}</li>)}
                {books.map((book, index) => <li key={index}>{book}</li>)}
                {books.map((book, index) => <li key={index}>{book}</li>)}
                {books.map((book, index) => <li key={index}>{book}</li>)}
            </ul>
            <button className="btn btn-primary" type="button" onClick={addBook}>Add Book</button>
        </div>
    );
}

export default BooksList;
