import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import Books from '../../Services/Books';

const BooksList = () => {
    const books = useSelector(state => { return state.data });
    const [logOut, setlogOut] = useState(false);
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

    const clickLogOut = () => {
        localStorage.removeItem("userData");
        setlogOut(true);
    }

    return (
        <div>
            <button className="btn btn-primary" type="button" onClick={clickLogOut}>LogOut</button>
            <ul>
                {books.map((book, index) => <li key={index}>{book}</li>)}
            </ul>
            <button className="btn btn-primary" type="button" onClick={addBook}>Add Book</button>
            {logOut && <Redirect to={{ pathname: '/login' }} />}
        </div>
    );
}

export default BooksList;
