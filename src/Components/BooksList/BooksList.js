import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';

const BooksList = () => {
    const books = useSelector(state => { return state.data });
    const [logOut, setlogOut] = useState(false);
    const dispatch = useDispatch();

    const addBook = () => {
        dispatch({ type: 'ADD', title: 'JS' })
    }

    const clickLogOut = () => {
        localStorage.removeItem("userData");
        setlogOut(true);
    }

    return (
        <div>
            <button className="btn btn-primary" type="button" onClick={clickLogOut}>LogOut</button>
            <ul>
                {books.map(book => <li key={book}>{book}</li>)}
            </ul>
            <button className="btn btn-primary" type="button" onClick={addBook}>Add Book</button>
            {logOut && <Redirect to={{ pathname: '/login' }} />}
        </div>
    );
}

export default BooksList;
